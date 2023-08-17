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

<script setup lang="jsx">
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>
