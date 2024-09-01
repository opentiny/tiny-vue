<template>
  <div>
    <tiny-radio v-model="value" label="1">选项一</tiny-radio>
    <tiny-radio v-model="value" label="2">选项二</tiny-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Radio as TinyRadio } from '@opentiny/vue'

const value = ref('1')
</script>
