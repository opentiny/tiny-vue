<template>
  <div class="qr-code-container">
    <div>
      <tiny-button @click="changeColor">改变颜色</tiny-button>
    </div>
    <br />
    <tiny-qr-code v-bind="params"></tiny-qr-code>
  </div>
</template>

<script>
import { TinyQrCode, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyQrCode,
    TinyButton
  },
  data() {
    return {
      params: {
        value: '测试二维码数据',
        color: '#1677ff',
        size: 250,
        style: { background: '#f5f5f5', padding: '24px' }
      }
    }
  },
  methods: {
    changeColor() {
      this.params.color = '#666'
    }
  }
}
</script>
