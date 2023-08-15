<template>
  <tiny-time-line :data="data" :active="active" @click="click" :show-number="false"></tiny-time-line>
</template>

<script setup lang="jsx">
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
