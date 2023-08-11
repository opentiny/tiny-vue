<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="6">
        <label>不可清除：</label>
        <tiny-date-picker v-model="value1" :clearable="false"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="6">
        <label>自定义清除图标：</label>
        <tiny-date-picker v-model="value2" :clear-icon="IconMinus"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script lang="jsx">
import { Layout, Row, Col, DatePicker } from '@opentiny/vue'
import { IconMinus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col,
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value1: new Date(),
      value2: new Date('2023-05-24'),
      IconMinus: IconMinus()
    }
  }
}
</script>
