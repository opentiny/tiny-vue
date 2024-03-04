<template>
  <tiny-time-line :active="active" text-position="right" space="200px">
    <tiny-timeline-item v-for="(item, i) in data" :node="item" :key="i" @click="onItemClick"> </tiny-timeline-item>
  </tiny-time-line>
</template>

<script lang="ts">
import { TimeLine, TimelineItem, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine,
    TinyTimelineItem: TimelineItem
  },
  data() {
    return {
      active: 1,
      data: [
        { name: '已下单', time: '2019-11-11 00:01:30' },
        { name: '运输中', time: '2019-11-12 14:20:15' },
        { name: '已签收', time: '2019-11-14 20:45:50' }
      ],
      showDivider: true
    }
  },
  methods: {
    onItemClick(index, node) {
      this.active = index
      Modal.message({
        message: 'click 事件，当前 index：' + index + ' 节点信息：' + node.name + ',' + node.time,
        status: 'info'
      })
    }
  }
}
</script>
