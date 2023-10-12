<template>
  <tiny-layout class="tiny-layout-align">
    <tiny-row :flex="true" class="margin-bottom10">
      <tiny-col :span="3">
        <div class="col lg">默认</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col md">默认</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col sm">默认</div>
      </tiny-col>
    </tiny-row>
    <tiny-row :flex="true" align="middle" class="margin-bottom10">
      <tiny-col :span="3">
        <div class="col lg">middle</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col md">middle</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col sm">middle</div>
      </tiny-col>
    </tiny-row>
    <tiny-row :flex="true" align="bottom" class="margin-bottom10">
      <tiny-col :span="3">
        <div class="col lg">bottom</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col md">bottom</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col sm">bottom</div>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script lang="jsx">
import { Layout, Row, Col } from '@opentiny/vue'

export default {
  components: {
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col
  }
}
</script>

<style scoped>
.margin-bottom10 {
  margin-bottom: 10px;
}

.col {
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #1f9ed8;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.lg {
  height: 120px;
}

.md {
  height: 80px;
}

.sm {
  height: 40px;
}
</style>
