<script setup lang="ts">
import { IconBook, IconCategory2, IconMessageQuestion, IconPhoneCall } from '#components'

const links = [
  { label: 'Product list', to: '/', icon: IconCategory2 },
  { label: 'Get consultation', to: '#', icon: IconBook },
  { label: 'FAQ', to: '#', icon: IconMessageQuestion },
  { label: 'Contact us', to: '#', icon: IconPhoneCall },
]
</script>

<template>
  <nav
    :aria-label="$t('Main navigation')"
    class="h-18 rounded-b-2xl md:h-30 bg-white shadow-footer-bottom backdrop-blur-2xl"
  >
    <div class="page-container grid h-full max-md:px-6 grid-cols-[1fr_auto_1fr] items-center">
      <div class="col-start-1 justify-self-start md:hidden">
        <BaseNavbarMenu :links="links" />
      </div>

      <ul class="col-start-2 flex items-center gap-6 max-md:hidden">
        <li v-for="link in links" :key="link.label" class="flex">
          <BaseButton
            variant="link"
            :to="link.to"
            class="relative transition-colors hover:text-primary aria-[current=page]:text-primary aria-[current=page]:after:absolute aria-[current=page]:after:top-full aria-[current=page]:after:mt-1 aria-[current=page]:after:left-1/2 aria-[current=page]:after:size-1.25 aria-[current=page]:after:-translate-x-1/2 aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-primary"
          >
            <component :is="link.icon" />
            {{ $t(link.label) }}
          </BaseButton>
        </li>
      </ul>

      <BaseButton
        variant="icon"
        to="/"
        :aria-label="$t('Call')"
        class="col-start-3 justify-self-end md:hidden"
      >
        <IconCallOut />
      </BaseButton>

      <BaseButton
        variant="contained-2"
        to="/"
        class="col-start-3 w-[107px] justify-self-end max-md:hidden"
      >
        {{ $t('Call') }}
        <IconCallOut />
      </BaseButton>
    </div>
  </nav>
</template>
