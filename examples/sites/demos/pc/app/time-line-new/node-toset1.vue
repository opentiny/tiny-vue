<template>
  <aui-time-line :data="data" :active="active" @click="click"> </aui-time-line>
</template>

<script>
import { TimeLineNew, Modal } from '@opentiny/vue'

export default {
  components: {
    AuiTimeLine: TimeLineNew
  },
  data() {
    return {
      active: 6,
      data: [
        { name: '节点标题', time: '2022-11-11 00:01:30', autoColor: 'success' },
        { name: '节点标题', time: '2022-11-12 14:20:15', autoColor: 'success' },
        { name: '节点标题', time: '2022-11-14 20:45:50', autoColor: 'error' },
        { name: '节点标题', time: '2022-11-11 00:01:30' },
        { name: '节点标题', time: '2022-11-14 20:45:50', autoColor: 'warning' },
        { name: '节点标题', time: '2022-11-11 00:01:30' }
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
