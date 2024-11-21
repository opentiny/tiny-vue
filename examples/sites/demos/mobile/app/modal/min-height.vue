<template>
  <tiny-button @click="btnClick" :reset-time="0">提示框最小高度为300</tiny-button>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({
        message: '提示框拖动最小高度为300',
        resize: true,
        minHeight: 300,
        tiny_mode: 'mobile'
      })
    }
  }
}
</script>
