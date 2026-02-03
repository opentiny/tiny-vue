<template>
  <div>
    <p>日期时间 (范围)，选择日期之后默认显示的时间 (范围)：</p>
    <div class="demo-date-picker-wrap" style="margin-left: 400px">
      <tiny-date-picker v-model="dateTimeValue" type="datetime" :default-time="defaultTime"></tiny-date-picker>
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
      dateTimeValue: '',
      defaultTime: '09:00:00'
    }
  }
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 360px;
  & > * {
    margin-top: 12px;
  }
}
</style>
