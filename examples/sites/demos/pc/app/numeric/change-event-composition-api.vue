<template>
  <div style="display: flex">
    <tiny-numeric :change-compat="false" v-model="value" @change="onChange"></tiny-numeric>
    <tiny-button @click="clickChange">修改</tiny-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric, Modal, Button as TinyButton } from '@opentiny/vue'

const value = ref(1)

const onChange = (newVal: number, oldVal: number) => {
  Modal.message({
    message: '新值：' + newVal + '，旧值：' + oldVal,
    status: 'info'
  })
}

const clickChange = () => {
  value.value = 22
}
</script>
