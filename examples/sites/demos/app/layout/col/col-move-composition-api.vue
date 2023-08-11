<template>
  <div class="content">
    <tiny-layout class="tiny-layout-col-move">
      <tiny-row>
        <tiny-col :span="2">
          <div class="col">move 0</div>
        </tiny-col>
        <tiny-col :span="2" :move="1">
          <div class="col">move 1</div>
        </tiny-col>
        <tiny-col :span="2" :move="4">
          <div class="col">向右移动4格</div>
        </tiny-col>
        <tiny-col :span="2" :move="-6">
          <div class="col">向左移动6格</div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script setup lang="jsx">
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>
