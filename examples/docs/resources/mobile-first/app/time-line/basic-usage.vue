<template>
  <tiny-time-line :data="data"></tiny-time-line>
</template>

<script>
import { TimeLine, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      data: [
        { name: '节点标题', time: '2022-11-11 00:01:30' },
        { name: '节点标题', time: '2022-11-12 14:20:15' },
        { name: '节点标题', time: '2022-11-14 20:45:50' },
        { name: '节点标题', time: '2022-11-14 20:45:50' }
      ]
    }
  }
}
</script>
