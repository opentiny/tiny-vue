<template>
  <tiny-progress class="progress" type="line" :percentage="50"></tiny-progress>
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
