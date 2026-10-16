<script setup lang="ts">
const categoryLabel = useCategoryLabel()
const { categories } = useProductQuery()
const { data } = useProductsFromQuery()
</script>

<template>
  <BaseCollapsibleCard :title="$t('Category')">
    <ul class="flex flex-col gap-4 pl-0.75">
      <li
        v-for="option in data?.categories"
        :key="option.name"
        class="flex items-center justify-between gap-2"
      >
        <BaseCheckbox
          v-model="categories"
          :value="option.name"
          :label="categoryLabel(option.name)"
        />
        <span
          class="size-6 shrink-0 rounded-md pt-1.5 pb-0.5 text-center text-xs/4 font-medium text-white transition-colors"
          :class="categories.includes(option.name) ? 'bg-primary' : 'bg-[#141928]'"
          >{{ $n(option.count) }}</span
        >
      </li>
    </ul>
  </BaseCollapsibleCard>
</template>
