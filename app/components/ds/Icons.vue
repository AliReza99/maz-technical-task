<script setup lang="ts">
import {
  IconAdd,
  IconArrowDown,
  IconArrowLeft,
  IconArrowLeftS,
  IconBook,
  IconCallOut,
  IconCategory2,
  IconClose,
  IconCup,
  IconHome,
  IconMenu,
  IconMessageQuestion,
  IconPhoneCall,
  IconSearch,
  IconSearchZoomIn,
  IconSortAmountDown,
  IconTeacher,
} from '#components'

const icons = [
  { name: 'IconAdd', component: IconAdd },
  { name: 'IconArrowDown', component: IconArrowDown },
  { name: 'IconArrowLeft', component: IconArrowLeft },
  { name: 'IconArrowLeftS', component: IconArrowLeftS },
  { name: 'IconBook', component: IconBook },
  { name: 'IconCallOut', component: IconCallOut },
  { name: 'IconCategory2', component: IconCategory2 },
  { name: 'IconClose', component: IconClose },
  { name: 'IconCup', component: IconCup },
  { name: 'IconHome', component: IconHome },
  { name: 'IconMenu', component: IconMenu },
  { name: 'IconMessageQuestion', component: IconMessageQuestion },
  { name: 'IconPhoneCall', component: IconPhoneCall },
  { name: 'IconSearch', component: IconSearch },
  { name: 'IconSearchZoomIn', component: IconSearchZoomIn },
  { name: 'IconSortAmountDown', component: IconSortAmountDown },
  { name: 'IconTeacher', component: IconTeacher },
]
</script>

<template>
  <section id="icons" dir="ltr" class="space-y-10">
    <h2 class="text-2xl font-medium">Icons</h2>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
      <div
        v-for="icon in icons"
        :key="icon.name"
        class="flex flex-col items-center gap-3 rounded-lg border border-gray-50 p-4"
      >
        <div class="flex items-center gap-3">
          <component :is="icon.component" class="size-6 text-blue-900" />
          <component :is="icon.component" class="size-6 text-primary" />
        </div>
        <code class="text-xs text-gray-500">{{ icon.name }}</code>
      </div>
    </div>
  </section>
</template>
