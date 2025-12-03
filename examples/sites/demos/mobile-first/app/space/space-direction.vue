<template>
  <div>
    <!-- 选择行或列的按钮 -->
    <tiny-button type="primary" @click="setDirection('row')">行</tiny-button>
    <tiny-button style="margin: 10px" type="success" @click="setDirection('column')">列</tiny-button>

    <tiny-space class="tiny-space" :direction="direction">
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
