<template>
  <div class="guide-content">
    <tiny-button plain class="m1" @click="stepStart1">新手引导1</tiny-button>
    <tiny-button plain class="m2" @click="stepStart2">新手引导2</tiny-button>
    <tiny-button plain class="m3" @click="stepStart3">新手引导3</tiny-button>
    <tiny-guide :show-step="showStep1" :dom-data="m1"></tiny-guide>
    <tiny-guide :show-step="showStep2" :dom-data="m2" :main-axis="50"></tiny-guide>
    <tiny-guide :show-step="showStep3" :dom-data="m3" :main-axis="100"></tiny-guide>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Guide as TinyGuide, Button as TinyButton } from '@opentiny/vue'

const showStep1 = ref(false)
const showStep2 = ref(false)
const showStep3 = ref(false)
const m1 = ref([
  {
    title: '新手引导标题1',
    text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
    domElement: '.m1',
    button: [
      {
        text: '下一步',
        action: 'next'
      }
    ]
  }
])
const m2 = ref([
  {
    title: '新手引导标题2',
    text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
    domElement: '.m2',
    button: [
      {
        text: '下一步',
        action: 'next'
      }
    ]
  }
])
const m3 = ref([
  {
    title: '新手引导标题3',
    text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
    domElement: '.m3',
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
</script>

<style scoped>
.guide-content {
  display: flex;
  justify-content: space-around;
}
</style>
