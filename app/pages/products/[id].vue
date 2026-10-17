<script setup lang="ts">
const route = useRoute()

const { data: product, error } = await useProduct(() => String(route.params.id))
if (error.value || !product.value) {
  const status = error.value?.status ?? 404
  const isNotFound = status === 404 || status === 400
  throw createError({
    status: isNotFound ? 404 : status,
    statusText: error.value?.statusText ?? 'Product not found',
    data: isNotFound ? { title: 'Product not found' } : undefined,
    fatal: true,
  })
}
</script>

<template>
  <main v-if="product" class="page-container pt-6 pb-17 max-md:pt-6.5 max-md:pb-9.5">
    <ProductBreadcrumb :product="product" />
    <div class="mt-6 flex flex-col gap-6">
      <ProductOverview :product="product" />
      <ProductSpecs :product="product" />
    </div>
  </main>
</template>
