<template>
  <div>
    <p>日期值：{{ value }}</p>
    <tiny-date-picker v-model="value" type="daterange" :picker-options="onPickOptions"></tiny-date-picker>
  </div>
</template>

<script lang="jsx">
import { DatePicker, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value: [new Date(2023, 4, 15), new Date(2023, 4, 21)],
      onPickOptions: {
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
      }
    }
  }
}
</script>
