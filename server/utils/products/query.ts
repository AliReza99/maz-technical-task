import { z } from 'zod'
import { productSorts } from '#shared/utils/product'

function toArray(value: unknown): unknown[] {
  if (value === undefined) return []
  return Array.isArray(value) ? value : [value]
}

// invalid values treated as not given
export const productListQuerySchema = z.object({
  q: z.string().trim().optional().catch(undefined),
  sort: z.enum(productSorts).optional().catch(undefined),
  category: z.preprocess(toArray, z.array(z.string())).catch([]),
  available: z.stringbool().catch(false),
})

export type ProductListQuery = z.infer<typeof productListQuerySchema>
