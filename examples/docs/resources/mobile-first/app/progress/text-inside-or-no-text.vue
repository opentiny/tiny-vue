<template>
  <div>
    <div>
      <tiny-button @click="showTest = !showTest">
        {{ showTest ? '隐藏' : '显示' }}文字
      </tiny-button>
    </div>
    <br />
    <tiny-progress class="progress" :show-text="showTest" size="large" :percentage="50"></tiny-progress>
  </div>
</template>

<script>
import { Progress, Button } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress,
    TinyButton: Button
  },
  data() {
    return {
      showTest: true
    }
  }
}
</script>
