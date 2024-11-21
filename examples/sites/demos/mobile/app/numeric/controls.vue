<template>
  <tiny-numeric v-model="stepNum" controls></tiny-numeric>
</template>

<script lang="jsx">
import { TinyNumeric } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      stepNum: 2
    }
  }
}
</script>
