<template>
  <div>
    <tiny-button @click="closeLoading">close Loading</tiny-button>
    <div id="tiny-basic-loading1"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Loading, Button as TinyButton } from '@opentiny/vue'

const loadingInstance = ref(null)

const closeLoading = () => {
  loadingInstance.value.close()
}

onMounted(() => {
  loadingInstance.value = Loading.service({
    target: document.getElementById('tiny-basic-loading1')
  })
})
</script>

<style scoped>
#tiny-basic-loading1 {
  width: 100%;
  height: 120px;
  border: 1px solid beige;
  margin-top: 10px;
}
</style>
