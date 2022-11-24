<template>
  <div>
    <div>
      <tiny-button @click="testInside = !testInside"
        >{{ testInside ? '外置' : '内置' }}文字</tiny-button
      >
    </div>
    <br />
    <div class="progress-container">
      <tiny-progress
        class="progress"
        :stroke-width="24"
        :format="formatText"
        :text-inside="testInside"
        :percentage="percentageText"
      ></tiny-progress>
    </div>
  </div>
</template>

<script>
import { Progress, Button } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress,
    TinyButton: Button
  },
  methods: {
    formatText() {
      return `自定义文字内容 ${this.percentageText}%`
    }
  },
  data() {
    return {
      percentageText: 60,
      testInside: true
    }
  }
}
</script>

<style scoped>
.progress-container {
  display: inline-block;
  width: 70%;
}
</style>
