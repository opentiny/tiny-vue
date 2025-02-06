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

<script>
import { TinyDatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker
  },
  data() {
    return {
      disabledValue: '2020/10/29',
      value: '',
      dateRangeValue: '',
      readonlyValue: '2020/10/29',
      editableValue: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() || time.getTime() < new Date('2023-08-15').getTime()
        }
      },
      yearPickerOptions: {
        disabledDate(year) {
          return (
            year.getTime() > new Date(2025, 0, 1, 0).getTime() || year.getTime() < new Date(2022, 0, 1, 0).getTime()
          )
        }
      }
    }
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
