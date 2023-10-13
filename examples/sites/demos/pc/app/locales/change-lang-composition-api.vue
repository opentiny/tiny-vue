<template>
  <tiny-locales :change-lang="changeLang" :get-locale="getLocale"></tiny-locales>
</template>

<script setup lang="jsx">
import { getCurrentInstance } from 'vue'
import { Locales as TinyLocales } from '@opentiny/vue'

const instance = getCurrentInstance()
const i18n = instance.appContext.config.globalProperties.$i18n

function changeLang(lang) {
  if (i18n) {
    i18n.locale = lang
  }
}

function getLocale() {
  // resolve 出来的必须是国际化的 key
  return Promise.resolve(['zhCN', 'enUS', 'zhTW'])
}
</script>
