<template>
  <tiny-layout class="tiny-layout-order">
    <tiny-row :flex="true" order="asc" class="margin-bottom10">
      <tiny-col :span="3" :no="3">
        <div class="col">3 asc</div>
      </tiny-col>
      <tiny-col :span="3" :no="1">
        <div class="col">1 asc</div>
      </tiny-col>
      <tiny-col :span="3" :no="2">
        <div class="col">2 asc</div>
      </tiny-col>
      <tiny-col :span="3" :no="4">
        <div class="col">4 asc</div>
      </tiny-col>
    </tiny-row>
    <tiny-row :flex="true" order="des" class="margin-bottom10">
      <tiny-col :span="3" :no="1">
        <div class="col">1 des</div>
      </tiny-col>
      <tiny-col :span="3" :no="2">
        <div class="col">2 des</div>
      </tiny-col>
      <tiny-col :span="3" :no="4">
        <div class="col">4 des</div>
      </tiny-col>
      <tiny-col :span="3" :no="3">
        <div class="col">3 des</div>
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
