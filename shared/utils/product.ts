import type { ProductSort } from '../types/product'

export const productSorts = ['quantity-asc', 'quantity-desc', 'rating-desc', 'rating-asc'] as const

export function isProductSort(value: unknown): value is ProductSort {
  return productSorts.includes(value as ProductSort)
}
