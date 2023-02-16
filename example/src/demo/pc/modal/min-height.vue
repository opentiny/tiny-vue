<template>
  <tiny-button @click="btnClick" :reset-time="0"
    >提示框最小高度为300</tiny-button
  >
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
        message: '提示框拖动最小高度为300',
        resize: true,
        minHeight: 300
      })
    }
  }
}
</script>
