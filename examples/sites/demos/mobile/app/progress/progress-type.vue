<template>
  <tiny-progress class="progress" type="line" :percentage="50"></tiny-progress>
</template>

<script lang="jsx">
import { TinyProgress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress
  }
}
</script>

<style scoped>
.progress {
  margin-bottom: 20px;
}
</style>
