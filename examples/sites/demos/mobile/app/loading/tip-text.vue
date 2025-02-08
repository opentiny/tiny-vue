<template>
  <div id="demo-loading"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { TinyLoading } from '@opentiny/vue-mobile'

onMounted(() => {
  TinyLoading.service({
    text: '加载中...',
    tiny_mode: 'mobile',
    target: document.getElementById('demo-loading')
  })
})
</script>

<style scoped>
#demo-loading {
  height: 120px;
}
</style>
