<template>
  <div>
    <tiny-tooltip content="提示内容" :render-content="renderContent" placement="bottom">
      <button class="tiny-button tiny-button--primary">自定义渲染函数的使用</button>
    </tiny-tooltip>
  </div>
</template>

<script lang="jsx">
import { Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip
  },
  methods: {
    renderContent(h, content) {
      return (
        <div>
          <h1>{content}</h1>
          <h2>{content}</h2>
        </div>
      )
    }
  }
}
</script>
