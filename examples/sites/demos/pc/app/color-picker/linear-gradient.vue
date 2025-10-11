<template>
  <div>
    <tiny-color-picker v-model="color" color-mode="linear-gradient" @confirm="onConfirm" />
  </div>
</template>

<script>
import { TinyColorPicker, TinyNotify } from '@opentiny/vue'
import { ref } from 'vue'

export default {
  components: {
    TinyColorPicker
  },
  setup() {
    const color = ref('linear-gradient(90deg, #66ADFF 21%,#00FEF1 100%)')
    const onConfirm = () => {
      TinyNotify({
        type: 'success',
        position: 'top-right',
        title: '用户点击了选择',
        message: color.value
      })
    }
    return { onConfirm, color }
  }
}
</script>
