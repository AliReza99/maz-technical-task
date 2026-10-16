<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    value: string | number
    label?: string
    name?: string
    disabled?: boolean
  }>(),
  { label: undefined, name: undefined, disabled: false }
)

const model = defineModel<string | number>()
</script>

<template>
  <label
    class="inline-flex items-center gap-2"
    :class="disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'"
  >
    <input
      v-bind="$attrs"
      v-model="model"
      type="radio"
      :value="value"
      :name="name"
      :disabled="disabled"
      class="peer sr-only"
    />
    <span
      aria-hidden="true"
      class="flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-200 transition-colors peer-checked:border-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary after:size-2.5 after:scale-0 after:rounded-full after:bg-primary after:transition-transform peer-checked:after:scale-100"
    />
    <span
      v-if="label"
      class="translate-y-px text-start text-xs/4 font-medium text-gray-500 transition-colors peer-checked:text-gray-800"
      >{{ label }}</span
    >
  </label>
</template>
