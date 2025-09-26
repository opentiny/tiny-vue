<template>
  <!-- 给 space 容器加 id，方便 e2e 定位 -->
  <div>
    <tiny-button type="primary" @click="setDirection('row')">行</tiny-button>
    <tiny-button type="success" @click="setDirection('column')">列</tiny-button>

    <tiny-slider v-model="value" :min="0" :max="50" :step="2" style="width: 300px; margin-bottom: 20px" />

    <!-- 在 tiny-space 上加一个 class，保证 E2E 稳定 -->
    <tiny-space class="tiny-space" :size="value" :direction="direction">
      <tiny-button style="margin: 0" v-for="n in 3" :key="n">按钮 {{ n }}</tiny-button>
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
      value: 10, // slider 的值
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
