<template>
  <tiny-layout class="tiny-layout-justify">
    <tiny-row :flex="true" class="margin-bottom10">
      <tiny-col :span="3">
        <div class="col">默认</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">默认</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">默认</div>
      </tiny-col>
    </tiny-row>
    <tiny-row :flex="true" justify="end" class="margin-bottom10">
      <tiny-col :span="3">
        <div class="col">end</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">end</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">end</div>
      </tiny-col>
    </tiny-row>
    <tiny-row :flex="true" justify="center" class="margin-bottom10">
      <tiny-col :span="3">
        <div class="col">center</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">center</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">center</div>
      </tiny-col>
    </tiny-row>
    <tiny-row :flex="true" justify="space-around" class="margin-bottom10">
      <tiny-col :span="3">
        <div class="col">space-around</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">space-around</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">space-around</div>
      </tiny-col>
    </tiny-row>
    <tiny-row :flex="true" justify="space-between" class="margin-bottom10">
      <tiny-col :span="3">
        <div class="col">space-between</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">space-between</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">space-between</div>
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
</style>