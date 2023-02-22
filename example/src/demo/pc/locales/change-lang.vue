<template>
  <tiny-locales :change-lang="changeLang" :get-locale="getLocale"></tiny-locales>
</template>

<script>
import { Locales } from '@opentiny/vue'

export default {
  components: {
    TinyLocales: Locales
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang
    },
    getLocale() {
      // resolve 出来的必须是国际化的 key
      return Promise.resolve(['zhCN', 'enUS', 'zhTW'])
    }
  }
}
</script>
