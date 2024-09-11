<template>
  <div class="h-[1500px]">
    <tiny-sticky :z-index="999999" @change="change" @scroll="scroll">
      <tiny-button type="primary">吸顶距离默认0px</tiny-button>
    </tiny-sticky>
  </div>
</template>

<script>
import { Sticky, Button } from '@opentiny/vue'

export default {
  components: {
    TinySticky: Sticky,
    TinyButton: Button
  },
  methods: {
    change(isFixed) {
      Modal.message({
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
