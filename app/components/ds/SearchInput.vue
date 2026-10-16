<script setup lang="ts">
const query = ref('')
</script>

<template>
  <section class="space-y-10">
    <h2 dir="ltr" class="text-2xl font-medium">Search input</h2>
    <div class="rounded-lg border border-gray-50 p-6">
      <BaseSearchInput v-model="query" class="max-w-[230px]" :placeholder="$t('Search')" />
    </div>
  </section>
</template>
