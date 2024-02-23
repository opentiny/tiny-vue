<template>
  <div>
    <tiny-button plain class="btn1" @click="stepStart">图文结合新手引导</tiny-button>
    <tiny-guide :show-step="showStep" :dom-data="domData" pop-position="right"></tiny-guide>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Guide as TinyGuide, Button as TinyButton } from '@opentiny/vue'

const showStep = ref(false)
const imgUrl = `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`
const domData = ref([
  {
    title: '图文结合新手引导标题',
    text: `<div><img src="${imgUrl}" style='height:225px;width:100%;padding-bottom:16px' />这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案</div>`,
    domElement: '.btn1',
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
