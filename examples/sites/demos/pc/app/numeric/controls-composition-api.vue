<template>
  <div class="numeric-controls-demo">
    <p>1. 隐藏加减按钮</p>
    <tiny-numeric v-model="value1" :controls="controls"></tiny-numeric>
    <p>2. 加减按钮全置于右侧</p>
    <tiny-numeric v-model="value2" controls-position="right"></tiny-numeric>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const controls = ref(false)
const value1 = ref(1)
const value2 = ref(2)
</script>
