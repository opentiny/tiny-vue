<template>
  <div>
    <tiny-numeric v-model="stepNum" :step="step" :min="0" :max="10" circulate></tiny-numeric>
    <br />
    <br />
    <tiny-numeric v-model="num1" disabled></tiny-numeric>
  </div>
</template>

<script lang="jsx">
import { TinyNumeric } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      num1: 1,
      step: 2,
      stepNum: 1
    }
  }
}
</script>
