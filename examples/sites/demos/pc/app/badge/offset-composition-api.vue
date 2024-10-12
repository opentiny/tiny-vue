<template>
  <div>
    <p>使用字符串：</p>
    <br />
    <tiny-badge :value="2" :offset="['0', '-50%']">我的待办</tiny-badge>
    <br /><br />
    <p>使用数字：</p>
    <br />
    <tiny-badge :value="2" :offset="[0, -8]">我的待办</tiny-badge>
    <br /><br />
    <p>区域使用：</p>
    <br />
    <div class="demo-box">
      <tiny-badge :value="9" :max="9" :offset="['-50%', '-212%']"><div class="demo-badge-offset"></div></tiny-badge>
      <tiny-badge :value="99" :max="99" :offset="['-50%', '-212%']"><div class="demo-badge-offset"></div></tiny-badge>
      <tiny-badge :value="100" :max="99" :offset="['-50%', '-212%']"><div class="demo-badge-offset"></div></tiny-badge>
      <tiny-badge :value="1000" :max="999" :offset="['-50%', '-212%']"
        ><div class="demo-badge-offset"></div
      ></tiny-badge>
    </div>
  </div>
</template>

<script setup>
import { Badge as TinyBadge } from '@opentiny/vue'
</script>

<style scoped>
.demo-badge-offset {
  display: inline-block;
  width: 60px;
  height: 40px;
  background-color: gainsboro;
}
.demo-box {
  width: 400px;
  height: 60px;
  display: flex;
  justify-content: space-around;
}
</style>
