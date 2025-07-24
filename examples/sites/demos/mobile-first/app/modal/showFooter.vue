<template>
  <tiny-button @click="btnClick" :reset-time="0">不显示底部</tiny-button>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({ message: '不显示底部', showFooter: false })
    }
  }
}
</script>
