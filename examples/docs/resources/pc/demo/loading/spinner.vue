<template>
  <div id="boxseven"></div>
  <div id="boxone"></div>
  <div id="boxtwo"></div>
</template>

<script lang="jsx">
import { Loading } from '@opentiny/vue'
import { iconLoadingShadow } from '@opentiny/vue-icon'

const spinnerIcon = iconLoadingShadow()

export default {
  mounted() {
    Loading.service({
      text: '自定义loading图标',
      spinner: spinnerIcon, // 添加自定义类名，动画需要自己实现
      target: document.getElementById('boxseven'),
      background: '#fff',
      size: 'small'
    })
    Loading.service({
      text: '自定义loading图标',
      spinner: spinnerIcon,
      target: document.getElementById('boxone'),
      background: '#fff',
      size: 'medium'
    })
    Loading.service({
      text: '自定义loading图标',
      spinner: spinnerIcon,
      target: document.getElementById('boxtwo'),
      background: '#fff',
      size: 'large'
    })
  }
}
</script>

<style scoped>
div {
  margin-bottom: 10px;
  height: 120px;
}
</style>
