<template>
  <div class="numeric-controls-demo">
    <p>隐藏加减按钮:</p>
    <tiny-numeric v-model="value1" :controls="controls" show-left class="numeric-class"></tiny-numeric>
    <p>加减按钮全置于右侧:</p>
    <tiny-numeric v-model="value2" controls-position="right" class="numeric-class"></tiny-numeric>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const controls = ref(false)
const value1 = ref(1)
const value2 = ref(2)
</script>

<style scoped>
.numeric-class {
  margin: 4px 0px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
