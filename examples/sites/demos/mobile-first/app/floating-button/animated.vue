<template>
  <div>
    <tiny-button @click="clickHandler">自定义滚动窗口</tiny-button>
    <div class="h-96 bg-color-bg-2 overflow-auto float-button-demo" v-if="show">
      <div class="h-96 bg-color-bg-2"></div>
      <div class="h-96 bg-color-bg-2"></div>
      <div class="h-96 bg-color-bg-2"></div>
      <div class="h-96 bg-color-bg-2"></div>
      <div class="h-96 bg-color-bg-2"></div>
      <div class="h-96 bg-color-bg-2"></div>
      <tiny-floating-button position="center" animated element-selector=".float-button-demo"></tiny-floating-button>
    </div>
  </div>
</template>

<script>
import { FloatingButton, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFloatingButton: FloatingButton,
    TinyButton: Button
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    clickHandler() {
      this.show = !this.show
    }
  }
}
</script>
