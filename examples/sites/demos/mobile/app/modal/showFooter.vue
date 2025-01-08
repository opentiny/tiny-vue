<template>
  <tiny-button @click="btnClick" :reset-time="0">不显示底部</tiny-button>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({ message: '不显示底部', maskClosable: true, showFooter: false, tiny_mode: 'mobile' })
    }
  }
}
</script>
