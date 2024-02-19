<template>
  <div>
    <p>步长：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="datetime" :step="step"></tiny-date-picker>
    </div>

    <p>箭头控制：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="datetime" time-arrow-control></tiny-date-picker>
    </div>

    <p>时间输入框不可编辑：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="datetime" :step="step" :time-editable="false"></tiny-date-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const step = ref({
  hour: 2,
  minute: 5
})
const value = ref('')
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 280px;
}
</style>
