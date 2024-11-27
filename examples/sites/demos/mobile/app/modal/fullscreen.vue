<template>
  <tiny-button @click="btnClick" :reset-time="0">最大化显示</tiny-button>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({ message: '最大化显示', fullscreen: true, tiny_mode: 'mobile' })
    }
  }
}
</script>
