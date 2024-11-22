<template>
  <div class="m-layout">
    <div class="m-b10">
      <div class="m-b10">1、step-restore 用法</div>
      <tiny-numeric v-model="value" :step="step" step-restore></tiny-numeric>
    </div>
    <div>
      <div class="m-b10">2、step-strictly 用法</div>
      <tiny-numeric v-model="valueStep" :step="step" step-strictly></tiny-numeric>
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
      valueStep: 0,
      step: 5
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
