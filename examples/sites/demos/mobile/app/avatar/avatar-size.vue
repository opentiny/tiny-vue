<template>
  <div class="avatar-wrap">
    <div class="page__hd">
      <h1 class="page__title">HeadIcon</h1>
      <p class="page__desc">头像图标</p>
    </div>
    <tiny-avatar :src="circleUrl" size="large"></tiny-avatar>
    <tiny-avatar :src="circleUrl" size="medium"></tiny-avatar>
    <tiny-avatar :src="circleUrl" size="small"></tiny-avatar>
    <tiny-avatar :src="circleUrl" :size="320"></tiny-avatar>
    <tiny-avatar :src="circleUrl" :size="80"></tiny-avatar>
    <tiny-avatar :src="circleUrl" :size="56"></tiny-avatar>
    <tiny-avatar :src="circleUrl" :size="48"></tiny-avatar>
    <tiny-avatar :src="circleUrl" :size="40"></tiny-avatar>
    <tiny-avatar :src="circleUrl" :size="36"></tiny-avatar>
    <tiny-avatar :src="circleUrl" :size="32"></tiny-avatar>
    <tiny-avatar :src="circleUrl" :size="30"></tiny-avatar>
    <tiny-avatar :src="circleUrl" :size="20"></tiny-avatar>
  </div>
</template>

<script lang="jsx">
import { Avatar } from '@opentiny/vue'

export default {
  components: {
    TinyAvatar: Avatar
  },
  data() {
    return {
      circleUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/circle.png`
    }
  }
}
</script>

<style>
.page__hd {
  padding: 40px;
}

.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}

.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}

.avatar-wrap {
  padding: 20px;
  width: 100%;
  height: calc(100% - 118px);
  overflow: hidden;
  overflow-y: auto;
}
</style>
