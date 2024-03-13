<template>
  <tiny-transfer v-model="value" :data="data">
    <template #left-footer>
      <tiny-button class="transfer-footer" size="mini">操作</tiny-button>
    </template>
    <template #right-footer>
      <tiny-button class="transfer-footer" size="mini">操作</tiny-button>
    </template>
  </tiny-transfer>
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
</script>

<style scoped>
.transfer-footer {
  margin-left: 20px;
}
</style>
