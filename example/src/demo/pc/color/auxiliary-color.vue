<template>
  <tiny-row>
    <tiny-col :span="2" class="tiny-color bg-success-normal"> bg-success-normal </tiny-col>
    <tiny-col :span="2" class="tiny-color bg-warning-normal"> bg-warning-normal </tiny-col>
    <tiny-col :span="2" class="tiny-color bg-error-normal"> bg-error-normal </tiny-col>
  </tiny-row>
</template>

<script>
import { Col, Row } from '@opentiny/vue'

export default {
  components: {
    TinyCol: Col,
    TinyRow: Row
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

.tiny-color.bg-success-normal {
  background-color: #52c41a;
}

.tiny-color.bg-warning-normal {
  background-color: #faad14;
}

.tiny-color.bg-error-normal {
  background-color: #f5222d;
}
</style>
