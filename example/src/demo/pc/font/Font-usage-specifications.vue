<template>
  <tiny-layout class="tiny-font">
    <tiny-row class="row-font-css font-38-css">
      <tiny-col :span="2">Regular</tiny-col>
      <tiny-col :span="10">我是字体ABCDEFGH123456789</tiny-col>
    </tiny-row>
    <tiny-row class="row-font-css font-30-css">
      <tiny-col :span="2">Regular</tiny-col>
      <tiny-col :span="10">我是字体ABCDEFGH123456789</tiny-col>
    </tiny-row>
    <tiny-row class="row-font-css font-24-css">
      <tiny-col :span="2">Regular</tiny-col>
      <tiny-col :span="10">我是字体ABCDEFGH123456789</tiny-col>
    </tiny-row>
    <tiny-row class="row-font-css font-20-css">
      <tiny-col :span="2">Regular</tiny-col>
      <tiny-col :span="10">我是字体ABCDEFGH123456789</tiny-col>
    </tiny-row>
    <tiny-row class="row-font-css font-16-css">
      <tiny-col :span="2">Regular</tiny-col>
      <tiny-col :span="10">我是字体ABCDEFGH123456789</tiny-col>
    </tiny-row>
    <tiny-row class="row-font-css font-14-css">
      <tiny-col :span="2">Regular</tiny-col>
      <tiny-col :span="10">我是字体ABCDEFGH123456789</tiny-col>
    </tiny-row>
    <tiny-row class="row-font-css font-12-css">
      <tiny-col :span="2">Regular</tiny-col>
      <tiny-col :span="10">我是字体ABCDEFGH123456789</tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { Col, Row, Layout } from '@opentiny/vue'

export default {
  components: {
    TinyCol: Col,
    TinyRow: Row,
    TinyLayout: Layout
  }
}
</script>

<style scoped>
.row-font-css {
  margin: 5px 0;
  display: block;
}

.font-38-css {
  font-size: 38px;
}

.font-30-css {
  font-size: 30px;
}

.font-24-css {
  font-size: 24px;
}

.font-20-css {
  font-size: 20px;
}

.font-16-css {
  font-size: 16px;
}

.font-14-css {
  font-size: 14px;
}

.font-12-css {
  font-size: 12px;
}
</style>
