<script setup lang="ts">
const props = defineProps<{
  product: Product
}>()

const { t, n, locale } = useI18n()
const categoryLabel = useCategoryLabel()

// Multiplying usd values to showcase the value in Toman amount just like Figma design
const PRICE_MULTIPLIER = 300_000

const specs = computed(() => [
  { label: t('Price'), value: formatCurrency(props.product.price * PRICE_MULTIPLIER) },
  { label: t('Description'), value: props.product.description },
  { label: t('Category'), value: categoryLabel(props.product.category) },
  {
    label: t('Rating'),
    value: new Intl.NumberFormat(locale.value).format(props.product.rating).replace('٫', '.'),
  },
  { label: t('Quantity'), value: n(props.product.stock) },
])
</script>

<template>
  <BaseCard class="p-6">
    <h2 class="font-iran-yekan text-xl/6 font-bold text-blue-900">
      {{ $t('Technical specifications') }}
    </h2>
    <dl class="mt-4 grid gap-3 md:grid-cols-[172px_1fr]">
      <ProductSpecItem
        v-for="spec in specs"
        :key="spec.label"
        :label="spec.label"
        :value="spec.value"
      />
    </dl>
  </BaseCard>
</template>
