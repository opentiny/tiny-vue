<template>
  <div>
    <tiny-button plain class="h1" @click="stepStart">新手引导自定义宽高</tiny-button>
    <tiny-guide
      :show-step="showStep"
      :dom-data="domData"
      width="300"
      height="200"
    ></tiny-guide>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Guide as TinyGuide, Button as TinyButton } from '@opentiny/vue'

const showStep = ref(false)
const domData = ref([
  {
    title: '新手引导标题1',
    text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
    domElement: '.h1',
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
</script>
