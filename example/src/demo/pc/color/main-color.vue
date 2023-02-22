<template>
  <tiny-row>
    <tiny-col :span="2" class="tiny-color bg-primary-normal"> bg-primary-normal </tiny-col>
    <tiny-col :span="2" class="tiny-color bg-primary-hover"> bg-primary-hover </tiny-col>
    <tiny-col :span="2" class="tiny-color bg-primary-active"> bg-primary-active </tiny-col>
    <tiny-col :span="2" class="tiny-color bg-btn-active">bg-btn-active</tiny-col>
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

.tiny-color.bg-primary-normal {
  background-color: var(--ti-common-color-line-active);
}

.tiny-color.bg-primary-hover {
  background-color: #40a9ff;
}

.tiny-color.bg-primary-active {
  background-color: #096dd9;
}

.tiny-color.bg-btn-active {
  color: #333;
  background-color: #e6f7ff;
}
</style>
