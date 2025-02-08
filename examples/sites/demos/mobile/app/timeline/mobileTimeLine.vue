<template>
  <div>
    <div class="title">横向步骤条 正向</div>
    <tiny-time-line :data="data3" type="timeline" :active="timeActive1" @click="timeClick1"></tiny-time-line>
    <tiny-time-line :data="data4" type="timeline" :active="timeActive1" @click="timeClick1">
      <template v-slot:bottom>
        <div class="text-content">
          <div class="main-text">标题文字</div>
          <div class="sub-text">辅助信息文字辅助信息文字辅助信息文字辅助信息文字</div>
        </div>
      </template>
    </tiny-time-line>
    <div class="half-div">
      <div class="title">竖式步骤条 正向</div>
      <tiny-time-line :data="data4" type="timeline" vertical :active="timeActive2" @click="timeClick2">
        <template v-slot:content>
          <div class="content-view">
            <div>内容区</div>
            <div>内容区</div>
            <div>内容区</div>
          </div>
        </template>
      </tiny-time-line>
    </div>
    <div class="half-div">
      <div class="title">竖式步骤条 反向</div>
      <tiny-time-line :data="data3" reverse type="timeline" vertical :active="timeActive3" @click="timeClick3">
        <template v-slot:header="{ item }">
          <div class="header-content">
            <div class="name">{{ item.name }}</div>
            <div class="label">标签</div>
          </div>
        </template>
      </tiny-time-line>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyTimeLine, TinyModal } from '@opentiny/vue-mobile'

const timeActive1 = ref(1)
const timeActive2 = ref(0)
const timeActive3 = ref(0)
const data3 = ref([
  { name: '已下单', state: 'normal', fold: true },
  { name: '运输中', state: 'success', fold: false, showFoldBtn: true },
  { name: '已签收', state: 'error' },
  { name: '已确认收货', state: 'handing' }
])
const data4 = ref([
  { name: '已下单', state: 'normal', showFoldBtn: true, fold: false },
  { name: '运输中', state: 'success', showFoldBtn: true, fold: true },
  { name: '已签收', state: 'error', showFoldBtn: true, fold: true },
  { name: '已确认收货', state: 'handing', showFoldBtn: true, fold: true }
])

function timeClick1(index, node) {
  timeActive1.value = index

  TinyModal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
}

function timeClick2(index) {
  timeActive2.value = index
}

function timeClick3(index) {
  timeActive3.value = index
}
</script>

<style lang="less" scoped>
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

.text-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-text {
  font-size: 12px;
}

.sub-text {
  font-size: 10px;
  color: #999;
  width: 80%;
  line-height: 16px;
}

.header-content {
  display: flex;
  font-size: 12px;
  align-items: center;

  .name {
    margin-left: 12px;
  }
  .label {
    background: rgba(102, 135, 255, 0.1);
    height: 18px;
    line-height: 18px;
    width: 28px;
    margin-left: 8px;
    text-align: center;
    padding: 3px;
    border-radius: 4px;
  }
}

.content-view {
  background: #f6f6f6;
}
</style>
