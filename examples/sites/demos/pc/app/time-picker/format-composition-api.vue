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
      <tiny-time-picker v-model="selectedValue" value-format="timestamp"></tiny-time-picker>
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

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const value = ref(new Date(2016, 9, 10, 18, 40))
const selectedValue = ref(Number(new Date(2016, 9, 10, 18, 30)))
const pickerValue = ref(new Date(2016, 9, 10, 18, 40))
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 200px;

  & > * {
    margin-top: 12px;
  }
}

.select-time {
  display: inline-block;
  margin-top: 12px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding-top: 16px;
}
</style>
