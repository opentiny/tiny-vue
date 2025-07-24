<template>
  <tiny-button @click="btnClick" :reset-time="0">提示框最小宽度为700</tiny-button>
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
        message: '提示框拖动最小宽度为700',
        resize: true,
        minWidth: 700
      })
    }
  }
}
</script>
