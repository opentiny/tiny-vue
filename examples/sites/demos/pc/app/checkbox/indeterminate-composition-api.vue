<template>
  <div>
    <div style="margin: 16px 0">全部禁用 <tiny-switch v-model="isDisabled"></tiny-switch></div>
    <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll" :disabled="isDisabled"> 全选 </tiny-checkbox>
    <div style="margin: 16px 0"></div>
    <tiny-checkbox-group v-model="checkboxGroup" :disabled="isDisabled">
      <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">
        {{ city }}
      </tiny-checkbox>
    </tiny-checkbox-group>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Checkbox as TinyCheckbox, CheckboxGroup as TinyCheckboxGroup, Switch as TinySwitch } from '@opentiny/vue'

const isDisabled = ref(false)
const checkboxGroup = ref(['北京'])
const cities = ref(['上海', '北京', '广州', '深圳'])
const isIndeterminate = computed({
  get() {
    return checkboxGroup.value.length > 0 && checkboxGroup.value.length !== cities.value.length
  }
})
const checkAll = computed({
  get() {
    return checkboxGroup.value.length === cities.value.length
  },
  set(val) {
    if (val) {
      checkboxGroup.value = [...cities.value]
    } else {
      checkboxGroup.value = []
    }
  }
})
</script>
