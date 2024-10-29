<template>
  <div>
    <p>日期值：{{ value }}</p>
    <tiny-date-picker v-model="value" type="daterange" :picker-options="onPickOptions"></tiny-date-picker>
  </div>
</template>

<script>
import { TinyDatePicker, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker
  },
  data() {
    return {
      value: [new Date(2022, 10, 12), new Date(2022, 11, 25)],
      onPickOptions: {
        onPick: (val) => {
          if (val.maxDate) {
            TinyModal.message({
              message: '当前获取的值 maxDate' + val.maxDate,
              status: 'info'
            })
            TinyModal.message({
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
