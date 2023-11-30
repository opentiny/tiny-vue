<template>
  <tiny-radio-group v-model="value" fill="#fa9841" text-color="#fff">
    <tiny-radio-button label="1">日度</tiny-radio-button>
    <tiny-radio-button label="2">月度</tiny-radio-button>
    <tiny-radio-button label="3">年度</tiny-radio-button>
  </tiny-radio-group>
</template>

<script setup>
import { ref } from 'vue'
import { RadioButton as TinyRadioButton, RadioGroup as TinyRadioGroup } from '@opentiny/vue'

const value = ref('1')
</script>
