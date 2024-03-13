<template>
  <tiny-button @click="btnClick" :reset-time="0">距离顶部的位置为500 px</tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.message({ status: 'info', message: '距离顶部的位置为500 px', top: 500 })
    }
  }
}
</script>
