<template>
  <div id="tiny-demo-loading-spinner"></div>
</template>

<script>
import { Loading } from '@opentiny/vue'
import { iconLoadingShadow } from '@opentiny/vue-icon'

const spinnerIcon = iconLoadingShadow()

export default {
  mounted() {
    Loading.service({
      text: '自定义loading图标',
      spinner: spinnerIcon,
      target: document.getElementById('tiny-demo-loading-spinner'),
    })
  }
}
</script>

<style scoped>
#tiny-demo-loading-spinner {
  margin-bottom: 10px;
  height: 120px;
}
</style>
