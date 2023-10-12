<template>
  <div>
    <div class="content">
      <tiny-layout>
        <tiny-row>
          <tiny-col :span="12">
            <div class="col">span 12</div>
          </tiny-col>
        </tiny-row>
        <br />
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
        <br />
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

<script setup lang="jsx">
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>
