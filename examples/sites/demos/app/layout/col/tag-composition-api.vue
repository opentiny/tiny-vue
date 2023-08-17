<template>
  <div>
    <div class="content">
      <tiny-layout class="tiny-layout-tag">
        <tiny-row>
          <tiny-col :span="3">
            <div class="col">div element</div>
          </tiny-col>
          <tiny-col :span="6" tag="span">
            <div class="col">span element of tag</div>
          </tiny-col>
          <tiny-col :span="3">
            <div class="col">div element</div>
          </tiny-col>
        </tiny-row>
      </tiny-layout>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>
