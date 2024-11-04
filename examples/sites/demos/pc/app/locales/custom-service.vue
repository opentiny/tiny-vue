<template>
  <tiny-locales
    :get-locale="getLocale"
    :get-current-locale="getCurrentLocale"
    :get-change-locale-url="getChangeLocaleUrl"
  ></tiny-locales>
</template>

<script lang="jsx">
import { TinyLocales } from '@opentiny/vue'

export default {
  components: {
    TinyLocales
  },
  methods: {
    getLocale() {
      // resolve 出来的必须是国际化的 key
      return Promise.resolve(['zh_CN', 'en_US', 'zh_TW'])
    },
    getCurrentLocale() {
      return Promise.resolve(['zh_CN'])
    },
    getChangeLocaleUrl(targetLocale) {
      if (targetLocale === 'en_US') {
        return Promise.resolve(`${window.location.origin}/#/webenglish/en-US/component/locales/custom-service`)
      } else {
        return Promise.resolve(`${window.location.origin}/#/zh-CN/component/custom-service`)
      }
    }
  }
}
</script>
