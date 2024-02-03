<template>
  <div class="demo-shape">
    <tiny-button type="primary" @click="changeShape">
      点击切换 shape 为 {{ shape === 'dot' ? 'circle' : 'dot' }}
    </tiny-button>
    <tiny-time-line vertical :data="data" :shape="shape"></tiny-time-line>
  </div>
</template>

<script lang="ts">
import { TimeLine, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine,
    TinyButton: Button
  },
  data() {
    return {
      data: [
        { name: '已下单', time: '2019-11-11 00:01:30' },
        { name: '运输中', time: '2019-11-12 14:20:15' },
        { name: '已签收', time: '2019-11-13 20:45:50' },
        { name: '已评价', time: '2019-11-14 20:45:50' }
      ],
      shape: 'dot'
    }
  },
  methods: {
    changeShape() {
      this.shape = this.shape === 'dot' ? 'circle' : 'dot'
    }
  }
}
</script>

<style>
.tiny-button {
  margin-bottom: 24px;
}
</style>
