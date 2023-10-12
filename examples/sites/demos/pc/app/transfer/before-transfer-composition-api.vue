<template>
  <tiny-transfer v-model="value" :data="data" :before-transfer="beforeTransfer"></tiny-transfer>
</template>

<script setup>
import { ref } from 'vue'
import { Transfer as TinyTransfer, Modal } from '@opentiny/vue'

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

function beforeTransfer(done) {
  Modal.message('穿梭功能已被拦截，必须调用 done 方法才能执行穿梭，2s后将自动调用 done 方法执行穿梭')
  setTimeout(done, 2000)
}
</script>
