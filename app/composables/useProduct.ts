export function useProduct(id: MaybeRefOrGetter<string>) {
  return useFetch(() => `/api/products/${toValue(id)}`)
}
