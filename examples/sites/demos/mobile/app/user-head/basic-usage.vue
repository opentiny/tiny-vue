<template>
  <div class="demo-content">
    <div class="title">尺寸</div>
    <div class="item-content">
      <tiny-user-head type="label" v-model="name" :size="80" round></tiny-user-head>
      <tiny-user-head type="label" v-model="name" :size="70" round></tiny-user-head>
      <tiny-user-head type="label" v-model="name" :size="60" round></tiny-user-head>
      <tiny-user-head type="label" v-model="name" :size="50" round></tiny-user-head>
    </div>

    <div class="title">类型</div>
    <div class="item-content">
      <tiny-user-head type="label" v-model="name" :size="80"></tiny-user-head>
      <tiny-user-head type="icon" :size="80"></tiny-user-head>
      <tiny-user-head type="image" :modelValue="imageUrl" :size="80"></tiny-user-head>
    </div>

    <div class="title">自定义</div>
    <div class="item-content">
      <tiny-user-head type="icon" :size="80" backgroundColor="red"></tiny-user-head>
      <tiny-user-head type="icon" :size="80" backgroundColor="red" round></tiny-user-head>
      <tiny-user-head type="label" v-model="name" :size="80" messageTotal="20"></tiny-user-head>
      <tiny-user-head type="label" v-model="name" :size="40" messageTotal="20"></tiny-user-head>
    </div>
  </div>
</template>

<script lang="jsx">
import { TinyUserHead } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyUserHead
  },
  data() {
    return {
      imageUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
      name: '小明'
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  margin: 20px 0 10px 0;
}
.item-content {
  display: flex;
  align-items: center;

  .tiny-mobile-user-head {
    margin-right: 20px;
  }
}
</style>
