<template>
  <div>
    <div class="row">
      使用content属性：
      <tiny-tooltip content="这是提示内容" placement="top">
        <button class="tiny-button tiny-button--primary">鼠标悬浮到这里</button>
      </tiny-tooltip>
    </div>
    <div class="row">
      使用renderContent属性：
      <tiny-tooltip placement="top" content="提示内容" :render-content="renderContent">
        <button class="tiny-button tiny-button--primary">鼠标悬浮到这里</button>
      </tiny-tooltip>
    </div>
    <div class="row">
      使用content插槽：
      <tiny-tooltip placement="top" effect="light">
        <template #content>
          <div><Icon-operationfaild class="red" /> 该网段不可用！可用网段：163</div>
        </template>
        <button class="tiny-button tiny-button--primary">校验错误</button>
      </tiny-tooltip>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { Tooltip as TinyTooltip } from '@opentiny/vue'
import { iconOperationfaild } from '@opentiny/vue-icon'

const IconOperationfaild = iconOperationfaild()

function renderContent(h, content) {
  return (
    <div>
      <h1>1. {content}</h1>
      <h2>2. {content}</h2>
    </div>
  )
}
</script>

<style scoped>
.row {
  margin: 16px 0;
}
.red {
  color: #f23030;
  fill: #f23030;
}
</style>
