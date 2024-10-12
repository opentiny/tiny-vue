<template>
  <div class="demo-checkbox-vertical">
    <div>
      <tiny-checkbox-group v-model="checkboxGroup" vertical>
        <tiny-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tiny-checkbox-button>
      </tiny-checkbox-group>
    </div>
    <div>
      <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll"> 全选 </tiny-checkbox>
      <br /><br />
      <tiny-checkbox-group v-model="checkboxGroup" vertical>
        <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">
          {{ city }}
        </tiny-checkbox>
      </tiny-checkbox-group>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CheckboxGroup as TinyCheckboxGroup,
  CheckboxButton as TinyCheckboxButton,
  Checkbox as TinyCheckbox
} from '@opentiny/vue'

const checkboxGroup = ref(['上海'])
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

<style scoped>
.demo-checkbox-vertical {
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-between;
}
</style>
