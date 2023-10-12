<template>
  <div>
    <tiny-numeric v-model="stepNum" size="medium"></tiny-numeric>
    <br /><br />
    <tiny-numeric v-model="stepNum" size="small"></tiny-numeric>
    <br /><br />
    <tiny-numeric v-model="stepNum" size="mini"></tiny-numeric>
  </div>
</template>

<script lang="jsx">
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      stepNum: 1
    }
  }
}
</script>
