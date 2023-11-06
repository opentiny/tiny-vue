<template>
  <div>
    <tiny-checkbox-group v-for="(size, index) in sizeList" :key="index" v-model="checkboxGroup" :size="size">
      <tiny-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tiny-checkbox-button>
    </tiny-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckboxButton as TinyCheckboxButton, CheckboxGroup as TinyCheckboxGroup } from '@opentiny/vue'
import { number } from 'echarts'

const cities = ref(['上海', '北京', '广州', '深圳'])
const sizeList = ref(['', 'medium', 'small', 'mini'])
const checkboxGroup = ref(['上海'])
</script>
