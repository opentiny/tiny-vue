<template>
  <tiny-button @click="btnClick" :reset-time="0">距离顶部的位置为500</tiny-button>
</template>

<script lang="jsx">
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.message({ message: '距离顶部的位置为500', top: 500, tiny_mode: 'mobile' })
    }
  }
}
</script>
