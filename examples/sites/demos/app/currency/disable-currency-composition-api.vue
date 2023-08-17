<template>
  <div>
    <tiny-button @click="Switchover" style="margin-bottom: 10px">启用/禁用</tiny-button>
    <br />
    <tiny-currency v-model="value" placeholder="请选择" @change="change" :disabled="disabled"></tiny-currency>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Currency as TinyCurrency, Button as TinyButton, Modal } from '@opentiny/vue'

const value = ref('VUV')
const disabled = ref(false)

function change(val) {
  Modal.message({ message: '当前选择值：' + val, status: 'info' })
}

function Switchover() {
  disabled.value = !disabled.value
}
</script>
