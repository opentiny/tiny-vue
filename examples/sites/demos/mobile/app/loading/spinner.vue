<template>
  <div id="demo-loading"></div>
</template>

<script>
import { Loading } from '@opentiny/vue'
import { iconLoading } from '@opentiny/vue-icon'

export default {
  mounted() {
    Loading.service({
      spinner: iconLoading(),
      text: '自定义 loading 图标',
      target: document.getElementById('demo-loading'),
      background: '#fff',
      tiny_mode: 'mobile'
    })
  }
}
</script>

<style scoped>
#demo-loading {
  height: 120px;
}
</style>
