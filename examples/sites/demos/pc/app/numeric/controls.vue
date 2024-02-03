<template>
  <div class="numeric-controls-demo">
    <p>1. 隐藏加减按钮</p>
    <tiny-numeric v-model="value1" :controls="controls"></tiny-numeric>
    <p>2. 加减按钮全置于右侧</p>
    <tiny-numeric v-model="value2" controls-position="right"></tiny-numeric>
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
