<template>
  <div>
    <button @click="closeLoading">close Loading</button>
    <div id="tiny-basic-loading1" style="width: 100%; height: 120px"></div>
  </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import { Loading } from '@opentiny/vue'

const loadingInstance = ref(null)

onMounted(() => {
  loadingInstance.value = Loading.service({
    target: document.getElementById('tiny-basic-loading1')
  })
})

function closeLoading() {
  loadingInstance.value.close()
}
</script>
