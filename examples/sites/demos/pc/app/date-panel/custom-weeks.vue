<template>
  <div class="demo-date-panel-wrap">
    <div class="value">{{ value }}</div>
    <tiny-date-panel
      v-model="value"
      :format-weeks="formatWeeks"
      :show-week-number="true"
      :first-day-of-week="1"
    ></tiny-date-panel>
    <div class="value1">{{ value1 }}</div>
    <tiny-date-range
      type="daterange"
      v-model="value1"
      :format-weeks="formatWeeks"
      :show-week-number="true"
      :first-day-of-week="1"
    ></tiny-date-range>
  </div>
</template>

<script>
import { TinyDatePanel, TinyDateRange } from '@opentiny/vue'

export default {
  components: {
    TinyDatePanel,
    TinyDateRange
  },
  data() {
    return {
      value: '2025-01-15',
      value1: ['2025-01-15', '2025-02-15'],
      eachWeekFirstDay: []
    }
  },
  methods: {
    formatWeeks(customWeeks, weekFirstDays) {
      this.eachWeekFirstDay = weekFirstDays
      return customWeeks + 'w'
    }
  }
}
</script>

<style scoped lang="less">
.demo-date-panel-wrap {
  width: 560px;
  & > * {
    margin-top: 12px;
  }
  .tiny-date-range-picker {
    width: 668px;
  }
}
</style>
