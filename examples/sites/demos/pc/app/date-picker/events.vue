<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="4">
        <label class="demo-date-picker-label">focus：</label>
        <tiny-date-picker v-model="value" @focus="handleFocus"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label class="demo-date-picker-label">blur：</label>
        <tiny-date-picker v-model="value" @blur="handleBlur"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label class="demo-date-picker-label">change：</label>
        <tiny-date-picker v-model="value" @change="handleChange"></tiny-date-picker>
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
      value: ''
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
  margin-bottom: 12px;
}
</style>
