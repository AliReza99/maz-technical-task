<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  links: { label: string; to: string; icon: Component }[]
}>()

const dialog = useTemplateRef('dialog')
</script>

<template>
  <BaseButton
    variant="icon"
    :aria-label="$t('Open menu')"
    aria-haspopup="dialog"
    @click="dialog?.open()"
  >
    <IconMenu />
  </BaseButton>

  <BaseFullscreenDialog
    ref="dialog"
    class="bg-white px-6"
    :label="$t('Main navigation')"
    :close-label="$t('Close menu')"
  >
    <ul class="flex flex-col gap-6">
      <li v-for="link in links" :key="link.label" class="flex">
        <BaseButton
          variant="link"
          :to="link.to"
          class="text-base transition-colors hover:text-primary aria-[current=page]:text-primary"
          @click="dialog?.close()"
        >
          <component :is="link.icon" />
          {{ $t(link.label) }}
        </BaseButton>
      </li>
    </ul>
  </BaseFullscreenDialog>
</template>
