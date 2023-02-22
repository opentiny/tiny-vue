<template>
  <div>
    <br />
    <br />
    <tiny-progress class="progress" type="line" :stroke-width="lineWidth" :percentage="70"></tiny-progress>
    <br />
    <br />
    <tiny-progress class="progress" type="circle" :stroke-width="lineWidth" :percentage="70"></tiny-progress>
    <tiny-progress class="progress" type="dashboard" :stroke-width="lineWidth" :percentage="70"></tiny-progress>
  </div>
</template>

<script>
import { Progress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress
  },

  data() {
    return {
      lineWidth: 26
    }
  }
}
</script>
