<template>
  <div class="qr-code-container">
    <div>改变颜色<tiny-color-picker v-model="color" /></div>

    <tiny-qr-code v-bind="params"></tiny-qr-code>
  </div>
</template>

<script>
import { TinyQrCode, TinyColorPicker } from '@opentiny/vue'

export default {
  components: {
    TinyQrCode,
    TinyColorPicker
  },
  data() {
    return {
      color: '#1677ff'
    }
  },
  computed: {
    params() {
      return {
        value: '测试二维码数据',
        color: this.color,
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
