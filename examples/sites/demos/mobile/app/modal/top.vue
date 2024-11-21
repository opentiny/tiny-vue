<template>
  <tiny-button @click="btnClick" :reset-time="0">距离顶部的位置为500</tiny-button>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.message({ message: '距离顶部的位置为500', top: 500, tiny_mode: 'mobile' })
    }
  }
}
</script>
