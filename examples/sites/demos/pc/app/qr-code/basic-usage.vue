<template>
  <tiny-qr-code v-bind="params"></tiny-qr-code>
</template>

<script>
import { QrCode } from '@opentiny/vue'

export default {
  components: {
    TinyQrCode: QrCode
  },
  data() {
    return {
      params: {
        value: '测试二维码数据',
        size: 250
      }
    }
  }
}
</script>
