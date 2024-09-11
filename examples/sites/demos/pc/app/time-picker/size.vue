<template>
  <div>
    <tiny-radio-group v-model="radioValue" size="mini" class="demo-time-picker__switch-size">
      <tiny-radio-button label="medium"></tiny-radio-button>
      <tiny-radio-button label="small"></tiny-radio-button>
      <tiny-radio-button label="default"></tiny-radio-button>
      <tiny-radio-button label="mini"></tiny-radio-button>
    </tiny-radio-group>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value" :size="radioValue"></tiny-time-picker>
      <tiny-time-picker v-model="rangeValue" is-range :size="radioValue"></tiny-time-picker>
    </div>
  </div>
</template>

<script>
import { TimePicker, RadioGroup, RadioButton } from '@opentiny/vue'

export default {
  components: {
    TinyTimePicker: TimePicker,
    TinyRadioGroup: RadioGroup,
    TinyRadioButton: RadioButton
  },
  data() {
    const startTime = new Date(2016, 9, 10, 18, 40)
    const endTime = new Date(2016, 9, 10, 18, 50)

    return {
      value: new Date(2016, 9, 10, 18, 40),
      rangeValue: [startTime, endTime],
      radioValue: 'default'
    }
  }
}
</script>

<style scoped lang="less">
.demo-time-picker__switch-size {
  margin-bottom: 20px;
}

.demo-date-picker-wrap {
  width: 200px;

  & > * {
    margin-top: 12px;
  }
}
</style>
