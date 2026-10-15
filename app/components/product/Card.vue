<script setup lang="ts">
defineProps<{
  title: string
  image: string
  imageAlt?: string
}>()

defineEmits<{
  action: []
}>()
</script>

<template>
  <!-- 263 px for the max width is from figma design -->
  <article
    class="flex w-full max-w-[263px] flex-col gap-4 rounded-3xl border border-border bg-white px-2 pt-2 pb-3 shadow-card"
  >
    <img
      :src="image"
      :alt="imageAlt ?? title"
      class="aspect-square max-h-42.5 w-full rounded-2xl object-cover"
      loading="lazy"
    />
    <h3 class="line-clamp-1 px-1 font-iran-yekan text-sm/6 font-bold text-blue-900">
      {{ title }}
    </h3>
    <div class="px-1">
      <BaseButton variant="outlined" class="w-full" @click="$emit('action')">
        <slot name="action">
          {{ $t('View details') }}
          <IconArrowLeft />
        </slot>
      </BaseButton>
    </div>
  </article>
</template>
