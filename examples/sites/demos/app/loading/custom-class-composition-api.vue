<template>
  <div id="tiny-loading" style="width: 100%; height: 120px"></div>
</template>

<script setup lang="jsx">
import { onMounted } from 'vue'
import { Loading } from '@opentiny/vue'

onMounted(() => {
  Loading.service({
    text: '自定义loading类名',
    customClass: 'new-loading',
    target: document.getElementById('tiny-loading'),
    background: 'rgba(0, 0, 0, 0.8)'
  })
})
</script>

<style>
.new-loading .tiny-loading__spinner .tiny-loading__text {
  color: green;
}
</style>
