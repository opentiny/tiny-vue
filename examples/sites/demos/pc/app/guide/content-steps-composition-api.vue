<template>
  <div>
    <tiny-button plain @click="stepStart">新手引导开始</tiny-button>
    <tiny-button plain class="guide1-content-steps">新手引导1</tiny-button>
    <tiny-button plain class="guide2-content-steps">新手引导2</tiny-button>
    <tiny-guide :show-step="showStep" :dom-data="domData"></tiny-guide>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Guide as TinyGuide, Button as TinyButton } from '@opentiny/vue'

const showStep = ref(false)
const domData = ref([
  {
    text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
    domElement: '.guide1-content-steps',
    button: [
      {
        text: '下一步',
        action: 'next'
      }
    ],
    classes: 'only-content'
  },
  {
    text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
    domElement: '.guide2-content-steps',
    button: [
      {
        text: '上一步',
        action: 'back',
        secondary: true
      },
      {
        text: '完成',
        action: 'complete'
      }
    ],
    classes: 'only-content'
  }
])

function stepStart() {
  showStep.value = !showStep.value
}
</script>
