<template>
  <tiny-popover
    title="标题"
    width="200"
    @show="show"
    @hide="hide"
    @after-leave="leave"
    @after-enter="enter"
    content="这是一段内容"
  >
    <template #reference>
      <tiny-button>悬浮我触发</tiny-button>
    </template>
  </tiny-popover>
</template>

<script lang="jsx">
import { Popover, Notify, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  },
  methods: {
    show() {
      Notify({
        message: '显示时触发'
      })
    },
    hide() {
      Notify({
        message: '隐藏时触发'
      })
    },
    enter() {
      Notify({
        message: '进入的动画结束后触发'
      })
    },
    leave() {
      Notify({
        message: '离开的动画结束后触发'
      })
    }
  }
}
</script>
