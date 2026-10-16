import type { LocationQueryValue } from 'vue-router'

type QueryValue = LocationQueryValue | LocationQueryValue[] | undefined

function toStringArray(value: QueryValue): string[] {
  const values = Array.isArray(value) ? value : [value]
  return values.filter((item): item is string => typeof item === 'string' && item !== '')
}

// extracting first non empty string (or undefined) in a query param
function firstString(value: QueryValue): string | undefined {
  return toStringArray(value)[0]
}

// storing the state through url
export function useProductQuery() {
  const route = useRoute()
  const router = useRouter()

  function update(patch: Record<string, string | string[] | undefined>) {
    return router.replace({ query: { ...route.query, ...patch } })
  }

  const search = computed({
    get: () => firstString(route.query.q) ?? '',
    set: (value: string) => update({ q: value.trim() || undefined }),
  })

  const sort = computed({
    get: (): ProductSort | undefined => {
      const value = firstString(route.query.sort)
      return isProductSort(value) ? value : undefined
    },
    set: (value: string | number | undefined) =>
      update({ sort: isProductSort(value) ? value : undefined }),
  })

  const categories = computed({
    get: () => toStringArray(route.query.category),
    set: (value: string[]) => update({ category: value.length > 0 ? value : undefined }),
  })

  const onlyAvailable = computed({
    get: () => firstString(route.query.available) === 'true',
    set: (value: boolean) => update({ available: value ? 'true' : undefined }),
  })

  const appliedFiltersCount = computed(
    () => (search.value ? 1 : 0) + (onlyAvailable.value ? 1 : 0) + categories.value.length
  )

  function removeCategory(name: string) {
    categories.value = categories.value.filter((category) => category !== name)
  }

  function clearFilters() {
    return update({ q: undefined, category: undefined, available: undefined })
  }

  return {
    search,
    sort,
    categories,
    onlyAvailable,
    appliedFiltersCount,
    removeCategory,
    clearFilters,
  }
}
