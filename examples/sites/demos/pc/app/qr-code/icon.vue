<template>
  <div class="qr-code-attr">
    iconSize:
    <tiny-numeric v-model="iconSize" :min="1" :max="size * 0.3" />
    size: <tiny-numeric v-model="size" :min="1" :max="1e4" />
  </div>

  <tiny-qr-code v-bind="params"></tiny-qr-code>
</template>

<script>
import { TinyNumeric, TinyQrCode } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric,
    TinyQrCode
  },
  data() {
    return {
      size: 250,
      iconSize: 60
    }
  },
  computed: {
    params() {
      return {
        value: '测试二维码数据',
        icon: import.meta.env.VITE_APP_BUILD_BASE_URL
          ? `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`
          : 'https://res.hc-cdn.com/tinyui-design-common/1.0.5.20230707170109/assets/tinyvue.svg',
        iconSize: this.iconSize,
        size: this.size
      }
    }
  }
}
</script>

<style scoped>
.qr-code-attr {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
