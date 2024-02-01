<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="4">
        <label class="demo-date-picker-label">focus:</label>
        <tiny-date-picker v-model="valueFocus" @focus="handleFocus"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label class="demo-date-picker-label">blur:</label>
        <tiny-date-picker v-model="valueBlur" @blur="handleBlur"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label class="demo-date-picker-label">change:</label>
        <tiny-date-picker v-model="valueChange" @change="handleChange"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
    <tiny-row>
      <tiny-col :span="12">
        <label class="demo-date-picker-label">onPick:</label>
        <tiny-date-picker v-model="valueOnPick" type="daterange" :picker-options="pickerOptions"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { Layout, Row, Col, DatePicker, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col,
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      valueFocus: '',
      valueBlur: '',
      valueChange: '',
      valueOnPick: '',
      pickerOptions: {
        onPick: ({ minDate, maxDate }) => {
          Modal.message({ message: `触发 onPick 事件，开始日期为：${minDate}，结束日期为：${maxDate}`, status: 'info' })
        }
      }
    }
  },
  methods: {
    handleFocus() {
      Modal.message({ message: '触发 focus 事件', status: 'info' })
    },
    handleBlur() {
      Modal.message({ message: '触发 blur 事件', status: 'info' })
    },
    handleChange(value) {
      Modal.message({ message: '触发 change 事件，组件绑定值为：' + value, status: 'info' })
    }
  }
}
</script>

<style scoped>
.demo-date-picker-label {
  display: inline-block;
  margin: 12px 0;
}
</style>
