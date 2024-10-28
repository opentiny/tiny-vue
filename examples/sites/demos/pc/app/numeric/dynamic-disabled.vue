<template>
  <div class="f-r f-box-center">
    <span>全部禁用：</span>
    <tiny-numeric v-model="value1" :disabled="disabled" class="mr20"></tiny-numeric>
    <tiny-numeric v-model="value1" :disabled="disabled" unit="kg" class="mr20"></tiny-numeric>
    <tiny-numeric v-model="value1" :disabled="disabled" :controls="false" show-left class="mr20"></tiny-numeric>
    <tiny-numeric v-model="value1" :disabled="disabled" controls-position="right" class="mr20"></tiny-numeric>
    <span>部分禁用：</span>
    <tiny-numeric v-model="value2" :min="min" :max="max"></tiny-numeric>
  </div>
</template>

<script lang="ts">
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      value1: 1,
      value2: 0,
      disabled: true,
      min: 0,
      max: 10
    }
  }
}
</script>

<style scoped>
.mr20 {
  margin-right: 20px;
}
</style>
