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
          <tiny-button>默认0.2s隐藏</tiny-button>
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
          <tiny-button>自定义1.5s隐藏</tiny-button>
        </template>
      </tiny-popover>
    </div>
  </div>
</template>

<script lang="jsx">
import { Popover, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  }
}
</script>

<style scoped>
.container > div {
  display: inline-block;
  margin-right: 20px;
}
</style>

<style>
/** 自定义动画类名要匹配transition属性中的值
    由于弹窗元素是插入到body中的，所以写在全局样式 */
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
