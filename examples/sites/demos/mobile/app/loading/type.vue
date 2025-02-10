<template>
  <div>
    <div id="tiny-mobile-loading2" style="width: 100%; height: 120px"></div>
  </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import { TinyLoading } from '@opentiny/vue-mobile'

const loadingInstance = ref(null)

onMounted(() => {
  loadingInstance.value = TinyLoading.service({
    tiny_mode: 'mobile',
    target: document.getElementById('tiny-mobile-loading2'),
    type: 'simple'
  })
})

function closeLoading() {
  loadingInstance.value.close()
}
</script>
