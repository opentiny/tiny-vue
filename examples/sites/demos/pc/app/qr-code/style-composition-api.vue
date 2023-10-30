<template>
  <tiny-qr-code v-bind="params"></tiny-qr-code>
</template>

<script setup>
import { QrCode as TinyQrCode } from '@opentiny/vue'

const params = {
  value: '测试二维码数据',
  color: '#1677ff',
  style: { background: '#f5f5f5', padding: '24px' }
}
</script>
