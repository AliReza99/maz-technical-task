const COOKIE_NAME = 'locale'

export default defineNuxtPlugin({
  name: 'locale-cookie',
  enforce: 'pre',
  setup(nuxtApp) {
    const cookie = useCookie<string | undefined>(COOKIE_NAME, {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    })

    nuxtApp.hook('i18n:beforeLocaleSwitch', (data) => {
      if (data.initialSetup && cookie.value) {
        data.newLocale = cookie.value as typeof data.newLocale
      }
    })

    nuxtApp.hook('i18n:localeSwitched', ({ newLocale }) => {
      cookie.value = newLocale
    })
  },
})
