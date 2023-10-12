<template>
  <div>
    <p>左对齐：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" align="left"></tiny-date-picker>
    </div>

    <p>居中对齐：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" align="center"></tiny-date-picker>
    </div>

    <p>右对齐：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" align="right"></tiny-date-picker>
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
      value: ''
    }
  }
}
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 350px;
}
</style>
