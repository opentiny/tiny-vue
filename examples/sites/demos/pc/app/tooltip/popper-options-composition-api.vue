<template>
  <div>
    <tiny-tooltip content="提示内容" :popper-options="options">
      <button class="tiny-button tiny-button--primary">鼠标悬浮到这里</button>
    </tiny-tooltip>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tooltip as TinyTooltip } from '@opentiny/vue'

const options = ref({
  bubbling: true, // 监听元素所有上级有滚动元素的scroll事件,防止弹出层与页面分离
  removeOnDestroy: true // 弹出层消失后，自动从页面上移除相应的DOM元素
})
</script>
