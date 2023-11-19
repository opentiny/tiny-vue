<template>
  <div>
    <tiny-popover placement="left" title="标题" width="200" trigger="hover" content="我是一段内容">
      <template #reference>
        <tiny-button style="margin-left: 16px">左侧位置弹出</tiny-button>
      </template>
    </tiny-popover>

    <tiny-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      :visible-arrow="false"
      content="我是一段内容"
    >
      <template #reference>
        <tiny-button style="margin-left: 16px">没有弹窗小箭头</tiny-button>
      </template>
    </tiny-popover>

    <tiny-popover
      placement="right"
      title="标题"
      width="200"
      trigger="hover"
      content="我是一段内容"
      popper-class="custom-popover-demo-cls"
    >
      <template #reference>
        <tiny-button style="margin-left: 16px">覆盖字体样式</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script setup lang="jsx">
import { Popover as TinyPopover, Button as TinyButton } from '@opentiny/vue'
</script>

<style>
/** 自定义弹出层的样式
    由于弹出层是插入在body中的，所以写全局样式 */
.custom-popover-demo-cls {
  font-size: 16px !important;
  font-style: italic;
}
.custom-popover-demo-cls .tiny-popover__title {
  font-size: 20px !important;
  font-weight: bolder !important;
}
</style>
