<template>
  <div class="demo-timeline-vertical">
    <div class="demo-content">
      <p>竖式时间线 正向</p>
      <tiny-time-line :data="data" :active="active" @click="click" vertical></tiny-time-line>
    </div>
    <div class="demo-content">
      <p>竖式时间线 逆向</p>
      <tiny-time-line :data="data" :active="active" @click="click" vertical reverse></tiny-time-line>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimeLine as TinyTimeLine } from '@opentiny/vue'

const active = ref(1)
const data = ref([
  { name: '已下单', time: '2019-11-11 00:01:30' },
  { name: '运输中', time: '2019-11-12 14:20:15' },
  { name: '已签收', time: '2019-11-14 20:45:50' }
])

function click(index) {
  active.value = index
}
</script>

<style scoped>
.demo-timeline-vertical {
  display: flex;
}

.demo-content {
  margin-right: 20px;
}
</style>
