<template>
  <div class="qr-code-container">
    <div>
      <tiny-button @click="changeColor">改变颜色</tiny-button>
    </div>
    <br />
    <tiny-qr-code v-bind="params"></tiny-qr-code>
  </div>
</template>

<script setup>
import { TinyQrCode, TinyButton } from '@opentiny/vue'
import { ref } from 'vue'

const params = ref({
  value: '测试二维码数据',
  color: '#1677ff',
  size: 250,
  style: { background: '#f5f5f5', padding: '24px' }
})

const changeColor = () => {
  params.value.color = '#666'
}
</script>
