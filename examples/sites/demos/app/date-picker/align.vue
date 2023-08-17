<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="6">
        <label>左对齐：</label>
        <tiny-date-picker v-model="value" align="left"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="6">
        <label>右对齐：</label>
        <tiny-date-picker v-model="value" align="right"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="6">
        <label>居中对齐：</label>
        <tiny-date-picker v-model="value" align="center"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script lang="jsx">
import { Layout, Row, Col, DatePicker } from '@opentiny/vue'

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
  }
}
</script>
