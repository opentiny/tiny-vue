<template>
  <tiny-amount v-model="value" @change="change" :date="date" placeholder="请输入值"></tiny-amount>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyAmount, TinyModal } from '@opentiny/vue'

const value = ref(88.88)
const date = ref(new Date())

function change(val) {
  TinyModal.message({
    message: `改变后的值：${JSON.stringify(val)}`,
    status: 'info'
  })
}
</script>
