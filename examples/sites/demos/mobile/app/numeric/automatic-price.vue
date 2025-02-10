<template>
  <div>
    <div class="content">
      <span>数量：</span>
      <tiny-numeric v-model="value" :min="0"> </tiny-numeric>
    </div>
    <div>单价：{{ price }}/斤</div>
    <div v-show="value ^ 0">总价：{{ price * value }}元</div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyNumeric } from '@opentiny/vue-mobile'

const size = ref('small')
const value = ref(0)
const tatolPrice = ref(0)
const price = ref(10)
</script>
