<template>
  <div class="demo-steps-vertical">
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

<script setup>
import { ref } from 'vue'
import { TimeLine as TinyTimeLine, Modal } from '@opentiny/vue'

const timeActive = ref(0)
const data = ref([
  { name: '已下单', time: '2018-05-22 14:20' },
  { name: '运输中', time: '2018-05-22 14:20' },
  { name: '已签收', time: '2018-05-22 14:20' }
])

const onClick = (index, node) => {
  timeActive1.value = index

  Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
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
