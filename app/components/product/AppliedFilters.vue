<script setup lang="ts">
const categoryLabel = useCategoryLabel()
const sortLabel = useSortLabel()
const { search, sort, categories, removeCategory } = useProductQuery()

const hasAppliedFilters = computed(
  () => search.value !== '' || categories.value.length > 0 || sort.value !== undefined
)
</script>

<template>
  <BaseCard v-if="hasAppliedFilters" class="flex items-center justify-between gap-4 pr-6">
    <h2 class="text-sm/4 font-medium text-[#253343]">{{ $t('Applied filters') }}</h2>
    <div class="flex flex-wrap gap-3">
      <BaseFilterChip v-if="search" :label="search" @remove="search = ''">
        <template #start-icon><IconSearch /></template>
      </BaseFilterChip>
      <BaseFilterChip
        v-for="category in categories"
        :key="category"
        :label="categoryLabel(category)"
        @remove="removeCategory(category)"
      />
      <BaseFilterChip v-if="sort" :label="sortLabel(sort)" @remove="sort = undefined">
        <template #start-icon><IconSortAmountDown /></template>
      </BaseFilterChip>
    </div>
  </BaseCard>
</template>
