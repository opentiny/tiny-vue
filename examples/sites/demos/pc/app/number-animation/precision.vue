<template>
  <tiny-number-animation ref="numberAnimationRef" :from="fromVal" :to="toVal" :active="false" :precision="4" />
  <tiny-button @click="handleClick">播放</tiny-button>
</template>

<script lang="jsx">
import { TinyButton, TinyNumberAnimation } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinyNumberAnimation
  },
  data() {
    return {
      fromVal: 0.0,
      toVal: 24
    }
  },
  methods: {
    handleClick() {
      this.$refs.numberAnimationRef.play()
    }
  }
}
</script>
