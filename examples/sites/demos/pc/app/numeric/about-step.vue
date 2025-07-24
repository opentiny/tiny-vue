<template>
  <div class="m-layout">
    <div class="m-b10">
      <div class="m-b10">1、step 用法</div>
      <tiny-numeric v-model="value" :step="step"></tiny-numeric>
      <br />
      <tiny-numeric v-model="restrictValue" :step="stepRestrictly"></tiny-numeric>
    </div>
    <div>
      <div class="m-b10">2、step-strictly 用法</div>
      <tiny-numeric v-model="valueStep" :step="step.value" step-strictly></tiny-numeric>
    </div>
  </div>
</template>

<script lang="ts">
import { TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 0,
      restrictValue: 0,
      valueStep: 0,
      step: {
        value: 5,
        mode: 'restore'
      },
      stepRestrictly: {
        value: 5,
        mode: 'strictly'
      }
    }
  }
}
</script>

<style scoped>
.m-layout {
  display: flex;
  flex-direction: column;
}
.m-b10 {
  margin-bottom: 10px;
}
</style>
