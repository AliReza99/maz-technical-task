<script setup lang="ts">
import type { BreadcrumbItem } from '~/components/base/BaseBreadcrumb.vue'

const props = defineProps<{
  product: Product
}>()

const { t } = useI18n()
const categoryLabel = useCategoryLabel()

const items = computed<BreadcrumbItem[]>(() => [
  { label: t('Product list'), to: '/' },
  { label: categoryLabel(props.product.category) },
])
</script>

<template>
  <BaseBreadcrumb :items="items" />
</template>
