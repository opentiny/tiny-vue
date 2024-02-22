<template>
  <div id="boxtwo"></div>
</template>

<script>
import { Loading } from '@opentiny/vue'

export default {
  mounted() {
    Loading.service({
      text: '自定义背景颜色和透明度',
      target: document.getElementById('boxtwo'),
      background: 'rgba(0, 0, 0, 0.3)'
    })
  }
}
</script>

<style scoped>
#boxtwo {
  height: 120px;
}
</style>
