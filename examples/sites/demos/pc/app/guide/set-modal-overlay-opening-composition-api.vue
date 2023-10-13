<template>
  <div>
    <tiny-button plain class="over" @click="stepStart">新手引导</tiny-button>
    <tiny-guide
      :show-step="showStep"
      :dom-data="domData"
      :main-axis="50"
      :modal-overlay-opening-padding="size"
      :modal-overlay-opening-radius="size"
    ></tiny-guide>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Guide as TinyGuide, Button as TinyButton } from '@opentiny/vue'

const size = ref(20)
const showStep = ref(false)
const domData = ref([
  {
    text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
    domElement: '.over',
    button: [
      {
        text: '下一步',
        action: 'next'
      }
    ],
    classes: 'only-content'
  }
])

function stepStart() {
  showStep.value = !showStep.value
}
</script>
