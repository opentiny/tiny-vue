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

<script setup lang="jsx">
import { TinyPopover, TinyNotify, TinyButton } from '@opentiny/vue'

function enter() {
  TinyNotify({
    title: '提示',
    message: '进入的动画结束后触发',
    offset: 100
  })
}

function leave() {
  TinyNotify({
    title: '提示',
    message: '离开的动画结束后触发',
    offset: 100
  })
}

function show() {
  TinyNotify({
    title: '提示',
    message: '显示时触发',
    offset: 100
  })
}

function hide() {
  TinyNotify({
    title: '提示',
    message: '隐藏时触发',
    offset: 100
  })
}
</script>
