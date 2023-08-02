<template>
  <div>
    <tiny-progress class="progress" :text-inside="true" :stroke-width="lineWidth" :percentage="70"></tiny-progress>
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
