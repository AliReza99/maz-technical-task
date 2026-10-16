export type ProductListParams = {
  q?: string
  sort?: ProductSort
  category?: string[]
  available?: boolean
}

export function useProducts(params: MaybeRefOrGetter<ProductListParams> = {}) {
  return useFetch('/api/products', {
    query: computed(() => toValue(params)),
    dedupe: 'defer',
  })
}
