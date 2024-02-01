<template>
  <tiny-layout class="tiny-layout-tag1">
    <tiny-row tag="span">
      <tiny-col :span="3">
        <div class="col">span（行标签已改为span）</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">span（行标签已改为span）</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">span（行标签已改为span）</div>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script>
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
.col {
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #1f9ed8;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
