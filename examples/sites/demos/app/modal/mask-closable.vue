<template>
  <tiny-button @click="btnClick" :reset-time="0">点击遮罩层可以关闭</tiny-button>
</template>

<script lang="jsx">
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.alert({ message: '点击遮罩层可以关闭', maskClosable: true })
    }
  }
}
</script>
