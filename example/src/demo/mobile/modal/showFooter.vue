<template>
  <tiny-button @click="btnClick" :reset-time="0">不显示底部</tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.alert({ message: '不显示底部', showFooter: false, mode: 'mobile' })
    }
  }
}
</script>
