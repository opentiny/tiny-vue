<template>
  <div>
    <p>左对齐：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" align="left"></tiny-date-picker>
    </div>
    <br />

    <p>居中对齐：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" align="center"></tiny-date-picker>
    </div>
    <br />

    <p>右对齐：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" align="right"></tiny-date-picker>
    </div>
  </div>
</template>

<script>
import { TinyDatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.demo-date-picker-wrap {
  /* 输入框收窄到 240px，比面板默认宽度 360px 窄，宽度差让 left/center/right 对齐效果清晰可见 */
  width: 240px;
}
</style>
