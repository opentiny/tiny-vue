<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="4">
        <label>medium：</label>
        <tiny-date-picker v-model="value" size="medium"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label>small：</label>
        <tiny-date-picker v-model="value" size="small"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label>mini：</label>
        <tiny-date-picker v-model="value" size="mini"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script>
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
