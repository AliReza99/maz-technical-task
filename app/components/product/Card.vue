<script setup lang="ts">
defineProps<{
  title: string
  image: string
  imageAlt?: string
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group block w-full max-md:pointer-events-none max-w-[263px] rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  >
    <article
      class="flex flex-col gap-4 rounded-3xl border border-border bg-white px-2 pt-2 pb-3 shadow-card"
    >
      <img
        :src="image"
        :alt="imageAlt ?? title"
        class="aspect-square max-h-42.5 w-full rounded-2xl bg-white object-contain"
        loading="lazy"
      />
      <h3
        dir="auto"
        class="line-clamp-1 px-1 text-start font-iran-yekan text-sm/6 font-bold text-blue-900"
      >
        {{ title }}
      </h3>
      <div class="px-1">
        <BaseButton as="span" variant="outlined" class="w-full max-md:pointer-events-auto">
          <slot name="action">
            {{ $t('View details') }}
            <IconArrowLeft />
          </slot>
        </BaseButton>
      </div>
    </article>
  </NuxtLink>
</template>
