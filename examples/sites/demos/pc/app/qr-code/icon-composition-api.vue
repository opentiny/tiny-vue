<template>
  <tiny-qr-code v-bind="params"></tiny-qr-code>
</template>

<script setup>
import { QrCode as TinyQrCode } from '@opentiny/vue'

const params = {
  value: '测试二维码数据',
  icon: import.meta.env.VITE_APP_BUILD_BASE_URL
    ? `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`
    : 'https://res.hc-cdn.com/tinyui-design-common/1.0.5.20230707170109/assets/tinyvue.svg',
  iconSize: 60,
  size: 250
}
</script>
