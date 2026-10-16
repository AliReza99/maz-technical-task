<script setup lang="ts">
const enabled = ref(true)
</script>

<template>
  <section class="space-y-10">
    <h2 dir="ltr" class="text-2xl font-medium">Switch</h2>
    <div class="rounded-lg border border-gray-50 p-6">
      <BaseSwitch v-model="enabled" :label="$t('Only available products')" />
    </div>
  </section>
</template>
