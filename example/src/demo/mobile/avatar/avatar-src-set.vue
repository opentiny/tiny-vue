<template>
  <div class="avatar-wrap">
    <tiny-avatar :src="circleUrl" :src-set="srcSet" size="large"></tiny-avatar>
    <tiny-avatar :icon="IconClockWork" size="large"></tiny-avatar>
    <tiny-avatar :src="circleUrl" fit="contain" size="large"></tiny-avatar>
    <tiny-avatar :src="errorUrl" :error="onError" fit="none" size="large"></tiny-avatar>
    <tiny-avatar :src="circleUrl" shape="square" fit="none" size="large"></tiny-avatar>
  </div>
</template>

<script>
import { Avatar } from '@opentiny/vue'
import { iconClockWork } from '@opentiny/vue-icon'

export default {
  components: {
    TinyAvatar: Avatar
  },
  data() {
    return {
      IconClockWork: iconClockWork(),
      circleUrl: 'static/images/floral.png',
      srcSet: 'static/images/watercolor.png 100w,static/images/floral.png 300w,static/images/fruit.jpg 500w',
      errorUrl: 'error.png', //使用错误路径
      onError() {
        console.log('加载失败')
      }
    }
  }
}
</script>
<style>
.avatar-wrap {
  padding: 20px;
}
.avatar-wrap svg {
  height: 100%;
  width: 100%;
}
</style>
