<template>
  <div class="switch-demo">
    <div class="demo-item">
      <p>开关1：只显示文字</p>
      <br />
      <tiny-switch v-model="val1" display-only></tiny-switch>
      <br />
      <br />
      <p>开关2：可交互，设置val1的值</p>
      <br />
      <tiny-switch v-model="val1"></tiny-switch>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinySwitch } from '@opentiny/vue'

const val1 = ref(true)
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
