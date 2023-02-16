<template>
  <div id="boxseven"></div>
</template>

<script>
import { Loading } from '@opentiny/vue'
import { iconLoading } from '@opentiny/vue-icon'

export default {
  mounted() {
    Loading.service({
      text: '自定义loading图标',
      spinner: iconLoading(), // 添加自定义类名，动画需要自己实现
      target: document.getElementById('boxseven'),
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
}
</script>

<style scoped>
#boxseven {
  height: 120px;
}
</style>
