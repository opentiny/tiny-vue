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
      background: 'rgba(0, 0, 0, 0.7)',
      tiny_mode: 'mobile-first'
    })
  }
}
</script>

<style scoped>
:deep(.new-loading .tiny-tailwind-text) {
  color: darkgreen;
}
</style>
