<script setup lang="ts">
export type BreadcrumbItem = {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav :aria-label="$t('Breadcrumb')">
    <ol
      class="flex min-h-6 flex-wrap items-center gap-2 font-iran-yekan text-sm/4 font-bold text-breadcrumb"
    >
      <li class="flex">
        <NuxtLink to="/" :aria-label="$t('Home')">
          <IconHome class="size-[18px]" />
        </NuxtLink>
      </li>
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-2">
        <IconArrowLeftS class="size-5 shrink-0" />
        <NuxtLink v-if="item.to && index < items.length - 1" :to="item.to">
          {{ item.label }}
        </NuxtLink>
        <span v-else :aria-current="index === items.length - 1 ? 'page' : undefined">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>
