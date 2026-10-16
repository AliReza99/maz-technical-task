<script setup lang="ts">
const dialog = useTemplateRef('dialog')

const { sort } = useProductQuery()

watch(sort, () => dialog.value?.close())
</script>

<template>
  <BaseButton variant="outlined" aria-haspopup="dialog" @click="dialog?.open()">
    {{ $t('Sort by') }}
  </BaseButton>

  <BaseFullscreenDialog
    ref="dialog"
    class="bg-page px-4 pb-6"
    :label="$t('Sort by')"
    :close-label="$t('Close sort')"
  >
    <ProductSortFilter :collapsible="false" />
  </BaseFullscreenDialog>
</template>
