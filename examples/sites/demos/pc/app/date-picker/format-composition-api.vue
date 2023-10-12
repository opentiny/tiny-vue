<template>
  <div>
    <p>日期输入框中显示的格式：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" format="yyyy 年 MM 月 dd 日"></tiny-date-picker>
    </div>

    <p>时间输入框中显示的格式：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="datetime" format="yyyy 年 MM 月 dd 日 HH 时 mm 分 ss 秒" time-format="HH 时 mm 分 ss 秒"></tiny-date-picker>
    </div>
  
    <p>选中值的格式：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="selectedValue" value-format="timestamp"></tiny-date-picker>
    </div>
    <p class="select-date">当前选中时间：{{ selectedValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref(new Date('2023-05-24'))
const selectedValue = ref(1590076800000)
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;

  & > * {
    margin-top: 12px;
  }
}

.select-date {
  display: inline-block;
  margin-top: 12px;
}
</style>
