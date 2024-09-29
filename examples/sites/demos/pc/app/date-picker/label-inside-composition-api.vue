<template>
  <div class="demo-date-picker-wrap">
    <tiny-date-picker v-model="dateValue" label="选择日期"></tiny-date-picker>
    <tiny-date-picker v-model="dateRangeValue" label="选择日期范围" type="daterange"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const dateValue = ref(new Date())
const dateRangeValue = ref([])
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;

  :deep(.tiny-date-editor--daterange.tiny-input__inner) {
    width: 360px;
  }
  :deep(.tiny-range__close-icon) {
    right: -4px;
  }

  & > * {
    margin-top: 12px;
  }
}
</style>
