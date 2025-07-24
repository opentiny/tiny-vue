<template>
  <div class="container">
    <div>
      <tiny-popover
        placement="top-start"
        title="标题"
        width="200"
        transition="fade-in-linear"
        trigger="hover"
        content="这是一段内容。"
      >
        <template #reference>
          <tiny-button>默认 0.2s 隐藏</tiny-button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover
        placement="top-start"
        title="标题"
        width="200"
        transition="custom-fade"
        trigger="hover"
        content="这是一段内容。"
      >
        <template #reference>
          <tiny-button>自定义 1.5s 隐藏</tiny-button>
        </template>
      </tiny-popover>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { TinyPopover, TinyButton } from '@opentiny/vue'
</script>

<style scoped>
.container > div {
  display: inline-block;
  margin-right: 20px;
}
</style>

<style>
/** 自定义动画类名要匹配 transition 属性中的值
    由于弹窗元素是插入到 body 中的，所以写在全局样式 */
.custom-fade-enter,
.custom-fade-enter-from,
.custom-fade-leave-to {
  opacity: 0;
}

.custom-fade-enter-active,
.custom-fade-leave-active {
  transition: opacity 1.5s cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
