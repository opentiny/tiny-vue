<template>
  <div class="tiny-mobile-exception-demo">
    <div v-if="!gits">
      <div class="page__hd">
        <h1 class="page__title">ExceptionTip</h1>
        <p class="page__desc">异常提示</p>
      </div>
      <tiny-button
        @click="
          () => {
            gits = !gits
            types = 'noperm'
          }
        "
        type="primary"
        size="large"
        style="margin-bottom: 20px"
        >无权限</tiny-button
      >
      <tiny-button
        @click="
          () => {
            gits = !gits
            types = 'nodata'
          }
        "
        size="large"
        style="margin-bottom: 20px"
        >无数据</tiny-button
      >
      <tiny-button
        @click="
          () => {
            gits = !gits
            types = 'build'
          }
        "
        type="primary"
        size="large"
        style="margin-bottom: 20px"
        >模块建设中</tiny-button
      >
      <tiny-button
        @click="
          () => {
            gits = !gits
            types = 'busy'
          }
        "
        size="large"
        style="margin-bottom: 20px"
        >系统繁忙</tiny-button
      >
      <tiny-button
        @click="
          () => {
            gits = !gits
            types = 'weaknet'
          }
        "
        type="primary"
        size="large"
        style="margin-bottom: 20px"
        >网络中断</tiny-button
      >
      <tiny-button
        @click="
          () => {
            gits = !gits
            types = 'pcview'
          }
        "
        size="large"
        style="margin-bottom: 20px"
        >提醒用户PC查看文件</tiny-button
      >
      <tiny-button
        @click="
          () => {
            gits = !gits
            types = 'nodata'
          }
        "
        type="primary"
        size="large"
        >404页面</tiny-button
      >
    </div>

    <tiny-exception :type="types" v-if="gits">
      <template #content>
        <div>content插槽</div>
      </template>
      <template #footer>
        <div>
          <tiny-button @click.stop="gits = !gits" plain size="large">返回</tiny-button>
        </div>
      </template>
    </tiny-exception>
  </div>
</template>

<script>
import { Exception, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyException: Exception
  },
  data() {
    return {
      gits: false,
      types: ''
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
</style>
