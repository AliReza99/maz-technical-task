<script setup lang="ts">
import type { BreadcrumbItem } from '~/components/base/BaseBreadcrumb.vue'

const items: BreadcrumbItem[] = [{ label: 'لیست محصولات‌ها' }, { label: 'اتوماتیک بازویی' }]
</script>

<template>
  <section class="space-y-10">
    <h2 dir="ltr" class="text-2xl font-medium">Breadcrumb</h2>
    <div class="rounded-lg border border-gray-50 p-6">
      <BaseBreadcrumb :items="items" />
    </div>
  </section>
</template>
