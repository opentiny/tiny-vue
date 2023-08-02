<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="4">
        <p>value-format 默认为 Date 对象</p>
        <p>值：{{ value1 }}</p>
        <tiny-date-picker v-model="value1" format="yyyy 年 MM 月 dd 日"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <p>value-format 为 timestamp 时间戳</p>
        <p>值：{{ value2 }}</p>
        <tiny-date-picker v-model="value2" format="yyyy 年 M 月 d 日 H 时 m 分钟 s 秒 A" value-format="timestamp"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <p>value-format 为 yyyy-MM-dd 格式</p>
        <p>值：{{ value3 }}</p>
        <tiny-date-picker v-model="value3" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script lang="jsx">
import { DatePicker, Layout, Row, Col } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker,
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col
  },
  data() {
    return {
      value1: new Date('2023-05-24'),
      value2: 1590076800000,
      value3: '2020-05-22'
    }
  }
}
</script>
