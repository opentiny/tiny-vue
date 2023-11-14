<template>
  <tiny-transfer
    ref="transferRef"
    v-model="value"
    :data="data"
    :left-default-checked="[0, 2, 6]"
    :right-default-checked="[1, 4]"
  ></tiny-transfer>
</template>

<script setup lang="jsx">
import { onMounted, ref } from 'vue'
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
const value = ref([1, 4, 7])
const transferRef = ref()

onMounted(() => {
  console.log(transferRef.value.state)
})
</script>
