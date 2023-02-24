<template>
  <tiny-button @click="btnClick" :reset-time="0">最大化显示</tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.alert({ message: '最大化显示', fullscreen: true, mode: 'mobile' })
    }
  }
}
</script>
