<template>
  <div id="boxone"></div>
</template>

<script>
import { Loading } from '@opentiny/vue'

export default {
  mounted() {
    Loading.service({
      text: '加载中',
      target: document.getElementById('boxone')
    })
  }
}
</script>

<style scoped>
#boxone {
  height: 120px;
}
</style>
