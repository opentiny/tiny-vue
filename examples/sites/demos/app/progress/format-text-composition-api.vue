<template>
  <div>
    <div>
      <tiny-button @click="testInside = !testInside">{{ testInside ? '外置' : '内置' }}文字</tiny-button>
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

<script setup lang="jsx">
import { ref } from 'vue'
import { Progress as TinyProgress, Button as TinyButton } from '@opentiny/vue'

const percentageText = ref(60)
const testInside = ref(true)

function formatText() {
  return `自定义文字内容 ${percentageText.value}%`
}
</script>

<style scoped>
.progress-container {
  display: inline-block;
  width: 70%;
}
</style>
