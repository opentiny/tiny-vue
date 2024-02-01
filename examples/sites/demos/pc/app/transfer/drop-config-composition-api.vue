<template>
  <tiny-transfer v-model="value" :data="data" :drop-config="dropConfig"></tiny-transfer>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Transfer as TinyTransfer } from '@opentiny/vue'
import Sortable from 'sortablejs'

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
const value = ref([3, 8, 5, 6])
const dropConfig = ref({
  plugin: Sortable
})
</script>
