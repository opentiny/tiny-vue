<template>
  <div>
    <tiny-button style="margin-bottom: 20px" @click="clearQuery">重置查询</tiny-button>
    <tiny-transfer ref="transferRef" v-model="value" :data="data" filterable></tiny-transfer>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Transfer as TinyTransfer, Button as TinyButton } from '@opentiny/vue'

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
const transferRef = ref()

function clearQuery() {
  transferRef.value.clearQuery('left')
  transferRef.value.clearQuery('right')
}
</script>
