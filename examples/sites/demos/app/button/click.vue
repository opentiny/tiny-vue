<template>
  <tiny-button @click="click">默认按钮</tiny-button>
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
