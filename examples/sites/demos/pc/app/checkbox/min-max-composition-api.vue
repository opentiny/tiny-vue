<template>
  <tiny-checkbox-group v-model="checkboxGroup" :min="1" :max="2">
    <tiny-checkbox v-for="city in cities" :label="city" :key="city">
      {{ city }}
    </tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox as TinyCheckbox, CheckboxGroup as TinyCheckboxGroup } from '@opentiny/vue'

const checkboxGroup = ref(['上海', '北京'])
const cities = ref(['上海', '北京', '广州', '深圳'])
</script>
