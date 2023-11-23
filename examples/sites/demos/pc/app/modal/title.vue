<template>
  <tiny-button @click="btnClick" :reset-time="0">自定义标题</tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.alert({ message: '自定义标题', title: '自定义标题' })
    }
  }
}
</script>
