<template>
  <div>
    <div class="guide-content">
      <tiny-alert
        class="pos"
        :closable="false"
        type="success"
        size="large"
        description="提交结果页用于反馈一系列操作任务的处理结果。"
      >
      </tiny-alert>
    </div>
    <div class="guide-title">
      <tiny-button plain @click="stepStart1">默认</tiny-button>
      <tiny-button plain @click="stepStart2">上居中</tiny-button>
      <tiny-button plain @click="stepStart3">右居中</tiny-button>
      <tiny-button plain @click="stepStart4">独立位置上居中</tiny-button>
    </div>
    <tiny-guide :show-step="showStep1" :dom-data="data1"></tiny-guide>
    <tiny-guide :show-step="showStep2" :dom-data="data2" pop-position="top"></tiny-guide>
    <tiny-guide :show-step="showStep3" :dom-data="data3" pop-position="right"></tiny-guide>
    <tiny-guide :show-step="showStep4" :dom-data="data4"></tiny-guide>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Alert as TinyAlert, Button as TinyButton, Guide as TinyGuide } from '@opentiny/vue'

const showStep1 = ref(false)
const showStep2 = ref(false)
const showStep3 = ref(false)
const showStep4 = ref(false)
const data1 = ref([
  {
    title: '新手引导标题1',
    text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
    domElement: '.pos',
    button: [
      {
        text: '下一步',
        action: 'next'
      }
    ]
  }
])
const data2 = ref([
  {
    title: '新手引导标题2',
    text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
    domElement: '.pos',
    button: [
      {
        text: '下一步',
        action: 'next'
      }
    ]
  }
])
const data3 = ref([
  {
    title: '新手引导标题3',
    text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
    domElement: '.pos',
    button: [
      {
        text: '下一步',
        action: 'next'
      }
    ]
  }
])
const data4 = ref([
  {
    popPosition: 'top',
    title: '新手引导标题4',
    text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
    domElement: '.pos',
    button: [
      {
        text: '下一步',
        action: 'next'
      }
    ]
  }
])

function stepStart1() {
  showStep1.value = !showStep1.value
}

function stepStart2() {
  showStep2.value = !showStep2.value
}

function stepStart3() {
  showStep3.value = !showStep3.value
}

function stepStart4() {
  showStep4.value = !showStep4.value
}
</script>

<style scoped>
.guide-title {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 600px;
}
.guide-content {
  width: 600px;
}
</style>
