<template>
  <tiny-color-picker v-model="color" @confirm="onConfirm" @cancel="onCacnel" alpha />
</template>

<script>
import { ColorPicker, Notify } from '@opentiny/vue'
import { ref } from 'vue'

export default {
  components: {
    TinyColorPicker: ColorPicker,
  },
  setup() {
    const color = ref('#66ccff')
    /**
     * @param {string} hex #rrggbb
     */
    const onConfirm = (hex) => {
      Notify({
        type: 'success',
        position: 'top-right',
        title: '用户点击了选择',
        message: hex
      })
    }
    const onCacnel = () => {
      Notify({
        type: 'warning',
        position: 'top-right',
        title: '用户选择了取消'
      })
    }
    return {
      color,
      onConfirm,
      onCacnel
    }
  }
}
</script>
