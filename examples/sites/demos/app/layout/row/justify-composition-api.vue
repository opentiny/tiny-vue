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

<script setup lang="jsx">
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>
