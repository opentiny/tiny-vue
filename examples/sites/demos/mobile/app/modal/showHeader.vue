<template>
  <tiny-button @click="btnClick" :reset-time="0">不显示头部</tiny-button>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({ message: '不显示头部', showHeader: false, tiny_mode: 'mobile' })
    }
  }
}
</script>
