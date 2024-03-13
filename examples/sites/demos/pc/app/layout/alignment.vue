<template>
  <div class="content">
    <tiny-layout>
      <tiny-row :flex="true" class="row-bg">
        <tiny-col :span="3">
          <div class="col">justify start</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">justify start</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">justify start</div>
        </tiny-col>
      </tiny-row>
      <tiny-row :flex="true" class="row-bg" justify="center">
        <tiny-col :span="3">
          <div class="col">justify center</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">justify center</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">justify center</div>
        </tiny-col>
      </tiny-row>
      <tiny-row :flex="true" class="row-bg" justify="end">
        <tiny-col :span="3">
          <div class="col">justify end</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">justify end</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">justify end</div>
        </tiny-col>
      </tiny-row>
      <tiny-row :flex="true" class="row-bg" justify="space-between">
        <tiny-col :span="3">
          <div class="col">justify space-between</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">justify space-between</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">justify space-between</div>
        </tiny-col>
      </tiny-row>
      <tiny-row :flex="true" class="row-bg" justify="space-around">
        <tiny-col :span="3">
          <div class="col">justify space-around</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">justify space-around</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">justify space-around</div>
        </tiny-col>
      </tiny-row>
      <tiny-row :flex="true" class="row-bg align" justify="center" align="top">
        <tiny-col :span="3">
          <div class="col lg">align top</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col md">align top</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col sm">align top</div>
        </tiny-col>
      </tiny-row>
      <tiny-row :flex="true" class="row-bg align" justify="center" align="middle">
        <tiny-col :span="3">
          <div class="col lg">align middle</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col md">align middle</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col sm">align middle</div>
        </tiny-col>
      </tiny-row>
      <tiny-row :flex="true" class="row-bg align" justify="center" align="bottom">
        <tiny-col :span="3">
          <div class="col lg">align bottom</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col md">align bottom</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col sm">align bottom</div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
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
.tiny-row {
  margin-bottom: 20px;
}

.tiny-row .last-child {
  margin-bottom: 0;
}

.tiny-col .col {
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #1f9ed8;
  border-radius: 15px;
}

.tiny-col:nth-child(even) .col {
  background: #73d0fc;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.align {
  height: 120px;
}

.lg {
  height: 80px;
}

.md {
  height: 60px;
}

.sm {
  height: 40px;
}
</style>
