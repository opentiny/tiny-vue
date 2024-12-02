<template>
  <tiny-numeric v-model="stepNum" :step="step" :step-strictly="true"></tiny-numeric>
</template>

<script lang="jsx">
import { TinyNumeric } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      step: 2,
      stepNum: 1
    }
  }
}
</script>
