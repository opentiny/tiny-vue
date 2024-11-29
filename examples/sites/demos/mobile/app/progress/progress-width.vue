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

<script lang="jsx">
import { TinyProgress } from '@opentiny/vue-mobile'

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
