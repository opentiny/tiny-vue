<template>
  <tiny-time-line :data="data" :active="active" @click="click"></tiny-time-line>
</template>

<script>
import { TimeLine, Modal } from '@opentiny/vue'
import { iconCheckOut, iconCalendar, iconLoading, iconEnd } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      active: 2,
      data: [
        { name: '立项', time: '2022-11-12 10:00', autoColor: iconCheckOut() },
        { name: '开发', time: '2022-11-15 20:00', autoColor: iconCalendar() },
        { name: '交付', time: '2022-12-10 20:00', autoColor: iconLoading() },
        { name: '结项', time: '2022-12-15 00:00', autoColor: iconEnd() }
      ]
    }
  },
  methods: {
    click(index, node) {
      this.active = index
      Modal.message({
        message: 'click 事件，当前 index：' + index + ' 节点信息：' + node.name + ',' + node.time,
        status: 'info'
      })
    }
  }
}
</script>
