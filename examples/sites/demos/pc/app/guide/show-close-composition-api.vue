<template>
  <div>
    <tiny-button plain class="show-close-btn" @click="stepStart">新手引导显示关闭按钮</tiny-button>
    <tiny-guide :show-step="showStep" :dom-data="domData" :show-close="true"></tiny-guide>

    <tiny-button plain class="hide-close-btn" style="margin-top: 20px" @click="stepStartWithoutClose"
      >新手引导隐藏关闭按钮</tiny-button
    >
    <tiny-guide :show-step="showStepWithoutClose" :dom-data="domDataWithoutClose" :show-close="false"></tiny-guide>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyGuide, TinyButton } from '@opentiny/vue'

const showStep = ref(false)
const showStepWithoutClose = ref(false)

const domData = ref([
  {
    title: '新手引导标题 1',
    text: '这里是可以关闭的新手引导，点击右上角的关闭按钮可直接退出引导',
    domElement: '.show-close-btn',
    button: [
      {
        text: '下一步',
        action: 'next'
      }
    ]
  },
  {
    title: '新手引导标题 2',
    text: '这个引导步骤展示了关闭按钮功能',
    domElement: '.show-close-btn',
    button: [
      {
        text: '完成',
        action: 'complete'
      }
    ]
  }
])

const domDataWithoutClose = ref([
  {
    title: '新手引导标题 1',
    text: '这里是不显示关闭按钮的新手引导，无法通过关闭按钮退出引导',
    domElement: '.hide-close-btn',
    button: [
      {
        text: '下一步',
        action: 'next'
      }
    ]
  },
  {
    title: '新手引导标题 2',
    text: '这个引导没有关闭按钮，只能通过底部按钮操作',
    domElement: '.hide-close-btn',
    button: [
      {
        text: '完成',
        action: 'complete'
      }
    ]
  }
])

function stepStart() {
  showStep.value = !showStep.value
}

function stepStartWithoutClose() {
  showStepWithoutClose.value = !showStepWithoutClose.value
}
</script>
