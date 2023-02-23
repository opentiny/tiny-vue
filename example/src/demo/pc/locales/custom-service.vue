<template>
  <tiny-locales :get-locale="getLocale" :get-current-locale="getCurrentLocale" :get-change-locale-url="getChangeLocaleUrl"></tiny-locales>
</template>

<script>
import { Locales } from '@opentiny/vue'

export default {
  components: {
    TinyLocales: Locales
  },
  methods: {
    getLocale() {
      // resolve 出来的必须是国际化的 key
      return Promise.resolve(['zhCN', 'enUS', 'zhTW'])
    },
    getCurrentLocale() {
      return Promise.resolve(['zhCN'])
    },
    getChangeLocaleUrl(targetLocale) {
      if (targetLocale === 'enUS') {
        return Promise.resolve('localhost:3000/#/webenglish/en-US/component/locales/custom-service')
      } else {
        return Promise.resolve('localhost:3000/#/zh-CN/component/custom-service')
      }
    }
  }
}
</script>
