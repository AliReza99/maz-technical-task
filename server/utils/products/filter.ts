import type { CategoryCount, Product, ProductSort } from '#shared/types/product'
import type { ProductListQuery } from './query'

type ProductFilters = Omit<ProductListQuery, 'sort'>

export function filterProducts(products: Product[], filters: ProductFilters): Product[] {
  const search = filters.q?.toLowerCase()
  return products.filter(
    (product) =>
      (!search || product.title.toLowerCase().includes(search)) &&
      (filters.category.length === 0 || filters.category.includes(product.category)) &&
      (!filters.available || product.stock > 0)
  )
}

const comparators: Record<ProductSort, (a: Product, b: Product) => number> = {
  'quantity-asc': (a, b) => a.stock - b.stock,
  'quantity-desc': (a, b) => b.stock - a.stock,
  'rating-desc': (a, b) => b.rating - a.rating,
  'rating-asc': (a, b) => a.rating - b.rating,
}

export function sortProducts(products: Product[], sort: ProductSort | undefined): Product[] {
  return products.toSorted((a, b) => (sort ? comparators[sort](a, b) : 0) || a.id - b.id)
}

// counting products for each category
export function getProductCountsByCategory(
  products: Product[],
  filters: ProductFilters
): CategoryCount[] {
  const counts = new Map<string, number>(products.map((product) => [product.category, 0]))
  // ignoring the category filter itself so the others categories won't count as 0
  for (const product of filterProducts(products, { ...filters, category: [] })) {
    counts.set(product.category, (counts.get(product.category) ?? 0) + 1)
  }
  return Array.from(counts, ([name, count]) => ({ name, count }))
}
