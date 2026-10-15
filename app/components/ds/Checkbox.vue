<script setup lang="ts">
const available = ref(true)
</script>

<template>
  <section class="space-y-10">
    <h2 dir="ltr" class="text-2xl font-medium">Checkbox</h2>
    <div class="flex flex-col items-start gap-5 rounded-lg border border-gray-50 p-6">
      <BaseCheckbox v-model="available" :label="$t('Only available products')" />
    </div>
  </section>
</template>
