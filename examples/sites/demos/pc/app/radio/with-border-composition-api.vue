<template>
  <div>
    <tiny-radio border v-model="value" label="1">日度</tiny-radio>
    <tiny-radio border v-model="value" label="2">月度</tiny-radio>
    <tiny-radio border v-model="value" label="3">年度</tiny-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Radio as TinyRadio } from '@opentiny/vue'

const value = ref('1')
</script>
