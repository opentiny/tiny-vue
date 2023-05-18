<template>
  <tiny-collapse v-model="activeNames">
    <tiny-collapse-item name="1">
      <template #title>
        <div style="color: #1890ff">一致性</div>
      </template>
      <template #title-right>Consistency</template>
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </tiny-collapse-item>
    <tiny-collapse-item name="2">
      <template #title>
        <div>反馈 Feedback</div>
      </template>
      <template #title-right>
        <icon-writing class="tiny-svg-size icon-writing"></icon-writing>
      </template>
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </tiny-collapse-item>
  </tiny-collapse>
</template>

<script>
import { Collapse, CollapseItem } from '@opentiny/vue'
import { IconWriting } from '@opentiny/vue-icon'
export default {
  components: {
    TinyCollapse: Collapse,
    TinyCollapseItem: CollapseItem,
    IconWriting: IconWriting()
  },
  data() {
    return {
      activeNames: []
    }
  }
}
</script>
