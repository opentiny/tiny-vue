<template>
  <div>
    <p>整体禁用：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="disabledValue" disabled placeholder="请选择日期"></tiny-date-picker>
    </div>
    <br />
    <p>年禁用：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker
        v-model="value"
        type="year"
        :picker-options="yearPickerOptions"
        placeholder="请选择年"
      ></tiny-date-picker>
    </div>
    <br />
    <p>部分禁用：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" :picker-options="pickerOptions" placeholder="请选择日期"></tiny-date-picker>
    </div>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker
        v-model="dateRangeValue"
        type="daterange"
        :picker-options="pickerOptions"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></tiny-date-picker>
    </div>
    <br />
    <p>只读模式：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="readonlyValue" readonly placeholder="请选择日期"></tiny-date-picker>
    </div>
    <br />
    <p>文本框不可输入：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="editableValue" :editable="false"></tiny-date-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePicker } from '@opentiny/vue'

const disabledValue = ref('2020/10/29')
const value = ref('')
const dateRangeValue = ref('')
const readonlyValue = ref('2020/10/29')
const editableValue = ref('')

const pickerOptions = {
  disabledDate(time) {
    return time.getTime() > Date.now() || time.getTime() < new Date('2023-08-01').getTime()
  }
}
const yearPickerOptions = {
  disabledDate(year) {
    return year.getTime() > new Date(2025, 0, 1, 0).getTime() || year.getTime() < new Date(2022, 0, 1, 0).getTime()
  }
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 360px;
  & > * {
    margin-top: 12px;
  }
}
</style>
