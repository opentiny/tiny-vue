<template>
  <div>
    <tiny-radio-group v-model="radioValue" size="mini" class="demo-date-picker__switch-size">
      <tiny-radio-button label="medium"></tiny-radio-button>
      <tiny-radio-button label="small"></tiny-radio-button>
      <tiny-radio-button label="default"></tiny-radio-button>
      <tiny-radio-button label="mini"></tiny-radio-button>
    </tiny-radio-group>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" :size="radioValue" placeholder="请选择日期"></tiny-date-picker>
      <tiny-date-picker
        v-model="dateTimeValue"
        type="datetime"
        :size="radioValue"
        placeholder="请选择日期"
      ></tiny-date-picker>
      <tiny-date-picker v-model="weekValue" type="week" :size="radioValue" placeholder="请选择周"></tiny-date-picker>
      <tiny-date-picker
        v-model="monthValue"
        type="month"
        :size="radioValue"
        placeholder="请选择月份"
      ></tiny-date-picker>
      <tiny-date-picker v-model="yearValue" type="year" :size="radioValue" placeholder="请选择年份"></tiny-date-picker>
      <tiny-date-picker
        v-model="rangeValue"
        type="daterange"
        :size="radioValue"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></tiny-date-picker>
    </div>
  </div>
</template>

<script>
import { DatePicker, RadioGroup, RadioButton } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker,
    TinyRadioGroup: RadioGroup,
    TinyRadioButton: RadioButton
  },
  data() {
    return {
      value: '',
      dateTimeValue: '',
      weekValue: '',
      monthValue: '',
      yearValue: '',
      rangeValue: '',
      radioValue: 'default'
    }
  }
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;

  :deep(.tiny-date-editor--daterange.tiny-input__inner) {
    width: 280px;
  }

  & > * {
    margin-top: 12px;
  }
}
</style>
