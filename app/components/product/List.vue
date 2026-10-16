<script setup lang="ts">
const { clearFilters } = useProductQuery()
const { data } = useProductsFromQuery()
</script>

<template>
  <ul v-if="data?.items.length" class="grid grid-cols-3 gap-x-4 gap-y-6">
    <li v-for="product in data.items" :key="product.id">
      <ProductCard :title="product.title" :image="product.image" :to="`/products/${product.id}`" />
    </li>
  </ul>
  <div v-else class="flex flex-col items-center gap-8 py-16">
    <h2 class="text-center font-iran-yekan text-xl/8 font-bold text-dark">
      {{ $t('No products match these filters') }}
    </h2>
    <BaseButton variant="outlined" @click="clearFilters">{{ $t('Clear filters') }}</BaseButton>
  </div>
</template>
