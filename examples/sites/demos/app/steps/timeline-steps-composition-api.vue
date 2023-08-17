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
      <tiny-time-line
        :data="data3"
        reverse
        type="timeline"
        vertical
        :active="timeActive3"
        @click="timeClick3"
      ></tiny-time-line>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimeLine as TinyTimeLine, Modal } from '@opentiny/vue'

const timeActive1 = ref(0)
const timeActive2 = ref(0)
const timeActive3 = ref(0)
const data3 = ref([
  { name: '已下单', time: '2018-05-22 14:20' },
  { name: '运输中', time: '2018-05-22 14:20' },
  { name: '已签收', time: '2018-05-22 14:20' }
])

function timeClick1(index, node) {
  timeActive1.value = index

  Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
}

function timeClick2(index) {
  timeActive2.value = index
}

function timeClick3(index) {
  timeActive3.value = index
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
