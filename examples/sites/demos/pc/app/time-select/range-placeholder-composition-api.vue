<template>
  <div class="content">
    <tiny-time-select
      placeholder="起始时间"
      v-model="startTime"
      :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
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

<script setup lang="jsx">
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'

const startTime = ref('')
const endTime = ref('')
</script>
