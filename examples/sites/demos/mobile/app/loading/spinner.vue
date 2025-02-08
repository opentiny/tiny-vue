<template>
  <div id="demo-loading"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { TinyLoading } from '@opentiny/vue-mobile'
import { iconLoading } from '@opentiny/vue-icon'

onMounted(() => {
  TinyLoading.service({
    spinner: iconLoading(),
    text: '自定义 loading 图标',
    target: document.getElementById('demo-loading'),
    background: '#fff',
    tiny_mode: 'mobile'
  })
})
</script>

<style scoped>
#demo-loading {
  height: 120px;
}
</style>
