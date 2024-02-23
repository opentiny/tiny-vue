<template>
  <tiny-button @click="btnClick" :reset-time="0">不锁界面不要遮罩层</tiny-button>
</template>

<script lang="jsx">
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.alert({
        message: '不锁界面不要遮罩层',
        lockView: false,
        mask: false,
        tiny_mode: 'mobile'
      })
    }
  }
}
</script>
