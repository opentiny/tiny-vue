<template>
  <div>
    <p>时间输入框中显示的格式：</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value" format="hh:mm:ss a"></tiny-time-picker>
      <tiny-time-picker v-model="value" format="HH:mm:ss a"></tiny-time-picker>

      <tiny-time-picker v-model="value" format="h:m:s A"></tiny-time-picker>
      <tiny-time-picker v-model="value" format="H:m:s A"></tiny-time-picker>
    </div>

    <p>选中值的格式：</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker
        v-model="selectedValue"
        value-format="timestamp"
      ></tiny-time-picker>
    </div>
    <span class="select-time">当前选中时间：{{ selectedValue }}</span>

    <p>下拉框中显示的格式：</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker
        v-model="pickerValue"
        :picker-options="{
          format: 'HH:mm'
        }"
      ></tiny-time-picker>
    </div>
  </div>
</template>

<script>
import { TimePicker } from '@opentiny/vue'

export default {
  components: {
    TinyTimePicker: TimePicker
  },
  data() {
    const value = new Date(2016, 9, 10, 18, 40)
    const selectedValue = Number(new Date(2016, 9, 10, 18, 30))
    const pickerValue = new Date(2016, 9, 10, 18, 40)

    return {
      value,
      selectedValue,
      pickerValue
    }
  }
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 182px;

  & > * {
    margin-top: 12px;
  }
}

.select-time {
  display: inline-block;
  margin-top: 12px;
}
</style>
