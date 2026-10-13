<script setup lang="ts">
interface Swatch {
  name: string
  token: string
  hex: string
  usage?: string
}

const semantic: Swatch[] = [
  { name: 'primary', token: '--color-primary', hex: '#E20054', usage: 'Brand, primary actions' },
  { name: 'page', token: '--color-page', hex: '#E9EDF5', usage: 'Page background' },
  {
    name: 'surface-muted',
    token: '--color-surface-muted',
    hex: '#F5F7FA',
    usage: 'Card secondary internal section',
  },
  {
    name: 'border',
    token: '--color-border',
    hex: '#E9EDF5',
    usage: 'Button and product card border',
  },
  { name: 'breadcrumb', token: '--color-breadcrumb', hex: '#6783A0', usage: 'Breadcrumb items' },
]

const palettes: { name: string; shades: Swatch[] }[] = [
  {
    name: 'Main red',
    shades: [
      { name: '50', token: '--color-main-red-50', hex: '#FCE5EE' },
      { name: '200', token: '--color-main-red-200', hex: '#F180A9' },
      { name: '500', token: '--color-main-red-500', hex: '#E20054' },
    ],
  },
  {
    name: 'Gray',
    shades: [
      { name: '25', token: '--color-gray-25', hex: '#F5F7FA' },
      { name: '50', token: '--color-gray-50', hex: '#E9EDF5' },
      { name: '100', token: '--color-gray-100', hex: '#DAE1EB' },
      { name: '200', token: '--color-gray-200', hex: '#BDC8D7' },
      { name: '300', token: '--color-gray-300', hex: '#9FAFC2' },
      { name: '400', token: '--color-gray-400', hex: '#8297AE' },
      { name: '500', token: '--color-gray-500', hex: '#647E9A' },
      { name: '600', token: '--color-gray-600', hex: '#546B83' },
      { name: '700', token: '--color-gray-700', hex: '#44576D' },
      { name: '800', token: '--color-gray-800', hex: '#344456' },
      { name: '900', token: '--color-gray-900', hex: '#141928' },
    ],
  },
  {
    name: 'Blue',
    shades: [{ name: '900', token: '--color-blue-900', hex: '#0A2A51' }],
  },
]
</script>

<template>
  <section id="colors" dir="ltr" class="space-y-10">
    <h2 class="text-2xl font-medium">Colors</h2>

    <div class="space-y-4">
      <h3 class="text-lg font-medium text-gray-900">Semantic</h3>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <div
          v-for="swatch in semantic"
          :key="swatch.token"
          class="overflow-hidden rounded-lg border border-gray-50"
        >
          <div
            class="h-16 border-b border-gray-50"
            :style="{ background: `var(${swatch.token})` }"
          />
          <div class="space-y-0.5 p-3 text-xs text-gray-500">
            <div class="text-sm font-medium text-gray-900">{{ swatch.name }}</div>
            <code class="block">{{ swatch.token }}</code>
            <div>{{ swatch.hex }}</div>
            <div>{{ swatch.usage }}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-for="palette in palettes" :key="palette.name" class="space-y-4">
      <h3 class="text-lg font-medium text-gray-900">{{ palette.name }}</h3>
      <div class="grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-11">
        <div v-for="shade in palette.shades" :key="shade.token" class="space-y-1 text-xs">
          <div
            class="h-14 rounded-lg border border-gray-50"
            :style="{ background: `var(${shade.token})` }"
          />
          <div class="font-medium text-gray-900">{{ shade.name }}</div>
          <div class="text-gray-500">{{ shade.hex }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
