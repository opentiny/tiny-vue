<template>
  <div class="demo-loading">
    <tiny-button type="secondary" @click="closeLoading">关闭 Loading</tiny-button>
    <div id="loading-box"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { TinyLoading, TinyButton } from '@opentiny/vue-mobile'

const loadingInstance = ref(null)

onMounted(() => {
  loadingInstance.value = TinyLoading.service({
    tiny_mode: 'mobile',
    target: document.getElementById('loading-box')
  })
})

function closeLoading() {
  loadingInstance.value.close()
}
</script>

<style scoped>
#loading-box {
  height: 200px;
  margin-top: 16px;
}
</style>
