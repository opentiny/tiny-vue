<template>
  <div class="sticky-wrap">
    <tiny-sticky :z-index="999999" @change="change" @scroll="scroll">
      <tiny-button type="primary">吸顶距离默认0px</tiny-button>
    </tiny-sticky>
  </div>
</template>

<script>
import { TinySticky, TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinySticky,
    TinyButton
  },
  methods: {
    change(isFixed) {
      TinyModal.message({
        message: `触发 change 事件，当前isFixed为：${isFixed}`,
        status: 'info'
      })
    },
    scroll({ scrollTop, isFixed }) {
      console.log(`scrollTop：${scrollTop}`, `isFixed：${isFixed}`)
    }
  }
}
</script>

<style scoped>
.sticky-wrap {
  height: 1600px;
}
</style>
