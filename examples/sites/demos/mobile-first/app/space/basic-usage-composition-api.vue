<template>
  <!-- 给 space 容器加 id，方便 e2e 定位 -->
  <div id="space-basic-usage">
    <!-- 方向按钮 -->
    <tiny-button type="primary" @click="setDirection('row')">行</tiny-button>
    <tiny-button type="success" @click="setDirection('column')">列</tiny-button>

    <!-- 间距按钮 -->
    <div style="margin: 10px 0">
      <tiny-button @click="value += 5">增加间距 +5</tiny-button>
      <tiny-button @click="value -= 5">减少间距 -5</tiny-button>
    </div>

    <!-- 在 tiny-space 上加一个 class，保证 E2E 稳定 -->
    <tiny-space class="tiny-space" :size="value" :direction="direction">
      <tiny-button style="margin: 0" v-for="n in 3" :key="n">按钮 {{ n }}</tiny-button>
    </tiny-space>
  </div>
</template>

<script>
import { TinyButton, TinySpace } from '@opentiny/vue'

export default {
  components: {
    TinySpace,
    TinyButton
  },
  data() {
    return {
      value: 10, // 初始间距
      direction: 'column' // 初始方向为 column
    }
  },
  methods: {
    setDirection(direction) {
      this.direction = direction
    }
  }
}
</script>
