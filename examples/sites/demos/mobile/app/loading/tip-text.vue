<template>
  <div id="demo-loading"></div>
</template>

<script>
import { TinyLoading } from '@opentiny/vue-mobile'

export default {
  mounted() {
    TinyLoading.service({
      text: '加载中...',
      tiny_mode: 'mobile',
      target: document.getElementById('demo-loading')
    })
  }
}
</script>

<style scoped>
#demo-loading {
  height: 120px;
}
</style>
