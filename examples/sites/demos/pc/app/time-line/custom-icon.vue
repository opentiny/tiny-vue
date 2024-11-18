<template>
  <tiny-time-line :data="data" :active="active" @click="click"></tiny-time-line>
</template>

<script>
import { TinyTimeLine, TinyModal } from '@opentiny/vue'
import { iconLocalePanel, iconFeedback, iconSynchronize, iconAgency } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimeLine
  },
  data() {
    return {
      active: 2,
      data: [
        { name: '立项', time: '2022-11-12 10:00', autoColor: iconLocalePanel() },
        { name: '开发', time: '2022-11-15 20:00', autoColor: iconFeedback() },
        { name: '交付', time: '2022-12-10 20:00', autoColor: iconSynchronize() },
        { name: '结项', time: '2022-12-15 00:00', autoColor: iconAgency() }
      ]
    }
  },
  methods: {
    click(index, node) {
      this.active = index
      TinyModal.message({
        message: 'click 事件，当前 index：' + index + ' 节点信息：' + node.name + ',' + node.time,
        status: 'info'
      })
    }
  }
}
</script>
