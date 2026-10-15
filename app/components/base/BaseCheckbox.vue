<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    label?: string
    value?: string | number
  }>(),
  { label: undefined, value: undefined }
)

const model = defineModel<boolean | (string | number)[]>({ default: false })
</script>

<template>
  <label class="inline-flex items-center gap-2 cursor-pointer">
    <input v-bind="$attrs" v-model="model" type="checkbox" :value="value" class="peer sr-only" />
    <span
      aria-hidden="true"
      class="flex size-4 shrink-0 items-center justify-center rounded-sm border-[1.5px] border-gray-200 text-white transition-colors peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        class="shrink-0 transition-opacity"
      >
        <path
          d="M11.3341 5.5L6.75081 10.0833L4.66748 8"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span
      v-if="label"
      class="translate-y-px text-start text-xs/4 font-medium text-gray-500 transition-colors peer-checked:text-gray-800"
      >{{ label }}</span
    >
  </label>
</template>
