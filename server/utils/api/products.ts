import { z } from 'zod'
import type { Product } from '#shared/types/product'
import { apiFetch } from './client'

const apiProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.url(),
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
})

function toProduct(raw: z.infer<typeof apiProductSchema>): Product {
  return {
    id: raw.id,
    title: raw.title,
    description: raw.description,
    price: raw.price,
    category: raw.category,
    image: raw.image,
    rating: raw.rating.rate,
    // in figma design we had in stock count for the product, but fakestoreapi do not have that data
    // so we're assuming rating.count is the in stock count for the product
    stock: raw.rating.count,
  }
}

async function fetchAllProducts() {
  const response = await apiFetch('/products')
  const result = z.array(apiProductSchema).safeParse(response)
  if (!result.success) {
    throw createError({ status: 502, statusText: 'Invalid response from the API' })
  }
  return result.data.map(toProduct)
}

async function fetchProductById(id: number) {
  const response = await apiFetch(`/products/${id}`)
  const result = apiProductSchema.safeParse(response)
  if (!result.success) {
    throw createError({ status: 502, statusText: 'Invalid response from the API' })
  }
  return toProduct(result.data)
}

export const getAllProducts = defineCachedFunction(fetchAllProducts, {
  name: 'api-products',
  maxAge: 60,
})

export const getProductById = defineCachedFunction(fetchProductById, {
  name: 'api-product',
  maxAge: 60,
  getKey: (id: number) => String(id),
})
