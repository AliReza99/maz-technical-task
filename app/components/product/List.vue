<script setup lang="ts">
const { clearFilters } = useProductQuery()
const { data, pending } = useProductsFromQuery()
</script>

<template>
  <ul v-if="data?.items.length" class="grid grid-cols-3 gap-x-4 gap-y-6">
    <li v-for="product in data.items" :key="product.id">
      <ProductCard :title="product.title" :image="product.image" :to="`/products/${product.id}`" />
    </li>
  </ul>
  <ul v-else-if="pending" class="grid grid-cols-3 gap-x-4 gap-y-6" aria-busy="true">
    <li v-for="n in 6" :key="n">
      <div
        class="flex w-full max-w-[263px] animate-pulse flex-col gap-4 rounded-3xl border border-border bg-white px-2 pt-2 pb-3 shadow-card"
      >
        <div class="aspect-square max-h-42.5 w-full rounded-2xl bg-border" />
        <div class="mx-1 h-6 rounded-md bg-border" />
        <div class="mx-1 h-10 rounded-xl bg-border" />
      </div>
    </li>
  </ul>
  <div v-else class="flex flex-col items-center gap-8 py-16">
    <h2 class="text-center font-iran-yekan text-xl/8 font-bold text-dark">
      {{ $t('No products match these filters') }}
    </h2>
    <BaseButton variant="outlined" @click="clearFilters">{{ $t('Clear filters') }}</BaseButton>
  </div>
</template>
