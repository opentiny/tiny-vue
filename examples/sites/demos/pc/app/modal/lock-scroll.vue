<template>
  <tiny-button @click="btnClick" :reset-time="0">不锁住滚动条不要遮罩层</tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      const str = '不锁住滚动条不要遮罩层。  '
      Modal.alert({
        message: str.repeat(150),
        lockScroll: false,
        mask: false
      })
    }
  }
}
</script>
