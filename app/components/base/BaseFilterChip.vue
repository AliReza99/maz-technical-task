<script setup lang="ts">
defineProps<{ label: string }>()

const emit = defineEmits<{ remove: [] }>()
</script>

<template>
  <span
    class="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-chip-selected p-2 font-sans text-xs/4 font-medium text-fg [&_svg]:size-4 [&_svg]:shrink-0"
  >
    <slot name="start-icon" />
    <span>{{ label }}</span>
    <button
      type="button"
      class="flex cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      @click="emit('remove')"
    >
      <slot name="end-icon">
        <IconClose />
      </slot>
    </button>
  </span>
</template>
