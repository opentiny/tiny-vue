<template>
  <tiny-locales
    :get-locale="getLocale"
    :get-current-locale="getCurrentLocale"
    :get-change-locale-url="getChangeLocaleUrl"
  ></tiny-locales>
</template>

<script setup lang="jsx">
import { Locales as TinyLocales } from '@opentiny/vue'

function getLocale() {
  // resolve 出来的必须是国际化的 key
  return Promise.resolve(['zhCN', 'enUS', 'zhTW'])
}

function getCurrentLocale() {
  return Promise.resolve(['zhCN'])
}

function getChangeLocaleUrl(targetLocale) {
  if (targetLocale === 'enUS') {
    return Promise.resolve(`${window.location.origin}/#/webenglish/en-US/component/locales/custom-service`)
  } else {
    return Promise.resolve(`${window.location.origin}/#/zh-CN/component/custom-service`)
  }
}
</script>
