<template>
  <div>
    <tiny-progress class="progress" type="circle" :percentage="50" :width="200"></tiny-progress>
    <tiny-progress class="progress" type="dashboard" :percentage="50" :width="150"></tiny-progress>
  </div>
</template>

<script>
import { Progress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress
  }
}
</script>

<style scoped>
.progress {
  margin-bottom: 20px;
}
</style>
