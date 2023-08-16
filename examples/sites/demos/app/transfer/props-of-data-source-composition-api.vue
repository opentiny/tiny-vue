<template>
  <tiny-transfer v-model="value" :data="data" :props="{ key: 'value', label: 'desc' }"></tiny-transfer>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Transfer as TinyTransfer } from '@opentiny/vue'

const generateData = () => {
  const data = []

  for (let i = 1; i <= 15; i++) {
    data.push({
      value: i,
      desc: `备选项 ${i}`,
      disabled: i % 4 === 0
    })
  }

  return data
}

const data = ref(generateData())
const value = ref([1, 4])
</script>
