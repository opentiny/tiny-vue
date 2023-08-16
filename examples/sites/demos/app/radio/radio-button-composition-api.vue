<template>
  <tiny-radio-group v-model="value" fill="#8ef0e3" text-color="black">
    <tiny-radio-button label="日度" name="name1"></tiny-radio-button>
    <tiny-radio-button label="月度"></tiny-radio-button>
    <tiny-radio-button label="年度"></tiny-radio-button>
  </tiny-radio-group>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { RadioButton as TinyRadioButton, RadioGroup as TinyRadioGroup } from '@opentiny/vue'

const value = ref('1')
</script>
