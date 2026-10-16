<script setup lang="ts">
const route = useRoute()

const { data: product, error } = await useProduct(() => String(route.params.id))
if (error.value || !product.value) {
  throw createError({
    status: error.value?.status ?? 404,
    statusText: error.value?.statusText ?? 'Product not found',
    fatal: true,
  })
}
</script>

<template>
  <main v-if="product" class="mx-auto md:max-w-page-tablet lg:max-w-page pt-6 pb-17">
    <ProductBreadcrumb :product="product" />
    <div class="mt-6 flex flex-col gap-6">
      <ProductOverview :product="product" />
      <ProductSpecs :product="product" />
    </div>
  </main>
</template>
