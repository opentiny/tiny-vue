<template>
  <tiny-button @click="btnClick" :reset-time="0">可以拖动调整窗口大小</tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.alert({
        message: '可以拖动调整窗口大小',
        resize: true,
        height: 188,
        width: 366,
        mode: 'mobile'
      })
    }
  }
}
</script>
