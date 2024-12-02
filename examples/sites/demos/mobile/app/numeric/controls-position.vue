<template>
  <tiny-numeric v-model="stepNum" controls-position="right"></tiny-numeric>
</template>

<script lang="jsx">
import { TinyNumeric } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      controls: false,
      stepNum: 2
    }
  }
}
</script>
