<template>
  <tiny-time-line :data="data" sub-field></tiny-time-line>
</template>

<script>
import { TimeLine } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      data: [
        { name: '节点标题', time: '2022-11-11 00:01:30', tips: '这是节点内容描述' },
        { name: '节点标题', time: '2022-11-12 14:20:15', tips: '这是节点内容描述' },
        { name: '节点标题', time: '2022-11-14 20:45:50', tips: '这是节点内容描述' },
        { name: '节点标题', time: '2022-11-14 20:45:50', tips: '这是节点内容描述' }
      ]
    }
  }
}
</script>
