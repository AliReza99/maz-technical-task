export function useProductsFromQuery() {
  const { search, sort, categories, onlyAvailable } = useProductQuery()
  return useProducts(() => ({
    q: search.value || undefined,
    sort: sort.value,
    category: categories.value,
    available: onlyAvailable.value || undefined,
  }))
}
