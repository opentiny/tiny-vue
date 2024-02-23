<template>
  <div class="demo-timeline-vertical">
    <div class="demo-content">
      <p>竖向时间线 正向</p>
      <tiny-time-line :data="data" :active="active" @click="click" vertical></tiny-time-line>
    </div>

    <div class="demo-content">
      <p>竖向时间线 反向</p>
      <tiny-time-line :data="data" :active="active" @click="click" vertical reverse></tiny-time-line>
    </div>
  </div>
</template>

<script>
import { TimeLine } from '@opentiny/vue'

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
      this.active = index
    }
  }
}
</script>

<style scoped>
.demo-timeline-vertical {
  display: flex;
}

.demo-content {
  margin-right: 20px;
}
</style>
