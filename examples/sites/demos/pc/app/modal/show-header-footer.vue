<template>
  <tiny-button @click="btnClick" :reset-time="0">控制显示头部及底部</tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.alert({ message: '控制显示头部及底部', showHeader: false, showFooter: true })
    }
  }
}
</script>
