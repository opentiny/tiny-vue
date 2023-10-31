<template>
  <div id="tiny-loading" style="width: 100%; height: 120px"></div>
</template>

<script>
import { Loading } from '@opentiny/vue'

export default {
  mounted() {
    Loading.service({
      text: '自定义loading类名',
      customClass: 'new-loading',
      target: document.getElementById('tiny-loading'),
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
}
</script>

<style scoped>
:deep(.tiny-loading__spinner .tiny-loading__text) {
  color: darkorange;
}
</style>
