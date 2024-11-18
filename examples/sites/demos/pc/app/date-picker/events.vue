<template>
  <tiny-layout>
    <tiny-row class="demo-row">
      <tiny-col :span="6">
        <label class="demo-date-picker-label">focus:</label>
        <tiny-date-picker v-model="valueFocus" @focus="handleFocus"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="6">
        <label class="demo-date-picker-label">blur:</label>
        <tiny-date-picker v-model="valueBlur" @blur="handleBlur"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="6">
        <label class="demo-date-picker-label">change:</label>
        <tiny-date-picker v-model="valueChange" @change="handleChange"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="6">
        <label class="demo-date-picker-label">onPick:</label>
        <tiny-date-picker v-model="valueOnPick" type="daterange" :picker-options="pickerOptions"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { TinyLayout, TinyRow, TinyCol, TinyDatePicker, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyLayout,
    TinyRow,
    TinyCol,
    TinyDatePicker
  },
  data() {
    return {
      valueFocus: '',
      valueBlur: '',
      valueChange: '',
      valueOnPick: '',
      pickerOptions: {
        onPick: ({ minDate, maxDate }) => {
          TinyModal.message({
            message: `触发 onPick 事件，开始日期为：${minDate}，结束日期为：${maxDate}`,
            status: 'info'
          })
        }
      }
    }
  },
  methods: {
    handleFocus() {
      TinyModal.message({ message: '触发 focus 事件', status: 'info' })
    },
    handleBlur() {
      TinyModal.message({ message: '触发 blur 事件', status: 'info' })
    },
    handleChange(value) {
      TinyModal.message({ message: '触发 change 事件，组件绑定值为：' + value, status: 'info' })
    }
  }
}
</script>

<style scoped>
.demo-row {
  width: 80%;
}
.demo-date-picker-label {
  display: inline-block;
  margin: 12px 0;
}
</style>
