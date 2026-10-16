<template>
  <section class="space-y-10">
    <h2 dir="ltr" class="text-2xl font-medium">Filter Chip</h2>
    <div class="flex flex-wrap gap-4 rounded-lg border border-gray-50 p-6">
      <BaseFilterChip :label="$t('Double door')">
        <template #start-icon><IconSearch /></template>
      </BaseFilterChip>
      <BaseFilterChip :label="$t('Quantity')">
        <template #start-icon><IconSortAmountDown /></template>
      </BaseFilterChip>
    </div>
  </section>
</template>
