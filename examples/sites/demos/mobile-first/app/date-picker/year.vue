<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="6">
        <div class="w-96">
          <span>年份单选：</span>
          <tiny-date-picker v-model="value1" type="year" placeholder="选择年份单选"></tiny-date-picker>
          值：{{ value1 }}
        </div>
      </tiny-col>
      <tiny-col :span="6">
        <div class="w-96">
          <span>年份多选：</span>
          <tiny-date-picker v-model="value2" type="years" placeholder="选择年份多选"></tiny-date-picker>
          值：{{ value2 }}
        </div>
      </tiny-col>
    </tiny-row>
    <br />
    <tiny-row>
      <tiny-col :span="6">
        <div class="w-96">
          <span>年份范围选择：</span>
          <tiny-date-picker v-model="value3" type="yearrange" placeholder="选择年份范围"></tiny-date-picker>
          值：{{ value3 }}
        </div>
      </tiny-col>
      <tiny-col :span="6">
        <div class="w-96">
          年份禁用：
          <tiny-date-picker v-model="value4" type="year" :picker-options="pickerOptions"></tiny-date-picker>
          值：{{ value4 }}
        </div>
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
      value1: '',
      value2: ['2021-01-01T16:00:00.000Z', '2000-01-01T16:00:00.000Z'],
      value3: '',
      value4: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      }
    }
  }
}
</script>
