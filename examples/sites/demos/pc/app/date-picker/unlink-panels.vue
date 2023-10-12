<template>
  <div>
    <p>默认启用面板联动：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="daterange"></tiny-date-picker>
    </div>
  
    <p>关闭面板联动：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="daterange" unlink-panels></tiny-date-picker>
    </div>
  </div>
</template>

<script>
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value: []
    }
  }
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;
}
</style>
