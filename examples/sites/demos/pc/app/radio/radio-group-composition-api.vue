<template>
  <div>
    <tiny-radio-group v-model="value1">
      <tiny-radio label="1">备选项1</tiny-radio>
      <tiny-radio label="2">备选项2</tiny-radio>
      <tiny-radio label="3">备选项3</tiny-radio>
    </tiny-radio-group>
    <div style="margin-top: 20px">
      <tiny-radio-group v-model="value2">
        <tiny-radio-button label="1">备选项1</tiny-radio-button>
        <tiny-radio-button label="2">备选项2</tiny-radio-button>
        <tiny-radio-button label="3">备选项3</tiny-radio-button>
      </tiny-radio-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Radio as TinyRadio, RadioGroup as TinyRadioGroup, RadioButton as TinyRadioButton } from '@opentiny/vue'

const value1 = ref('1')
const value2 = ref('1')
</script>
