<template>
  <tiny-popover placement="bottom" title="标题" width="200" @show="show" @hide="hide" @after-leave="leave" @after-enter="enter" trigger="hover" :content="content">
    <template #reference>
      <tiny-button>悬浮我触发</tiny-button>
    </template>
  </tiny-popover>
</template>

<script>
import { Popover, Notify, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  },
  data() {
    return {
      content: '这是一段内容,这是一段内容,这是一段内容,这是一段内容。'
    }
  },
  methods: {
    enter() {
      Notify({
        title: '提示',
        message: '显示动画播放完毕后触发',
        offset: 100
      })
    },
    leave() {
      Notify({
        title: '提示',
        message: '隐藏动画播放完毕后触发',
        offset: 100
      })
    },
    show() {
      Notify({
        title: '提示',
        message: '显示时触发',
        offset: 100
      })
    },
    hide() {
      Notify({
        title: '提示',
        message: '隐藏时触发',
        offset: 100
      })
    }
  }
}
</script>
