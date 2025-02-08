<template>
  <div class="checkbox-group-wrap">
    <tiny-checkbox-group v-model="checkboxGroup">
      <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index" :disabled="city === '北京'">{{
        city
      }}</tiny-checkbox>
    </tiny-checkbox-group>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyCheckbox, TinyCheckboxGroup } from '@opentiny/vue-mobile'

const checkboxGroup = ref(['北京'])
const cities = ref(['上海', '北京', '广州', '深圳'])
</script>

<style scoped>
.checkbox-group-wrap {
  padding: 20px;
}
</style>
