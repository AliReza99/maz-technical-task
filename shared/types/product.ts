import type { productSorts } from '../utils/product'

export type Product = {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
  rating: number
  stock: number
}

export type ProductSort = (typeof productSorts)[number]

export type CategoryCount = {
  name: string
  count: number
}

export type ProductListResponse = {
  items: Product[]
  categories: CategoryCount[]
}
