<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <dt
    class="flex items-center rounded-s-2xl rounded-e-sm bg-gray-25 px-4 max-md:rounded-2xl py-3.5 font-sans text-sm font-medium text-gray-600"
  >
    {{ label }}
  </dt>
  <dd
    class="flex items-center rounded-s-sm rounded-e-2xl bg-gray-25 px-4 max-md:rounded-2xl max-md:not-last:mb-1 py-3.5 font-iran-yekan text-[13px] font-bold text-gray-800"
  >
    {{ value }}
  </dd>
</template>
