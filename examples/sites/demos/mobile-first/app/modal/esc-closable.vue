<template>
  <tiny-button @click="btnClick" :reset-time="0"> 按 Esc 键可以关闭弹出框 </tiny-button>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({ message: '按 Esc 键可以关闭', escClosable: true })
    }
  }
}
</script>
