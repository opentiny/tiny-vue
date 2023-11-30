<template>
  <div class="btns-container">
    <tiny-button v-for="i in [1, 2, 3, 4, 5]" :key="i" @click="btnClick"> 按钮 {{ i }} </tiny-button>
  </div>
  <tiny-popover ref="popoverRef" :reference="referenceElm" :content="dynContent" width="200"> </tiny-popover>
</template>

<script setup lang="jsx">
import { ref, nextTick } from 'vue'
import { Popover as TinyPopover, Button as TinyButton } from '@opentiny/vue'

const referenceElm = ref(null)
const dynContent = ref('')
const popoverRef = ref()

function btnClick(ev) {
  popoverRef.value.doClose() // 先触发上次的消失

  const btn = ev.target
  referenceElm.value = btn
  dynContent.value = '您刚刚点击了: ' + btn.innerText

  nextTick(() => popoverRef.value.doShow())
}
</script>

<style scoped>
.btns-container {
  display: flex;
  flex-direction: column;
}
.tiny-button {
  width: 100px;
  margin: 0 0 16px 8px;
}
</style>
