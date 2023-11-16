<template>
  <tiny-time-line :active="active" text-position="right" space="200px">
    <tiny-timeline-item v-for="(item, i) in data" :node="item" @click="onItemClick(i)"> </tiny-timeline-item>
  </tiny-time-line>
</template>

<script setup>
import { ref } from 'vue'
import { TimeLine as TinyTimeLine, TimelineItem as TinyTimelineItem, Modal } from '@opentiny/vue'

const active = ref(1)
const data = ref([
  { name: '已下单', time: '2019-11-11 00:01:30' },
  { name: '运输中', time: '2019-11-12 14:20:15' },
  { name: '已签收', time: '2019-11-14 20:45:50' }
])

const onItemClick = (index, node) => {
  active.value = index
  Modal.message({
    message: 'click 事件，当前 index：' + index + ' 节点信息：' + node.name + ',' + node.time,
    status: 'info'
  })
}
</script>
