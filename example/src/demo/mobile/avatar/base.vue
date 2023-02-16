<template>
  <div class="avatar-wrap">
    <div class="page__hd">
      <h1 class="page__title">HeadIcon</h1>
      <p class="page__desc">头像图标</p>
    </div>
    <div class="boyx">
      <tiny-avatar :src="dogUrl" :size="320"></tiny-avatar>
      <p>320x320</p>
      <div>
        <tiny-avatar :src="dogUrl" :size="80"></tiny-avatar>
        <tiny-avatar :src="circleUrl" :size="80"></tiny-avatar>
        <span>80x80</span>
      </div>
      <div>
        <tiny-avatar :src="dogUrl" :size="56"></tiny-avatar>
        <tiny-avatar :src="circleUrl" :size="56"></tiny-avatar>
        <span>56x56</span>
      </div>
      <div>
        <tiny-avatar :src="dogUrl" :size="48"></tiny-avatar>
        <tiny-avatar :src="circleUrl" :size="48"></tiny-avatar>
        <span>48x48</span>
      </div>
      <div>
        <tiny-avatar :src="dogUrl" :size="40"></tiny-avatar>
        <tiny-avatar :src="circleUrl" :size="40"></tiny-avatar>
        <span>40x40</span>
      </div>
      <div>
        <tiny-avatar :src="dogUrl" :size="36"></tiny-avatar>
        <tiny-avatar :src="circleUrl" :size="36"></tiny-avatar>
        <span>36x36</span>
      </div>
      <div>
        <tiny-avatar :src="dogUrl" :size="32"></tiny-avatar>
        <tiny-avatar :src="circleUrl" :size="32"></tiny-avatar>
        <span>32x32</span>
      </div>
      <div>
        <tiny-avatar :src="dogUrl" :size="30"></tiny-avatar>
        <tiny-avatar :src="circleUrl" :size="30"></tiny-avatar>
        <span>30x30</span>
      </div>
      <div>
        <tiny-avatar :src="dogUrl" :size="20"></tiny-avatar>
        <tiny-avatar :src="circleUrl" :size="20"></tiny-avatar>
        <span>20x20</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Avatar } from '@opentiny/vue'

export default {
  components: {
    TinyAvatar: Avatar
  },
  data() {
    return {
      circleUrl: 'static/images/floral.png',
      dogUrl: 'static/images/fruit.jpg'
    }
  }
}
</script>
<style>
.boyx {
  padding: 20px;
}
.boyx > div,
.boyx > p {
  margin-bottom: 30px;
}
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
  height: calc(100% - 0px);
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>
