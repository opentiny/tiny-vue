<template>
  <tiny-button @click="btnClick" :reset-time="0">不锁住滚动条不要遮罩层</tiny-button>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({
        message: '不锁住滚动条不要遮罩层',
        lockScroll: false,
        mask: false,
        tiny_mode: 'mobile'
      })
    }
  }
}
</script>
