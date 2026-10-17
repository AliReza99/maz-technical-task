<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  // pass text to show a more specific message
  error: NuxtError<{ title?: string } | undefined>
}>()

const { t } = useI18n()
const title = computed(() => t(props.error.data?.title ?? 'Page not found'))
const head = useLocaleHead({ seo: false })

useHead({
  title,
  htmlAttrs: {
    lang: () => head.value.htmlAttrs.lang,
    dir: () => head.value.htmlAttrs.dir,
  },
})
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <BaseNavbar />
    <main
      class="page-container flex w-full flex-1 flex-col items-center justify-center gap-6 py-10 text-center"
    >
      <h1 class="font-iran-yekan text-xl/8 font-bold text-dark">{{ title }}</h1>
      <BaseButton variant="contained" to="/">{{ $t('Product list') }}</BaseButton>
    </main>
    <BaseFooter />
  </div>
</template>
