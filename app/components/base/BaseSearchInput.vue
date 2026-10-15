<script setup lang="ts">
withDefaults(
  defineProps<{
    placeholder?: string
  }>(),
  { placeholder: undefined }
)

const model = defineModel<string>({ default: '' })
const input = useTemplateRef('input')

function clear() {
  model.value = ''
  input.value?.focus()
}
</script>

<template>
  <label
    class="group flex h-10 cursor-text items-center rounded-xl border border-fg-muted bg-gray-25 px-4 py-3 transition-colors focus-within:border-primary hover:border-primary"
  >
    <IconSearch
      class="size-4 shrink-0 text-fg-muted transition-colors group-focus-within:text-primary group-hover:text-primary"
    />
    <span class="ms-[13px] me-[17px] h-6 w-px shrink-0 bg-border-dark" />
    <input
      ref="input"
      v-model="model"
      type="search"
      :placeholder="placeholder"
      class="h-full min-w-0 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-fg-muted [&::-webkit-search-cancel-button]:hidden"
    />
    <button
      v-if="model"
      type="button"
      class="ms-2 flex shrink-0 cursor-pointer text-fg-muted"
      @click="clear"
    >
      <IconClose class="size-4" />
    </button>
  </label>
</template>
