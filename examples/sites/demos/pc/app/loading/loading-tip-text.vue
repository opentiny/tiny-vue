<template>
  <div id="tiny-demo-loading-tip-text"></div>
</template>

<script>
import { Loading } from '@opentiny/vue'

export default {
  mounted() {
    Loading.service({
      text: '加载中',
      target: document.getElementById('tiny-demo-loading-tip-text')
    })
  }
}
</script>

<style scoped>
#tiny-demo-loading-tip-text {
  height: 120px;
}
</style>
