<template>
  <tiny-button @click="btnClick" :reset-time="0">zIndex的值为500</tiny-button>
</template>

<script lang="jsx">
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.alert({ message: 'zIndex的值为500', zIndex: 500, tiny_mode: 'mobile' })
    }
  }
}
</script>
