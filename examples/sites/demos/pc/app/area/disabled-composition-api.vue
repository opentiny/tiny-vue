<template>
  <div>
    <tiny-button @click="Switchover" style="margin-bottom: 10px">启用/禁用</tiny-button>
    <tiny-area v-model="area" placeholder="请选择" :disabled="disabled"></tiny-area>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Area as TinyArea, Button as TinyButton } from '@opentiny/vue'

const area = ref(['3623', '4199', '649991', '661414'])
const disabled = ref(false)

function Switchover() {
  disabled.value = !disabled.value
}
</script>
