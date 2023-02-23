<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="2" class="tiny-color bg-gray-navigation"> bg-gray-navigation </tiny-col>
      <tiny-col :span="2" class="tiny-color bg-gray-darker"> bg-gray-darker </tiny-col>
      <tiny-col :span="2" class="tiny-color bg-gray-dark">bg-gray-dark</tiny-col>
      <tiny-col :span="2" class="tiny-color bg-gray-normal"> bg-gray-normal </tiny-col>
    </tiny-row>
    <tiny-row>
      <tiny-col :span="2" class="tiny-color bg-gray-light">bg-gray-light</tiny-col>
      <tiny-col :span="2" class="tiny-color bg-gray-lighter"> bg-gray-lighter </tiny-col>
      <tiny-col :span="2" class="tiny-color bg-gray-background"> bg-gray-background </tiny-col>
      <tiny-col :span="2" class="tiny-color bg-light">bg-light</tiny-col>
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
.tiny-row {
  margin-bottom: 40px;
}

.tiny-color {
  height: 80px;
  margin: 10px;
  line-height: 80px;
  color: #fff;
  text-align: center;
  min-width: 175px;
  font-size: 14px;
  display: inline-block;
}

.tiny-color.bg-gray-navigation {
  background-color: #2e3243;
}

.tiny-color.bg-gray-darker {
  background-color: #333333;
}

.tiny-color.bg-gray-dark {
  background-color: #666666;
}

.tiny-color.bg-gray-normal {
  background-color: #999999;
}

.tiny-color.bg-gray-light {
  background-color: #bfbfbf;
  color: #333;
}

.tiny-color.bg-gray-lighter {
  background-color: #d9d9d9;
  color: #333;
}

.tiny-color.bg-gray-background {
  background-color: #f1f1f1;
  color: #333;
}

.tiny-color.bg-light {
  background-color: #ffffff;
  color: #333;
  border: solid 1px #ccc;
}
</style>
