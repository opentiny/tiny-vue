<template>
  <div class="numeric-controls-demo">
    <p>隐藏加减按钮:</p>
    <tiny-numeric v-model="value1" :controls="controls" show-left class="numeric-class"></tiny-numeric>
    <p>加减按钮全置于右侧:</p>
    <tiny-numeric v-model="value2" controls-position="right" class="numeric-class"></tiny-numeric>
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
      controls: false,
      value1: 1,
      value2: 2
    }
  }
}
</script>

<style scoped>
.numeric-class {
  margin: 4px 0px;
}
</style>
