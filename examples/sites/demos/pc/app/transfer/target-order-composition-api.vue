<template>
  <div style="margin-bottom: 12px">
    <span>右侧插入排序策略：</span>
    <tiny-radio v-for="order in ['original', 'push', 'unshift']" v-model="targetOrder" :label="order">
      {{ order }}
    </tiny-radio>
  </div>
  <tiny-transfer v-model="value" :data="data" :target-order="targetOrder"></tiny-transfer>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Transfer as TinyTransfer, Radio as TinyRadio } from '@opentiny/vue'

const generateData = () => {
  const data = []

  for (let i = 0; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${i}`,
      disabled: i % 4 === 0
    })
  }

  return data
}

const data = ref(generateData())
const value = ref([1, 4])
const targetOrder = ref('original')
</script>
