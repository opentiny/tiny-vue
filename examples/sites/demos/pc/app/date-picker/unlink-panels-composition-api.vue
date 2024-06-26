<template>
  <div>
    <p>默认启用面板联动：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="daterange"></tiny-date-picker>
    </div>
    <br />

    <p>关闭面板联动：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="daterange" unlink-panels></tiny-date-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref([])
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;
}
</style>
