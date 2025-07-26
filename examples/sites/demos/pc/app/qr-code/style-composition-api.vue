<template>
  <div class="qr-code-container">
    <tiny-color-picker v-model="params.color" />
    <tiny-qr-code v-bind="params"></tiny-qr-code>
  </div>
</template>

<script setup>
import { TinyQrCode, TinyColorPicker } from '@opentiny/vue'
import { ref } from 'vue'

const params = ref({
  value: '测试二维码数据',
  color: '#1677ff',
  size: 250,
  style: { background: '#f5f5f5', padding: '24px' }
})
</script>
