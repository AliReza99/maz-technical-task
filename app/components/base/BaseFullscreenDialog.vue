<script setup lang="ts">
defineProps<{
  label: string
  closeLabel: string
}>()

const dialog = useTemplateRef('dialog')

function open() {
  dialog.value?.showModal()
}

function close() {
  dialog.value?.close()
}

defineExpose({ open, close })
</script>

<template>
  <dialog
    ref="dialog"
    :aria-label="label"
    class="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto open:flex open:flex-col"
  >
    <div class="flex h-18 shrink-0 items-center">
      <BaseButton variant="icon" :aria-label="closeLabel" @click="close">
        <IconClose />
      </BaseButton>
    </div>

    <div class="mt-4">
      <slot />
    </div>
  </dialog>
</template>
