<template>
  <div class="content">
    <tiny-layout class="tiny-layout-offset">
      <tiny-row>
        <tiny-col :span="2">
          <div class="col">offset 0</div>
        </tiny-col>
        <tiny-col :span="2" :offset="1">
          <div class="col">offset 1</div>
        </tiny-col>
        <tiny-col :span="2" :offset="1">
          <div class="col">offset 3</div>
        </tiny-col>
        <tiny-col :span="2" :offset="1">
          <div class="col">offset 4</div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script setup lang="jsx">
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>

<style scoped>
.align {
  height: 120px;
}

.lg {
  height: 80px;
}

.md {
  height: 60px;
}

.sm {
  height: 40px;
}
</style>
