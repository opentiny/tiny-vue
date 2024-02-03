<template>
  <div class="tiny-steps-demo-vertical">
    <div class="half-div">
      <div class="title">竖式步骤条 正向</div>
      <tiny-time-line vertical :data="data" :active="timeActive" @click="onClick"></tiny-time-line>
    </div>
    <div class="half-div">
      <div class="title">竖式步骤条 反向</div>
      <tiny-time-line reverse vertical :data="data" :active="timeActive" @click="onClick"></tiny-time-line>
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
      timeActive: 0,
      data: [
        { name: '已下单', time: '2018-05-22 14:20' },
        { name: '运输中', time: '2018-05-22 14:20' },
        { name: '已签收', time: '2018-05-22 14:20' }
      ]
    }
  },
  methods: {
    onClick(index) {
      this.timeActive = index
    }
  }
}
</script>

<style scoped>
.half-div {
  display: inline-block;
  width: 49%;
}

.title {
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
