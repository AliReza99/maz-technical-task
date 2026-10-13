<script setup lang="ts">
const SAMPLE_FA = 'فروشگاه اینترنتی ماز'
const SAMPLE_EN = 'Maz Online Store'
const SAMPLE_DIGITS = '۰۱۲۳۴۵۶۷۸۹ 0123456789'

const variants = [
  {
    family: 'Yekan Bakh',
    token: '--font-sans',
    familyClass: 'font-sans',
    weight: 400,
    weightClass: 'font-normal',
  },
  {
    family: 'Yekan Bakh',
    token: '--font-sans',
    familyClass: 'font-sans',
    weight: 500,
    weightClass: 'font-medium',
  },
  {
    family: 'Yekan Bakh',
    token: '--font-sans',
    familyClass: 'font-sans',
    weight: 700,
    weightClass: 'font-bold',
  },
  {
    family: 'IRANYekan',
    token: '--font-iran-yekan',
    familyClass: 'font-iran-yekan',
    weight: 500,
    weightClass: 'font-medium',
  },
  {
    family: 'IRANYekan',
    token: '--font-iran-yekan',
    familyClass: 'font-iran-yekan',
    weight: 700,
    weightClass: 'font-bold',
  },
]

const scale = [
  { className: 'text-xs', size: '12px', lineHeight: '16px' },
  { className: 'text-sm', size: '14px', lineHeight: '20px' },
  { className: 'text-base', size: '16px', lineHeight: '24px' },
  { className: 'text-lg', size: '18px', lineHeight: '28px' },
  { className: 'text-xl', size: '20px', lineHeight: '28px' },
  { className: 'text-2xl', size: '24px', lineHeight: '32px' },
  { className: 'text-3xl', size: '30px', lineHeight: '36px' },
  { className: 'text-4xl', size: '36px', lineHeight: '40px' },
  { className: 'text-5xl', size: '48px', lineHeight: '1' },
]
</script>

<template>
  <section id="typography" class="space-y-10">
    <h2 dir="ltr" class="text-2xl font-medium">Typography</h2>

    <div
      v-for="variant in variants"
      :key="`${variant.familyClass}-${variant.weight}`"
      class="space-y-4"
    >
      <div dir="ltr" class="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm text-gray-500">
        <h3 class="text-lg font-medium text-gray-900">
          {{ variant.family }} · {{ variant.weight }}
        </h3>
        <code>{{ variant.familyClass }} {{ variant.weightClass }}</code>
        <code>{{ variant.token }}</code>
      </div>

      <div
        :class="[variant.familyClass, variant.weightClass]"
        class="divide-y divide-gray-200 rounded-lg border border-gray-200"
      >
        <p class="p-4 text-lg">{{ SAMPLE_DIGITS }}</p>
        <div
          v-for="step in scale"
          :key="step.className"
          class="flex flex-wrap items-center gap-x-6 gap-y-2 p-4"
        >
          <div
            class="flex w-40 shrink-0 flex-col items-start font-sans text-xs font-normal text-gray-500"
          >
            <code dir="ltr" class="text-gray-900">{{ step.className }}</code>
            <span>{{ step.size }} / {{ step.lineHeight }}</span>
          </div>
          <p :class="step.className" class="min-w-0 truncate">{{ SAMPLE_FA }} · {{ SAMPLE_EN }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
