<template>
  <div>
    <p>日期值：{{ value }}</p>
    <tiny-date-picker v-model="value" type="daterange" :picker-options="onPickOptions"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker, Modal } from '@opentiny/vue'

const value = ref([new Date(2023, 4, 15), new Date(2023, 4, 21)])
const onPickOptions = ref({
  onPick: (val) => {
    if (val.maxDate) {
      Modal.message({
        message: '当前获取的值 maxDate' + val.maxDate,
        status: 'info'
      })
      Modal.message({
        message: '当前获取的值 minDate：' + val.minDate,
        status: 'info'
      })
    }
  }
})
</script>
