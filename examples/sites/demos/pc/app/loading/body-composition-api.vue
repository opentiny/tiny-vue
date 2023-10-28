<template>
  <div>
    <tiny-button @click="handleClick" style="max-width: unset">设置v-loading.body的值为true</tiny-button>
    <div id="boxnine" v-loading.body="isBody"></div>
  </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import { Loading, Button as TinyButton } from '@opentiny/vue'

const isBody = ref(false)

const vLoading = Loading.directive

onMounted(() => {
  Loading.service({
    lock: true,
    text: '同 v——loading 指令中的 body 修饰符',
    target: document.getElementById('boxnine'),
    background: 'rgba(0, 0, 0, 0.8)'
  })
})

function handleClick() {
  isBody.value = true
  setTimeout(() => {
    isBody.value = false
  }, 20000)
}
</script>

<style scoped>
#boxnine {
  height: 120px;
}
</style>
