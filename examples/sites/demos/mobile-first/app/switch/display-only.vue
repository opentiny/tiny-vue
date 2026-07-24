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

<script>
import { TinySwitch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch
  },
  data() {
    return {
      val1: true
    }
  }
}
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
