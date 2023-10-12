<template>
  <tiny-color-picker @confirm="onConfirm" @cancel="onCacnel" />
</template>

<script>
import { ColorPicker, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyColorPicker: ColorPicker
  },
  methods: {
    onConfirm(hex) {
      Notify({
        type: 'success',
        position: 'top-right',
        title: '用户点击了选择',
        message: hex
      })
    },
    onCacnel() {
      Notify({
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
