<template>
  <div class="content">
    <tiny-layout>
      <div class="title"></div>
      <tiny-row :gutter="20">
        <tiny-col :span="4">
          <div class="col">gutter 20px</div>
        </tiny-col>
        <tiny-col :span="4">
          <div class="col">gutter 20px</div>
        </tiny-col>
        <tiny-col :span="4">
          <div class="col">gutter 20px</div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script setup lang="jsx">
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>
