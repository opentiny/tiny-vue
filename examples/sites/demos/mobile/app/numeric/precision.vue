<template>
  <tiny-numeric v-model="stepNum" :precision="precision"></tiny-numeric>
</template>

<script lang="jsx">
import { TinyNumeric } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      stepNum: 1,
      precision: 2
    }
  }
}
</script>
