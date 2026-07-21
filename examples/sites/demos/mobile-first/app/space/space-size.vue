<template>
  <div>
    <!-- 选择行或列的按钮 -->
    <div>
      <strong>当前 间距: [{{ rowValue }}, {{ columnValue }}]</strong>
    </div>
    <div>
      <tiny-button type="primary">行</tiny-button>
      <tiny-slider v-model="rowValue" :min="0" :max="50" :step="2" style="width: 300px; margin-bottom: 20px" />
    </div>
    <div>
      <tiny-button type="success">列</tiny-button>
      <tiny-slider v-model="columnValue" :min="0" :max="50" :step="2" style="width: 300px; margin-bottom: 20px" />
    </div>

    <!-- 使用 dynamic direction 值 -->
    <tiny-space class="tiny-space" :size="[rowValue, columnValue]" :wrap="true">
      <tiny-button v-for="n in 15" :key="n">按钮 {{ n }}</tiny-button>
    </tiny-space>
  </div>
</template>

<script>
import { TinyButton, TinySpace, TinySlider } from '@opentiny/vue'

export default {
  components: {
    TinySpace,
    TinyButton,
    TinySlider
  },
  data() {
    return {
      rowValue: 10,
      columnValue: 10
    }
  }
}
</script>
