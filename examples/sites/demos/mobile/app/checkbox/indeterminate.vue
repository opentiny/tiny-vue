<template>
  <div class="checkbox-wrap">
    <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @click="all">全选</tiny-checkbox>
    <tiny-checkbox-group v-model="checkboxGroup">
      <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">{{ city }}</tiny-checkbox>
    </tiny-checkbox-group>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { TinyCheckbox, TinyCheckboxGroup } from '@opentiny/vue-mobile'

const checkboxGroup = ref(['北京'])
const cities = ref(['上海', '北京', '广州', '深圳'])
const isIndeterminate = computed({
  get() {
    return !(checkboxGroup.value.length === 0 || checkboxGroup.value.length === cities.value.length)
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

function all() {
  checkAll.value = isIndeterminate.value
}
</script>

<style scoped>
.checkbox-wrap {
  padding: 20px;
}
</style>
