<template>
  <div class="checkbox-group-wrap">
    <tiny-checkbox-group v-model="checkboxGroup" @change="handleChange">
      <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">{{ city }}</tiny-checkbox>
    </tiny-checkbox-group>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyCheckbox, TinyCheckboxGroup } from '@opentiny/vue-mobile'

const checkboxGroup = ref(['北京'])
const cities = ref(['上海', '北京', '广州', '深圳'])

function handleChange(val) {
  console.log('当前值为：' + val)
}
</script>

<style scoped>
.checkbox-group-wrap {
  padding: 20px;
}
</style>
