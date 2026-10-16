<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <dt
    class="flex items-center rounded-s-2xl rounded-e-sm bg-gray-25 px-4 py-3 font-sans text-sm font-medium text-gray-600"
  >
    {{ label }}
  </dt>
  <dd
    class="flex items-center rounded-s-sm rounded-e-2xl bg-gray-25 px-4 py-3 font-iran-yekan text-[13px] font-bold text-gray-800"
  >
    {{ value }}
  </dd>
</template>
