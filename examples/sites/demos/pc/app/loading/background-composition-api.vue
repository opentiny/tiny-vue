<template>
  <div id="tiny-demo-loading-background"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Loading } from '@opentiny/vue'

onMounted(() => {
  Loading.service({
    text: '自定义背景颜色和透明度',
    target: document.getElementById('tiny-demo-loading-background'),
    background: 'rgba(94, 124, 224, 0.6)'
  })
})
</script>

<style scoped>
#tiny-demo-loading-background {
  height: 120px;
}
</style>
