<template>
  <tiny-layout class="tiny-layout-gutter">
    <tiny-row class="margin-bottom10">
      <tiny-col :span="3" id="test">
        <div class="col">默认</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">默认</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">默认</div>
      </tiny-col>
    </tiny-row>
    <tiny-row :gutter="20" class="margin-bottom10">
      <tiny-col :span="3">
        <div class="col">20</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">20</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">20</div>
      </tiny-col>
    </tiny-row>
    <tiny-row :gutter="50" class="margin-bottom10">
      <tiny-col :span="3">
        <div class="col">50</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">50</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">50</div>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script setup>
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
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
