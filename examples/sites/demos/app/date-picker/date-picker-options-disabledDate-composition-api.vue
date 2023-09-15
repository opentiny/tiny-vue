<template>
  <tiny-form :inline="true" label-suffix="：">
    <tiny-form-item label="最大值">
      {{ max }}
      <tiny-date-picker v-model="max" :picker-options="maxOptions"></tiny-date-picker>
    </tiny-form-item>
    <tiny-form-item label="最小值">
      <tiny-date-picker v-model="min" :picker-options="minOptions"></tiny-date-picker>
    </tiny-form-item>
  </tiny-form>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker, Form as TinyForm, FormItem as TinyFormItem } from '@opentiny/vue'

const max = ref(new Date())
const min = ref(new Date())
const maxOptions = ref({
  disabledDate(time) {
    return time.getTime() > Date.now()
  }
})
const minOptions = ref({
  disabledDate(time) {
    return time.getTime() < Date.now()
  }
})
</script>
