<template>
  <tiny-time-line :data="data" :active="active" @click="click" vertical reverse></tiny-time-line>
</template>

<script>
import { TimeLine, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      active: 1,
      data: [
        { name: '已下单', time: '2019-11-11 00:01:30' },
        { name: '运输中', time: '2019-11-12 14:20:15' },
        { name: '已签收', time: '2019-11-14 20:45:50' }
      ]
    }
  },
  methods: {
    click(index) {
      Modal.message({ message: `触发了click事件：${index}`, status: 'info' })
      this.active = index
    }
  }
}
</script>
