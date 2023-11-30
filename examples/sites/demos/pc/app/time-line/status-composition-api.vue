<template>
  <tiny-time-line vertical :data="data" shape="dot"></tiny-time-line>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { TimeLine as TinyTimeLine } from '@opentiny/vue'

const data = reactive([
  { name: '基本 / primary', time: '2019-11-10 00:00:00', type: 'primary' },
  { name: '成功 / success', time: '2019-11-11 00:01:30', type: 'success' },
  { name: '警告 / warning', time: '2019-11-12 14:20:15', type: 'warning' },
  { name: '危险 / danger', time: '2019-11-13 20:45:50', type: 'danger' },
  { name: '信息 / info', time: '2019-11-14 20:45:50', type: 'info' }
])
</script>
