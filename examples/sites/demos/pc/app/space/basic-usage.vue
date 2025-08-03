<template>
  <div>
    <!-- 选择行或列的按钮 -->
    <tiny-button type="primary" @click="setDirection('row')">行</tiny-button>
    <tiny-button type="success" @click="setDirection('column')">列</tiny-button>

    <!-- 滑动条 -->
    <tiny-slider v-model="value" :min="0" :max="50" :step="2" style="width: 300px; margin-bottom: 20px" />
    <!-- 使用 dynamic direction 值 -->
    <tiny-space :size="value" :direction="direction">
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
    // 设置空间排列方向
    setDirection(direction) {
      this.direction = direction
    }
  }
}
</script>
