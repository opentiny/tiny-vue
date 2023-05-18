<template>
  <div style="display: flex; justify-content: space-between">
    <tiny-time-line :data="data1" show-icon>
    </tiny-time-line>
    <tiny-time-line :data="data2" show-icon>
      <template #show-icon>
        <icon-copy />
      </template>
    </tiny-time-line>
  </div>
</template>

<script>
import { TimeLine } from '@opentiny/vue'
import { IconCopy, IconLoading } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      data1: [
        { name: '节点标题', time: '2022-11-11 00:01:30' },
        { name: '节点标题', time: '2022-11-12 14:20:15' },
        { name: '节点标题', time: '2022-11-14 20:45:50' },
        { name: '节点标题', time: '2022-11-11 00:01:30' },
        { name: '节点标题', time: '2022-11-14 20:45:50', autoColor: IconLoading() }
      ],
      data2: [
        { name: '节点标题', time: '2022-11-11 00:01:30' },
        { name: '节点标题', time: '2022-11-12 14:20:15' },
        { name: '节点标题', time: '2022-11-14 20:45:50' },
        { name: '节点标题', time: '2022-11-11 00:01:30' },
        { name: '节点标题', time: '2022-11-14 20:45:50', autoColor: IconCopy() }
      ]
    }
  }
}
</script>
