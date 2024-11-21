<template>
  <tiny-button @click="btnClick" :reset-time="0">不锁界面不要遮罩层</tiny-button>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({
        message: '不锁界面不要遮罩层',
        lockView: false,
        mask: false
      })
    }
  }
}
</script>
