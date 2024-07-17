<template>
  <tiny-time-line :data="data" :show-number="false">
    <template #icon="{ slotScope }">
      <icon-loading v-if="slotScope.type === 'loading'"></icon-loading>
      <icon-time v-if="slotScope.type === 'time'"></icon-time>
    </template>
  </tiny-time-line>
</template>

<script>
import { TimeLineNew } from '@opentiny/vue'
import { IconLoading, IconTime } from '@opentiny/vue-icon'

export default {
  components: {
    IconLoading: IconLoading(),
    IconTime: IconTime(),
    TinyTimeLine: TimeLineNew
  },
  data() {
    return {
      data: [
        { name: '节点标题', time: '2022-11-11 00:01:30', autoColor: 'success' },
        { name: '节点标题', time: '2022-11-12 14:20:15', autoColor: 'success' },
        { name: '节点标题', time: '2022-11-14 20:45:50', autoColor: IconLoading() },
        { name: '节点标题', time: '2022-11-11 00:01:30', autoColor: IconTime() },
        { name: '节点标题', time: '2022-11-14 20:45:50', autoColor: 'info' }
      ]
    }
  }
}
</script>
