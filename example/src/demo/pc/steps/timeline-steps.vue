<template>
  <div>
    <div class="title">横向步骤条 正向</div>
    <tiny-time-line :data="data3" type="timeline" :active="timeActive1" @click="timeClick1"></tiny-time-line>
    <div class="half-div">
      <div class="title">竖式步骤条 正向</div>
      <tiny-time-line :data="data3" type="timeline" vertical :active="timeActive2" @click="timeClick2"></tiny-time-line>
    </div>
    <div class="half-div">
      <div class="title">竖式步骤条 反向</div>
      <tiny-time-line :data="data3" reverse type="timeline" vertical :active="timeActive3" @click="timeClick3"></tiny-time-line>
    </div>
  </div>
</template>

<script>
import { TimeLine, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      timeActive1: 0,
      timeActive2: 0,
      timeActive3: 0,
      data3: [
        { name: '已下单', time: '2018-05-22 14:20' },
        { name: '运输中', time: '2018-05-22 14:20' },
        { name: '已签收', time: '2018-05-22 14:20' }
      ]
    }
  },
  methods: {
    timeClick1(index, node) {
      this.timeActive1 = index

      Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
    },
    timeClick2(index) {
      this.timeActive2 = index
    },
    timeClick3(index) {
      this.timeActive3 = index
    }
  }
}
</script>

<style scoped>
.half-div {
  display: inline-block;
  width: 49%;
  margin-top: 60px;
  margin-bottom: 50px;
  padding-left: 50px;
}

.title {
  font-weight: bold;
  margin-bottom: 30px;
}
</style>
