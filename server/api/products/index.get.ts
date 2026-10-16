import { getAllProducts } from '~~/server/utils/api/products'
import {
  getProductCountsByCategory,
  filterProducts,
  sortProducts,
} from '~~/server/utils/products/filter'
import { productListQuerySchema } from '~~/server/utils/products/query'

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, productListQuerySchema.parse)
  const products = await getAllProducts()

  return {
    items: sortProducts(filterProducts(products, query), query.sort),
    categories: getProductCountsByCategory(products, query),
  }
})
