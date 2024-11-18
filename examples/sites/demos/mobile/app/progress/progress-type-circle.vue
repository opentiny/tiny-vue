<template>
  <tiny-progress class="circle-progress" type="circle" :percentage="50" status="exception"></tiny-progress>
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
.circle-progress {
  margin-right: 20px;
}
</style>
