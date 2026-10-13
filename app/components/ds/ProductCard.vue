<script setup lang="ts">
const samples = [
  {
    title: 'درب اتوماتیک بازویی Face مدل SW2',
    image: '/images/product-image-demo.jpg',
  },
  {
    title: 'درب اتوماتیک بازویی Face مدل SW2',
    image: '/images/product-image-demo.jpg',
  },
  {
    title: 'درب اتوماتیک بازویی Face مدل SW2',
    image: '/images/product-image-demo.jpg',
  },
]
</script>

<template>
  <section class="space-y-10">
    <h2 dir="ltr" class="text-2xl font-medium">Product Card</h2>

    <div class="flex flex-wrap gap-4 rounded-lg bg-page p-6">
      <ProductCard
        v-for="(product, index) in samples"
        :key="index"
        :title="product.title"
        :image="product.image"
      />
    </div>
  </section>
</template>
