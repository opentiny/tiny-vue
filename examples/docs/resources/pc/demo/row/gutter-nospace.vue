<template>
  <tiny-layout>
    <!-- 如果 row 未设置 gutter，或者 row 设置 gutter 为 0，那么 col 左右内边距为 10px -->
    <tiny-row class="margin-bottom10">
      <tiny-col :span="3">
        <div class="col">no gutter</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">no gutter</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">no gutter</div>
      </tiny-col>
    </tiny-row>
    <tiny-row class="margin-bottom10" :gutter="0">
      <tiny-col :span="3">
        <div class="col">0 gutter</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">0 gutter</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">0 gutter</div>
      </tiny-col>
    </tiny-row>
    <!-- 如果 row 未设置 gutter，或者 row 设置 gutter 为 0，并且设置 row 属性 no-space，那么 col 左右内边距为 0 -->
    <tiny-row class="margin-bottom10" no-space>
      <tiny-col :span="3">
        <div class="col">no gutter no space</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">no gutter no space</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">no gutter no space</div>
      </tiny-col>
    </tiny-row>
    <tiny-row class="margin-bottom10" :gutter="0" no-space>
      <tiny-col :span="3">
        <div class="col">0 gutter no space</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">0 gutter no space</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">0 gutter no space</div>
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
