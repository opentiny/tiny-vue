<template>
  <tiny-popover
    title="标题"
    width="200"
    @show="show"
    @hide="hide"
    @after-leave="leave"
    @after-enter="enter"
    trigger="hover"
    content="这是一段内容"
  >
    <template #reference>
      <tiny-button>悬浮我触发</tiny-button>
    </template>
  </tiny-popover>
</template>

<script lang="jsx">
import { TinyPopover, TinyNotify, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyPopover,
    TinyButton
  },
  methods: {
    show() {
      TinyNotify({
        message: '显示时触发'
      })
    },
    hide() {
      TinyNotify({
        message: '隐藏时触发'
      })
    },
    enter() {
      TinyNotify({
        message: '进入的动画结束后触发'
      })
    },
    leave() {
      TinyNotify({
        message: '离开的动画结束后触发'
      })
    }
  }
}
</script>
