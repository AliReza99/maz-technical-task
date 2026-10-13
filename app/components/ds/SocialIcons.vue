<script setup lang="ts">
import {
  SocialIconInstagram,
  SocialIconLinkedin,
  SocialIconTelegram,
  SocialIconTwitter,
  SocialIconYoutube,
} from '#components'

const icons = [
  { name: 'SocialIconTelegram', component: SocialIconTelegram },
  { name: 'SocialIconInstagram', component: SocialIconInstagram },
  { name: 'SocialIconLinkedin', component: SocialIconLinkedin },
  { name: 'SocialIconYoutube', component: SocialIconYoutube },
  { name: 'SocialIconTwitter', component: SocialIconTwitter },
]

const colors = ['text-fg-muted', 'text-primary', 'text-icon-muted']
</script>

<template>
  <section id="social-icons" dir="ltr" class="space-y-10">
    <h2 class="text-2xl font-medium">Social Icons</h2>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      <div
        v-for="icon in icons"
        :key="icon.name"
        class="flex flex-col items-center gap-3 rounded-lg border border-gray-50 p-4"
      >
        <div class="flex items-center gap-3">
          <component :is="icon.component" v-for="color in colors" :key="color" :class="color" />
        </div>
        <code class="text-xs text-gray-500">{{ icon.name }}</code>
      </div>
    </div>
  </section>
</template>
