<template>
  <div class="demo-date-panel-wrap">
    <div>{{ value }}</div>
    <tiny-date-panel
      ref="datePanel"
      v-model="value"
      :format-weeks="formatWeeks"
      :show-week-number="true"
      :first-day-of-week="1"
    ></tiny-date-panel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel } from '@opentiny/vue'

const value = ref('')
const eachWeekFirstDay = ref([])
const formatWeeks = (customWeeks, weekFirstDays) => {
  eachWeekFirstDay.value = weekFirstDays
  return customWeeks + 'w'
}
</script>

<style scoped lang="less">
.demo-date-panel-wrap {
  width: 560px;
}
</style>
