<template>
  <div>
    <tiny-radio-group v-model="value" vertical>
      <tiny-radio label="1">备选项1</tiny-radio>
      <tiny-radio label="2">备选项2</tiny-radio>
      <tiny-radio label="3">备选项3</tiny-radio>
    </tiny-radio-group>
    <tiny-radio-group v-model="value" vertical style="margin-left: 20px">
      <tiny-radio-button label="1">备选项1</tiny-radio-button>
      <tiny-radio-button label="2">备选项2</tiny-radio-button>
      <tiny-radio-button label="3">备选项3</tiny-radio-button>
    </tiny-radio-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Radio as TinyRadio, RadioGroup as TinyRadioGroup, RadioButton as TinyRadioButton } from '@opentiny/vue'

const value = ref('1')
</script>
