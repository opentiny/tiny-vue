<template>
  <tiny-button @click="btnClick" :reset-time="0">自定义提示框的内容</tiny-button>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({ message: '自定义提示框的内容', tiny_mode: 'mobile' })
    }
  }
}
</script>
