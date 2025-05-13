<template>
  <tiny-number-animation ref="numberAnimationRef" :from="fromVal" :to="toVal" :active="false" @finish="handleFinish" />
  <tiny-button @click="handleClick">播放</tiny-button>
</template>

<script lang="jsx">
import { TinyButton, TinyNumberAnimation, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinyNumberAnimation
  },
  data() {
    return {
      fromVal: 0,
      toVal: 900
    }
  },
  methods: {
    handleClick() {
      this.$refs.numberAnimationRef.play()
    },
    handleFinish() {
      TinyModal.message({ message: '动画结束了', status: 'info' })
    }
  }
}
</script>
