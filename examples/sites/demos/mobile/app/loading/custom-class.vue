<template>
  <div id="demo-loading"></div>
</template>

<script>
import { Loading } from '@opentiny/vue'

export default {
  mounted() {
    Loading.service({
      text: '自定义 loading 类名',
      customClass: 'my-loading',
      target: document.getElementById('demo-loading'),
      tiny_mode: 'mobile'
    })
  }
}
</script>

<style scoped>
#demo-loading {
  height: 100%;
}

:deep(.my-loading) {
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
</style>
