<template>
  <tiny-time-line :data="data" :active="active" @click="click">
    <template #top="{ slotScope: { index, name } }">
      <p class="custom-top">{{ index }}.{{ name }}</p>
    </template>
    <template #bottom="{ slotScope: { time } }">
      <p class="custom-bottom">
        {{ time }}
      </p>
    </template>
  </tiny-time-line>
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

<style scoped>
.custom-top {
  text-align: center;
}

.custom-bottom {
  color: #8a8e99;
  font-size: 12px;
}
</style>
