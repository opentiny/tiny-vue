<template>
  <div class="content">
    <div v-for="cols in [12, 24]" :key="cols">
      <div>每行 {{ cols }} 栅格布局示例：</div>
      <tiny-layout :cols="cols">
        <tiny-row>
          <tiny-col :span="12">
            <div class="col">span 12</div>
          </tiny-col>
        </tiny-row>
        <tiny-row>
          <tiny-col :span="3">
            <div class="col">span 3</div>
          </tiny-col>
          <tiny-col :span="6">
            <div class="col">span 6</div>
          </tiny-col>
          <tiny-col :span="3">
            <div class="col">span 3</div>
          </tiny-col>
        </tiny-row>
        <tiny-row>
          <tiny-col :span="2">
            <div class="col">span 2</div>
          </tiny-col>
          <tiny-col :span="3">
            <div class="col">span 3</div>
          </tiny-col>
          <tiny-col :span="2">
            <div class="col">span 2</div>
          </tiny-col>
          <tiny-col :span="3">
            <div class="col">span 3</div>
          </tiny-col>
          <tiny-col :span="2">
            <div class="col">span 2</div>
          </tiny-col>
        </tiny-row>
      </tiny-layout>
    </div>
  </div>
</template>

<script setup>
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>

<style scoped>
.content .tiny-row {
  margin: 20px 0;
}

.content .tiny-row .last-child {
  margin-bottom: 0;
}

.content .tiny-col .col {
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #1f9ed8;
  border-radius: 15px;
}

.content .tiny-col:nth-child(even) .col {
  background: #73d0fc;
}
</style>
