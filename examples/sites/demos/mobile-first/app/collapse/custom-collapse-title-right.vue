<template>
  <tiny-collapse v-model="activeNames">
    <tiny-collapse-item name="1">
      <template #title>
        <span>一致性 Consistency</span>
      </template>
      <template #title-right>
        <span><icon-clock-work class="icon-clockWork"></icon-clock-work></span>
      </template>
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </tiny-collapse-item>
    <tiny-collapse-item title="反馈 Feedback" title-right="反馈 Feedback" name="2">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </tiny-collapse-item>
  </tiny-collapse>
</template>

<script>
import { Collapse, CollapseItem } from '@opentiny/vue'
import { IconClockWork } from '@opentiny/vue-icon'

export default {
  components: {
    TinyCollapse: Collapse,
    TinyCollapseItem: CollapseItem,
    IconClockWork: IconClockWork()
  },
  data() {
    return {
      activeNames: ['1']
    }
  }
}
</script>

<style scoped>
.icon-clockWork {
  fill: #1890ff;
  font-size: 18px;
  margin-right: 10px;
}
</style>
