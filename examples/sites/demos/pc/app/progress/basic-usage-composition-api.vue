<template>
  <div>
    <div class="content">
      <tiny-progress class="progress" :percentage="50"></tiny-progress>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Progress as TinyProgress } from '@opentiny/vue'

const percentage = ref(20)
</script>

<style scoped>
.progress {
  margin-bottom: 20px;
}

.circle-progress {
  margin-right: 20px;
}
</style>
