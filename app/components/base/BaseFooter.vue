<script setup lang="ts">
import {
  SocialIconInstagram,
  SocialIconLinkedin,
  SocialIconTelegram,
  SocialIconTwitter,
  SocialIconYoutube,
} from '#components'

const { t } = useI18n()

const linkGroups = computed(() => [
  {
    title: t('Quick access'),
    links: [
      { label: t('About us'), to: '/' },
      { label: t('Blog'), to: '/' },
      { label: t('Contact us'), to: '/' },
      { label: t('After-sales service'), to: '/' },
    ],
  },
  {
    title: t('Site guide'),
    links: [
      { label: t('Terms and conditions'), to: '/' },
      { label: t('Get consultation'), to: '/' },
      { label: t('Feedback and suggestions'), to: '/' },
    ],
  },
])

const socialLinks = computed(() => [
  { label: t('Telegram'), to: '/', icon: SocialIconTelegram },
  { label: t('Instagram'), to: '/', icon: SocialIconInstagram },
  { label: t('LinkedIn'), to: '/', icon: SocialIconLinkedin },
])

const socialIconLinks = computed(() => [
  { label: t('LinkedIn'), to: '/', icon: SocialIconLinkedin },
  { label: t('YouTube'), to: '/', icon: SocialIconYoutube },
  { label: t('Twitter'), to: '/', icon: SocialIconTwitter },
  { label: t('Instagram'), to: '/', icon: SocialIconInstagram },
  { label: t('Telegram'), to: '/', icon: SocialIconTelegram },
])
</script>

<template>
  <footer>
    <div class="rounded-t-2xl bg-white pt-[159px] pb-[44px] shadow-footer-top md:py-10">
      <div
        class="page-container grid grid-cols-2 gap-x-4 gap-y-[68px] max-md:pr-9 md:flex md:px-13 md:justify-between"
      >
        <div class="hidden items-end pb-[17px] md:flex">
          <p class="text-[13px] leading-6 font-medium text-gray-700">
            {{ $t("We're available 7 days a week, 8 AM to midnight") }}
          </p>
        </div>

        <nav v-for="group in linkGroups" :key="group.title" class="flex flex-col gap-6">
          <h2 class="text-xl leading-6 font-bold text-gray-900">
            {{ group.title }}
          </h2>
          <ul class="flex flex-col gap-3">
            <li v-for="link in group.links" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="text-[13px] leading-6 font-medium text-gray-800 transition-colors hover:text-primary"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <nav class="flex flex-col gap-6">
          <h2 class="text-xl leading-6 font-bold text-gray-900">
            {{ $t('Social media') }}
          </h2>
          <ul class="flex flex-col gap-4">
            <li v-for="link in socialLinks" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="group flex items-center gap-3 text-[13px] leading-6 font-medium text-gray-800 transition-colors hover:text-primary"
              >
                <component
                  :is="link.icon"
                  class="text-fg-muted transition-colors group-hover:text-primary"
                />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="bg-white">
      <div class="rounded-t-2xl bg-gray-15 pt-10 pb-[41px] shadow-footer-bottom md:pb-6">
        <div class="page-container relative flex flex-col items-center gap-4">
          <p class="max-w-[320px] text-center text-[13px] leading-6 text-gray-700">
            {{ $t('All rights reserved. Any copying is subject to legal action.') }}
          </p>
          <ul class="flex items-center gap-4">
            <li v-for="link in socialIconLinks" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="block text-primary/50 transition-colors hover:text-primary"
              >
                <component :is="link.icon" />
              </NuxtLink>
            </li>
          </ul>

          <div class="flex gap-4 md:absolute md:inset-e-4 md:top-1/2 md:-translate-y-1/2">
            <img
              src="/images/samandehi.png"
              alt="Samandehi badge"
              width="72"
              height="72"
              class="size-18"
            />
            <img
              src="/images/enamad.png"
              alt="Enamad Badge"
              width="72"
              height="72"
              class="size-18"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
