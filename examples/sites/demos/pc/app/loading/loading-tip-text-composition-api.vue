<template>
  <div id="tiny-demo-loading-tip-text"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Loading } from '@opentiny/vue'

onMounted(() => {
  Loading.service({
    text: '加载中',
    target: document.getElementById('tiny-demo-loading-tip-text')
  })
})
</script>

<style scoped>
#tiny-demo-loading-tip-text {
  height: 120px;
}
</style>
