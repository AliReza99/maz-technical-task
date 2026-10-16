<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    collapsible?: boolean
  }>(),
  { collapsible: true }
)

const open = defineModel<boolean>('open', { default: true })

const expanded = computed(() => !props.collapsible || open.value)

const contentId = useId()
</script>

<template>
  <BaseCard>
    <button
      v-if="collapsible"
      type="button"
      class="flex w-full cursor-pointer items-center justify-between gap-2 text-start"
      :aria-expanded="open"
      :aria-controls="contentId"
      @click="open = !open"
    >
      <span class="font-sans text-[13px]/4 font-medium text-gray-700">{{ title }}</span>
      <IconArrowDown class="size-4 shrink-0 text-gray-500" />
    </button>
    <h2 v-else class="font-sans text-[13px]/4 font-medium text-gray-700">{{ title }}</h2>
    <div
      :id="contentId"
      class="grid transition-[grid-template-rows] duration-200 ease-out"
      :class="expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      :inert="!expanded"
    >
      <div class="overflow-hidden">
        <div class="pt-5 pb-2">
          <slot />
        </div>
      </div>
    </div>
  </BaseCard>
</template>
