<script setup lang="ts">
defineProps<{
  product: Product
}>()
</script>

<template>
  <BaseCard class="flex flex-col gap-6 px-6 pt-8 pb-6">
    <h1 dir="auto" class="font-iran-yekan text-lg/6 font-bold text-blue-900">
      {{ product.title }}
    </h1>
    <ProductImageViewer :src="product.image" :alt="product.title" />
  </BaseCard>
</template>
