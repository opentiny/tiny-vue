<template>
  <div>
    <div class="tiny-row">
      <tiny-checkbox-group v-model="checkboxGroup1">
        <tiny-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tiny-checkbox-button>
      </tiny-checkbox-group>
    </div>
    <div class="tiny-row">
      <tiny-checkbox-group v-model="checkboxGroup2" size="medium">
        <tiny-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tiny-checkbox-button>
      </tiny-checkbox-group>
    </div>
    <div class="tiny-row">
      <tiny-checkbox-group v-model="checkboxGroup3" size="small">
        <tiny-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{
          city
        }}</tiny-checkbox-button>
      </tiny-checkbox-group>
    </div>
    <div class="tiny-row">
      <tiny-checkbox-group v-model="checkboxGroup4" size="mini">
        <tiny-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tiny-checkbox-button>
      </tiny-checkbox-group>
    </div>
    <div>
      <tiny-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <tiny-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tiny-checkbox-button>
      </tiny-checkbox-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckboxButton as TinyCheckboxButton, CheckboxGroup as TinyCheckboxGroup } from '@opentiny/vue'

const cities = ref(['上海', '北京', '广州', '深圳'])
const checkboxGroup1 = ref(['上海'])
const checkboxGroup2 = ref(['上海'])
const checkboxGroup3 = ref(['上海'])
const checkboxGroup4 = ref(['上海'])
</script>

<style scoped>
.tiny-row {
  margin-bottom: 20px;
}
</style>
