<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="4">
        <label>blur：</label>
        <tiny-date-picker v-model="value" @blur="handleBlur"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label>change：</label>
        <tiny-date-picker v-model="value" @change="handleChange"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label>focus：</label>
        <tiny-date-picker v-model="value" @focus="handleFocus"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script lang="jsx">
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
    handleBlur() {
      Modal.message({ message: '可获取组件实例', status: 'info' })
    },
    handleChange(value) {
      Modal.message({ message: '组件绑定值为：' + value, status: 'info' })
    },
    handleFocus() {
      Modal.message({ message: '回调参数为组件实例', status: 'info' })
    }
  }
}
</script>
