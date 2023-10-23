<template>
  <div>
    <div id="tiny-size-loading1" style="width: 100%; margin-bottom: 10px; height: 120px"></div>
    <div id="tiny-size-loading2" style="width: 100%; margin-bottom: 10px; height: 120px"></div>
    <div id="tiny-size-loading3" style="width: 100%; margin-bottom: 10px; height: 120px"></div>
  </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import { Loading } from '@opentiny/vue'

const loadingInstance = ref(null)

onMounted(() => {
  loadingInstance.value = Loading.service({
    target: document.getElementById('tiny-size-loading1'),
    size: 'small'
  })
  loadingInstance.value = Loading.service({
    target: document.getElementById('tiny-size-loading2'),
    size: 'medium'
  })
  loadingInstance.value = Loading.service({
    target: document.getElementById('tiny-size-loading3'),
    size: 'large'
  })
})
</script>
