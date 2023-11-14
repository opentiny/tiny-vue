<template>
  <tiny-transfer
    v-model="value"
    :data="data"
    :titles="['所有数据列表', '已选数据列表']"
    :format="{
      noChecked: '未勾选 / 共${total}',
      hasChecked: '已选择${checked} / 共${total}'
    }"
  ></tiny-transfer>
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
