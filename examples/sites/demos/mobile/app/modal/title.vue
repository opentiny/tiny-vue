<template>
  <tiny-button @click="btnClick" :reset-time="0">自定义标题</tiny-button>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({ message: '自定义标题', title: '自定义标题', tiny_mode: 'mobile' })
    }
  }
}
</script>
