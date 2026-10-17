# Maz technical task

![Product list page](/docs/products-page.jpg)

## Setup

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Runs on `http://localhost:3000`.

## Scripts

```bash
pnpm dev        # dev mode
pnpm build      # production build
pnpm preview    # preview production build
pnpm lint       # eslint
pnpm typecheck  # TS typecheck
pnpm format     # prettier
pnpm pre-commit # automatically called by husky pre-commit (checks format, eslint, types)
```

## Data flow

![Data Flow Graph](/docs/data-flow-graph.png)

**From fakestoreapi** (`GET: /products`, `GET: /products/:id`):

```ts
{
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
```

**To our client:**

```ts
type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: number // rating.rate
  stock: number // rating.count
}

// GET: /api/products?q=&sort=&category=&available=
{
  items: Product[]
  categories: { name: string; count: number }[] // e.g. [{name: "jewelery", count: 4}]
}

// GET: /api/products/:id
Product

```

## UI implementation

### Workflow

1. Define the design system from Figma first: colors, fonts, shadows, spacing as Tailwind v4 `@theme` tokens in `main.css`
2. Build base components (`app/components/base/*`: button, checkbox, radio, switch, card, chip, dialog, ...) on top of those tokens
3. Showcase all tokens and base components on the `/ds` route
4. Build product blocks (`app/components/product/*`) from base components, then compose pages

**Why:**

- One source of truth for colors/fonts/shadows/spacing, a design change means editing one token
- Pixel perfect results: Values copied from Figma once, so the result matches the design pixel for pixel
- Fewer inconsistencies between elements and between developers, everyone uses the same tokens and base components
- `/ds` gives a quick visual check of every token and component state which allows developers to quickly find their needed tokens/components and use them

![Design system typography](/docs/design-system-typography.jpg)
![Design system colors](/docs/design-system-colors.jpg)

### Figma design gaps

Issues in the Figma file and how I handled them:

- **Missing designs.** The opened burger menu and the mobile view of the products page weren't in the file, so I designed them from the existing components and tokens
- **No typography styles.** Font family/size/line height weren't defined as styles, so I checked each text element and turned the repeated combinations into typography tokens (see `/ds`)
- **No hover/focus states** for buttons and inputs. I added hover colors and a `focus-visible` outline in the primary color for keyboard users
- **UX: sort without visible values.** Products can be sorted by rating and count, but the list doesn't show either value, so the user can't see why items are in that order
- **UX: sort chip hides the order.** In Figma the applied sort chip shows only the field (e.g. "Quantity") and leaves the order to the icon. I kept the full label (e.g. "Quantity: high to low") so the order is readable without decoding the icon
- **Color mismatch.** Gray/500 is `#6783A0` in one place and `#647E9A` in another. I kept one value as the `gray-500` token
- **Inconsistent sizes.** e.g. the product card "view" button has `15.67px 12.33px` padding. I rounded these to the nearest spacing value

# Technical decisions

## 1. Proxy fakestoreapi through Nuxt server

**Why:**

- fakestoreapi has no search/filter/sort, with our own server as middleware these can be implemented (since fakestoreapi only have 20 products)
- Caching enabled => faster page loads/navigation, fewer calls to fakestoreapi

**additional notes:**

- fakestoreapi don't have any page, size, so we also haven't handled any pagination

## 2. Validate fakestoreapi response with zod, map to `Product`

**Decision:** Every backend response is parsed using zod and mapped with `toProduct`.

**Why:**

- Bad response from third-party sources => we show 502 instead of application crashes
- The app depends only on `Product`, so changing the backend only touches the schema and mapper

## 3. URL query as the only source of truth for filters

**Why:**

- No store needed, filters survive reload and can be shared as a link

## 4. Category counts computed on the server

**Why:**

- The client only receives the filtered products, so it can't count the ones it never got
- Same response returns `items` + `categories`, one request for both the list and the filter sidebar (same pattern as Elasticsearch)

## 5. Category counts ignore the category filter itself

**Why:**

- while we're filtering the products on server, we're counting products per each categories, however inside the `getProductCountsByCategory` we ignore the category filter itself, because if we do, it will show `0` for the other categories count

## 6. Resize and cache product images

**Why:**

- fakestoreapi images are large (some above 400KB), but cards only show them at thumbnail size
- Smaller images => faster list page loads, less mobile data

**Results:** ~80% less image data

| Page                  | Before | After |
| --------------------- | ------ | ----- |
| Product list (20)     | 4.8MB  | 477KB |
| Product detail (id 1) | 273KB  | 31KB  |
| Largest image         | 465KB  | 28KB  |

## 7. Using i18n instead of hardcoded Persian texts

**Why:**

- Code reads as English only, not two languages mixed together
- Mixing RTL and LTR text in code editors breaks cursor movement and line rendering, so it's hard to read and edit
- One source of truth for UI texts: changing copy means editing `fa.json`/`en.json` only, no code changes
- Texts and content can be edited without touching components
- Multilingual out of the box: adding a language means adding one JSON file
- Interpolation/plurals handled by i18n instead of string concatenation in templates
- Easier for AI agents to scan and understand the code, without Persian texts in the code

## 8. Number formatting with `Intl`

**Why:**

- Built into the browser and Node, no extra package needed
- Locale-aware out of the box: Persian digits (`۱۲۳`) for `fa`, Latin for `en`
- Same output on server and client, so no SSR hydration mismatch

**Notes:**

- Arabic separators (`٬` thousands, `٫` decimal) are replaced with `,` and `.` to match the Figma design
- Prices are USD × `300_000` to show Toman amounts like the design

## 9. Self-host IranYekan and Yekan Bakh fonts

**Why:**

- Figma didn't come with font files and I couldn't find a CDN serving them, so I took them from an open-source project on GitHub and put them in `app/assets/fonts`
- Same origin as the app => no third-party request, cached with the rest of the build

## 10. Own icon components instead of an icon pack

**Why:**

- Figma doesn't use a known icon pack, so I exported each SVG from the design into icons component
- Icons match the design exactly, and only the icons we use ship with the app

## 11. Single app, no need to use monorepo

**Why:**

- The app is small, with no packages that need to be separated (no shared UI library, SDK or second app)
- Nuxt already covers frontend + server, which is the main thing a monorepo would give us

## 12. Pre-commit checks for errors

**Why:**

- Every commit runs `format:check`, `lint` and `typecheck`, so formatting, ESLint and TypeScript errors never reach the repo
