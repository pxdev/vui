<template>
  <div>
    <ClientOnly>
      <btn @click="toggleLocales()">
        <span class="" v-if="locale === 'ar'">AR</span>
        <span class="" v-if="locale === 'en'">EN</span>
      </btn>
    </ClientOnly>
  </div>
</template>

<script>

import {useI18n} from 'vue-i18n'
import {useTextDirection} from '@vueuse/core'


export default {
  name: "LanguageSwitcher",


  setup() {
    const {availableLocales, locale} = useI18n()
    const dir = useTextDirection()


    const toggleLocales = () => {
      const locales = availableLocales
      locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
      dir.value = dir.value === 'rtl' ? 'ltr' : 'rtl'
    }

    return {
      toggleLocales,
      locale
    }
  }
}
</script>


