<template>
  <tiny-button @click="click"> 默认按钮 </tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    click() {
      Modal.message('click')
    }
  }
}
</script>

<style scoped>
button {
  margin: 0 16px 16px 0;
}
</style>
