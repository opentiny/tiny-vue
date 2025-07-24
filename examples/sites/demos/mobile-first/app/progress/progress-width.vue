<template>
  <div>
    <tiny-progress class="progress" :text-inside="true" :stroke-width="lineWidth" :percentage="70"></tiny-progress>
  </div>
</template>

<script>
import { TinyProgress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress
  },
  data() {
    return {
      lineWidth: 26
    }
  }
}
</script>
