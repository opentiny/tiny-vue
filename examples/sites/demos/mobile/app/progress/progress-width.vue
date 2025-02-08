<template>
  <div>
    <br />
    <tiny-progress class="progress" type="line" :stroke-width="lineWidth" :percentage="70"></tiny-progress>
    <br />
    <tiny-progress
      class="progress"
      type="circle"
      :stroke-width="lineWidth"
      :percentage="70"
      :width="90"
    ></tiny-progress>
    <br />
    <tiny-progress
      class="progress"
      type="dashboard"
      :stroke-width="lineWidth"
      :percentage="70"
      :width="90"
    ></tiny-progress>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyProgress } from '@opentiny/vue-mobile'

const lineWidth = ref(26)
</script>
