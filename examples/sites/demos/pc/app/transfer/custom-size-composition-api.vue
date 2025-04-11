<template>
  <tiny-transfer
    v-model="value"
    :data="data"
    :panelStyle="{ width: '650px' }"
    :panelBodyStyle="{ height: '800px' }"
  ></tiny-transfer>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyTransfer } from '@opentiny/vue'

const generateData = () => {
  const data = []

  for (let i = 0; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${i}`
    })
  }

  return data
}

const data = ref(generateData())
const value = ref([1, 4])
</script>
