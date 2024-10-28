<template>
  <tiny-qr-code v-bind="params"></tiny-qr-code>
</template>

<script>
import { TinyQrCode } from '@opentiny/vue'

export default {
  components: {
    TinyQrCode
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
  }
}
</script>
