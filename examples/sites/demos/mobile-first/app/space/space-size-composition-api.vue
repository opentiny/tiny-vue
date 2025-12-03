<template>
  <div id="space-size">
    <!-- 显示当前间距 -->
    <div>
      <strong>当前间距: [{{ rowValue }}, {{ columnValue }}]</strong>
    </div>

    <!-- 行间距操作按钮 -->
    <div>
      <tiny-button id="increase-row" @click="rowValue += 5">增加行间距 +5</tiny-button>
      <tiny-button id="decrease-row" @click="rowValue -= 5">减少行间距 -5</tiny-button>
    </div>

    <!-- 列间距操作按钮 -->
    <div>
      <tiny-button id="increase-column" @click="columnValue += 5">增加列间距 +5</tiny-button>
      <tiny-button id="decrease-column" @click="columnValue -= 5">减少列间距 -5</tiny-button>
    </div>

    <!-- tiny-space 容器 -->
    <tiny-space class="tiny-space" :size="[rowValue, columnValue]" :wrap="true">
      <tiny-button v-for="n in 15" :key="n">按钮 {{ n }}</tiny-button>
    </tiny-space>
  </div>
</template>

<script>
import { TinyButton, TinySpace } from '@opentiny/vue'

export default {
  components: { TinyButton, TinySpace },
  data() {
    return {
      rowValue: 10,
      columnValue: 10
    }
  }
}
</script>
