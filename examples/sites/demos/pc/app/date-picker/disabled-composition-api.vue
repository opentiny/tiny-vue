<template>
  <div>
    <p>整体禁用：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="disabledValue" disabled placeholder="请选择日期"></tiny-date-picker>
    </div>

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

    <p>只读模式：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="readonlyValue" readonly placeholder="请选择日期"></tiny-date-picker>
    </div>

    <p>文本框不可输入：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="editableValue" :editable="false"></tiny-date-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

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
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;

  & > * {
    margin-top: 12px;
  }
}
</style>
