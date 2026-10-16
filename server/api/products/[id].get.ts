import type { Product } from '#shared/types/product'
import { getProductById } from '~~/server/utils/api/products'

export default defineEventHandler(async (event): Promise<Product> => {
  const id = Number(getRouterParam(event, 'id'))
  if (!Number.isInteger(id)) {
    throw createError({ status: 400, statusText: 'Invalid product id' })
  }
  return getProductById(id)
})
