<template>
  <div class="demo-date-picker-wrap">
    <tiny-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      range-separator="至"
    ></tiny-date-picker>
    <tiny-date-picker
      v-model="dateTimeValue"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      range-separator="至"
    ></tiny-date-picker>
    <tiny-date-picker
      v-model="monthValue"
      type="monthrange"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
      range-separator="至"
    ></tiny-date-picker>
    <tiny-date-picker
      v-model="yearValue"
      type="yearrange"
      start-placeholder="开始年份"
      end-placeholder="结束年份"
      range-separator="至"
    ></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
const dateTimeValue = ref('')
const monthValue = ref('')
const yearValue = ref('')
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 350px;

  & > * {
    margin-top: 12px;
  }
}
</style>
