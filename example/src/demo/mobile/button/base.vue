<template>
  <div class="button-wrap">
    <div class="body">
      <div class="page__hd">
        <h1 class="page__title">Button</h1>
        <p class="page__desc">按钮</p>
      </div>
      <tiny-button size="large">默认按钮</tiny-button>
      <tiny-button type="primary" size="large">主要按钮</tiny-button>
      <tiny-button type="success" size="large">成功按钮</tiny-button>
      <tiny-button type="info" size="large">信息按钮</tiny-button>
      <tiny-button type="warning" size="large">警告按钮</tiny-button>
      <tiny-button type="danger" size="large">危险按钮</tiny-button>
      <tiny-button type="primary" disabled size="large">主要按钮</tiny-button>
      <tiny-button type="success" disabled size="large">成功按钮</tiny-button>
      <tiny-button type="info" disabled size="large">信息按钮</tiny-button>
      <tiny-button type="warning" disabled size="large">警告按钮</tiny-button>
      <tiny-button type="danger" disabled size="large">危险按钮</tiny-button>

      <div class="btb">
        <tiny-button type="primary" size="small" plain>默认按钮</tiny-button>
        <tiny-button type="primary" size="small" plain disabled
          >默认按钮</tiny-button
        >
      </div>
      <div class="btb">
        <tiny-button type="primary" size="mini">按钮</tiny-button>
      </div>
      <div class="btb">
        <tiny-button :icon="IconMessageCircle" type="primary" size="mini" plain
          >加入会议</tiny-button
        >
      </div>
      <tiny-button type="primary" size="medium">主要按钮</tiny-button>
      <tiny-button type="success" size="medium">成功按钮</tiny-button>
      <tiny-button type="info" size="medium">信息按钮</tiny-button>
      <tiny-button type="primary" size="medium" plain>主要按钮</tiny-button>
      <div class="btb">
        <span>底部悬浮按钮</span>
      </div>
      <div class="btb">
        <tiny-button type="primary" size="small" plain @click="dat = 0"
          >有间距双按钮</tiny-button
        >
        <tiny-button type="primary" size="small" plain @click="dat = 1"
          >无间距双按钮</tiny-button
        >
      </div>
      <div class="btb">
        <tiny-button type="primary" size="small" plain @click="dat = 2"
          >确定单按钮</tiny-button
        >
        <tiny-button type="primary" size="small" plain @click="dat = 3"
          >删除单按钮</tiny-button
        >
      </div>
    </div>
    <div class="test" v-if="dat === 1">
      <tiny-button size="large">取消</tiny-button>
      <tiny-button type="primary" size="large">确认</tiny-button>
    </div>
    <div class="test" v-if="dat === 0">
      <div style="width: calc(50% - 10px); margin-right: 10px">
        <tiny-button size="large">取消</tiny-button>
      </div>
      <div style="width: calc(50% - 10px)">
        <tiny-button type="primary" size="large">确认</tiny-button>
      </div>
    </div>
    <div class="test" v-if="dat === 3">
      <tiny-button size="large" type="danger">删除</tiny-button>
    </div>
    <div class="test" v-if="dat === 2">
      <tiny-button type="primary" size="large">确认</tiny-button>
    </div>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'
import { iconMessageCircle } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      dat: 0,
      IconMessageCircle: iconMessageCircle()
    }
  }
}
</script>

<style scoped>
.body {
  height: calc(100% - 60px);
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
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
.test {
  position: absolute;
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  bottom: 0px;
  left: 0px;
  background-color: white;
}
.btb {
  display: flex;
  justify-content: center;
  width: 100%;
}
.button-wrap {
  height: calc(100% - 118px);
  position: relative;
}
.button-wrap .tiny-mobile-button {
  margin-bottom: 16px;
}
.test .tiny-mobile-button {
  margin-bottom: 0px;
}
</style>
