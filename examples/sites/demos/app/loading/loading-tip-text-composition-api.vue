<template>
  <div id="boxone"></div>
</template>

<script setup lang="jsx">
import { onMounted } from 'vue'
import { Loading } from '@opentiny/vue'

onMounted(() => {
  Loading.service({
    text: '加载中',
    target: document.getElementById('boxone')
  })
})
</script>

<style scoped>
#boxone {
  height: 120px;
}
</style>
