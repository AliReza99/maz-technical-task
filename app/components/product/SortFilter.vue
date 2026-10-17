<script setup lang="ts">
const sortLabel = useSortLabel()
const { sort } = useProductQuery()
const name = useId()
</script>

<template>
  <BaseCollapsibleCard :title="$t('Sort by')">
    <div role="radiogroup" :aria-label="$t('Sort by')" class="flex flex-col items-start gap-5">
      <BaseRadio
        v-for="option in productSorts"
        :key="option"
        v-model="sort"
        :name="name"
        :value="option"
        :label="sortLabel(option)"
      />
    </div>
  </BaseCollapsibleCard>
</template>
