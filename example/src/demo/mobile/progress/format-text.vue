<template>
  <div>
    <div>
      <tiny-button @click.native="testInside = !testInside"
        >{{ testInside ? '外置' : '内置' }}文字</tiny-button
      >
    </div>
    <br />
    <div class="progress-container">
      <tiny-progress
        class="progress"
        :stroke-width="24"
        :text-inside="testInside"
        :percentage="50"
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

  data() {
    return {
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
