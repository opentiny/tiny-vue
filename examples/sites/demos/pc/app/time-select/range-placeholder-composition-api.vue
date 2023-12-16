<template>
  <div class="time-select-demo-range">
    <tiny-time-select
      placeholder="起始时间"
      v-model="startTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        maxTime: endTime
      }"
    ></tiny-time-select>
    <tiny-time-select
      placeholder="结束时间"
      v-model="endTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: startTime
      }"
    ></tiny-time-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'

const startTime = ref('')
const endTime = ref('')
</script>

<style lang="less" scoped>
.time-select-demo-range {
  width: 270px;
  & > * {
    margin-top: 12px;
  }
}
</style>
