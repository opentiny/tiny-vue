<template>
  <tiny-button @click="btnClick" :reset-time="0">z-index 的值为500</tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.alert({ message: 'z-index 的值为500', zIndex: 500 })
    }
  }
}
</script>
