<template>
  <tiny-button @click="btnClick" :reset-time="0">不允许重复点击</tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.message({ message: '不允许重复点击', id: 'unique' })
    }
  }
}
</script>
