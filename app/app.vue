<script setup lang="ts">
const { t } = useI18n()
const head = useLocaleHead({ seo: false })

useHead({
  titleTemplate: (title) => {
    const siteName = t('Maz Online Store')
    return title ? `${title} · ${siteName}` : siteName
  },
  htmlAttrs: {
    lang: () => head.value.htmlAttrs.lang,
    dir: () => head.value.htmlAttrs.dir,
  },
})

useSeoMeta({
  description: () => t('Store catalog'),
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
