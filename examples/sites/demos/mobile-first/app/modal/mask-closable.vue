<template>
  <tiny-button @click="btnClick" :reset-time="0">点击遮罩层可以关闭</tiny-button>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({ message: '点击遮罩层可以关闭', maskClosable: true })
    }
  }
}
</script>
