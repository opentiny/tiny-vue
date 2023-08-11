<template>
  <tiny-numeric v-model="stepNum" :controls="controls" :label="label" name="name"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const label = ref('关联文字')
const controls = ref(false)
const stepNum = ref(2)
</script>
