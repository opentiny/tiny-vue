<template>
  <tiny-color-picker @confirm="onConfirm" @cancel="onCacnel" />
</template>

<script>
import { TinyColorPicker, TinyNotify } from '@opentiny/vue'

export default {
  components: {
    TinyColorPicker
  },
  methods: {
    onConfirm(hex) {
      TinyNotify({
        type: 'success',
        position: 'top-right',
        title: '用户点击了选择',
        message: hex
      })
    },
    onCacnel() {
      TinyNotify({
        type: 'warning',
        position: 'top-right',
        title: '用户选择了取消'
      })
    }
  },
  data() {
    return {
      color: '#66ccff'
    }
  }
}
</script>
