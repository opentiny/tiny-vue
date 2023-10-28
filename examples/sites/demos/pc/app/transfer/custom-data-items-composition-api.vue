<template>
  <tiny-transfer ref="transferRef" v-model="value" :data="data">
    <template #default="optionData">
      <div>
        <span :text="JSON.stringify(optionData.option)"
          >{{ optionData.option.key }} - {{ optionData.option.label }} - customized</span
        >
      </div>
    </template>
  </tiny-transfer>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Transfer as TinyTransfer } from '@opentiny/vue'

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
</script>
