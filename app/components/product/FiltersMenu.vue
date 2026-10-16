<script setup lang="ts">
const dialog = useTemplateRef('dialog')

const { appliedFiltersCount, clearFilters } = useProductQuery()

function onClearFilters() {
  clearFilters()
  dialog.value?.close()
}
</script>

<template>
  <BaseButton variant="outlined" aria-haspopup="dialog" class="relative" @click="dialog?.open()">
    {{ $t('Filters') }}
    <span
      v-if="appliedFiltersCount"
      class="absolute -end-2 -top-2 flex size-5 items-center justify-center rounded-full bg-primary pt-0.5 text-xs/4 font-medium text-white"
      >{{ $n(appliedFiltersCount) }}</span
    >
  </BaseButton>

  <BaseFullscreenDialog
    ref="dialog"
    class="bg-page px-4 pb-6"
    :label="$t('Filters')"
    :close-label="$t('Close filters')"
  >
    <div class="flex flex-col gap-4">
      <ProductAvailabilityFilter />
      <ProductCategoryFilter :collapsible="false" />
      <ProductSearchFilter @submit="dialog?.close()" />
      <BaseButton variant="outlined" class="self-start" @click="onClearFilters">
        {{ $t('Clear filters') }}
      </BaseButton>
    </div>
  </BaseFullscreenDialog>
</template>
