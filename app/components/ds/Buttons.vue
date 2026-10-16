<script setup lang="ts">
import { IconArrowLeftS, IconCallOut, IconCategory2 } from '#components'

const variants = [
  {
    name: 'contained',
    label: 'جستجو',
  },
  {
    name: 'contained-2',
    label: 'تماس',
    endIcon: IconCallOut,
  },
  {
    name: 'link',
    label: 'لیست محصولات',
    startIcon: IconCategory2,
  },
  {
    name: 'outlined',
    label: 'مشاهده جزیات',
    endIcon: IconArrowLeftS,
  },
  {
    name: 'icon',
    startIcon: IconCallOut,
  },
] as const
</script>

<template>
  <section class="space-y-10">
    <h2 dir="ltr" class="text-2xl font-medium">Buttons</h2>

    <div class="space-y-6">
      <div v-for="variant in variants" :key="variant.name" class="space-y-3">
        <h3 dir="ltr" class="text-lg font-medium text-gray-900">{{ variant.name }}</h3>
        <div class="flex items-center justify-start rounded-lg border border-gray-200 p-6">
          <BaseButton :variant="variant.name">
            <component :is="variant.startIcon" v-if="'startIcon' in variant" />
            <template v-if="'label' in variant">{{ variant.label }}</template>
            <component :is="variant.endIcon" v-if="'endIcon' in variant" />
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
