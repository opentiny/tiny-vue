<template>
  <tiny-numeric v-model="value" @focus="Efocus" @blur="Eblur" @change="Echange"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyNumeric } from '@opentiny/vue-mobile'

const value = ref(1)

function Efocus() {
  console.log('focus事件')
}

function Eblur() {
  console.log('blur事件')
}

function Echange(newVal, oldVal) {
  console.log('新值：', newVal, '旧值', oldVal)
}
</script>
