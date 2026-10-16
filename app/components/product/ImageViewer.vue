<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()

const imageRef = useTemplateRef<HTMLImageElement>('image')

function openFullscreen() {
  imageRef.value?.requestFullscreen()
}
</script>

<template>
  <div class="relative">
    <img
      ref="image"
      :src="src"
      :alt="alt"
      class="h-[310px] w-full rounded-2xl bg-white object-contain [&:fullscreen]:rounded-none"
    />
    <button
      type="button"
      class="absolute top-4 right-4 flex size-10 cursor-pointer items-center justify-center rounded-[13px] bg-black/50 text-white backdrop-blur-[1px]"
      :aria-label="$t('View image fullscreen')"
      @click="openFullscreen"
    >
      <IconSearchZoomIn class="size-6" />
    </button>
  </div>
</template>
