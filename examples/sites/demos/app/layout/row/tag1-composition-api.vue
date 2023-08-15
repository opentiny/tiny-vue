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

<script setup lang="jsx">
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>
