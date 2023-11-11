<template>
  <div>
    <div>
      自定义背景：
      <tiny-switch v-model="isCustom"></tiny-switch>
    </div>
    <tiny-checkbox-group v-model="checked" :fill="isCustom ? '#409EFF' : ''">
      <tiny-checkbox-button label="复选框1"></tiny-checkbox-button>
      <tiny-checkbox-button label="复选框2"></tiny-checkbox-button>
    </tiny-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  CheckboxButton as TinyCheckboxButton,
  CheckboxGroup as TinyCheckboxGroup,
  Switch as TinySwitch
} from '@opentiny/vue'

const checked = ref(['复选框1'])
const isCustom = ref(false)
</script>
