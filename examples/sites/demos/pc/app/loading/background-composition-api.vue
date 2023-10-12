<template>
  <div id="boxtwo"></div>
</template>

<script setup lang="jsx">
import { onMounted } from 'vue'
import { Loading } from '@opentiny/vue'

onMounted(() => {
  Loading.service({
    text: '自定义背景颜色和透明度',
    target: document.getElementById('boxtwo'),
    background: 'rgba(0, 0, 0, 0.3)'
  })
})
</script>

<style scoped>
#boxtwo {
  height: 120px;
}
</style>
