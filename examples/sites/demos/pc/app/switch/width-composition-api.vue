<template>
  <div class="switch-demo">
    <div class="demo-item">
      <div class="demo-title">number类型</div>
      <tiny-switch :width="150"></tiny-switch>
    </div>

    <div class="demo-item">
      <div class="demo-title">string类型</div>
      <tiny-switch width="150PX"></tiny-switch>
    </div>
  </div>
</template>

<script setup>
import { TinySwitch } from '@opentiny/vue'
</script>

<style scoped>
.demo-item {
  padding: 15px;
}

.demo-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
}
</style>
