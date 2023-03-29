<template>
  <div>
    <div class="content">
      <tiny-progress class="progress" :percentage="50"></tiny-progress>
    </div>
  </div>
</template>

<script lang="jsx">
import { Progress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress
  },
  data() {
    return {
      percentage: 20
    }
  }
}
</script>

<style scoped>
.progress {
  margin-bottom: 20px;
}

.circle-progress {
  margin-right: 20px;
}
</style>
