<template>
  <div>
    <div class="title">待办事项：</div>
    <div
      v-for="item in options"
      :key="item.title"
      :class="{
        is_disabled: item.disabled,
        list: true
      }"
      v-auto-tip="item.disabled ? { always: true, content: item.tip } : false"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script setup>
import { AutoTip as VAutoTip } from '@opentiny/vue-directive'

const options = [
  { text: '去游泳馆游泳', disabled: false },
  { text: '去羽毛球馆打羽毛球', disabled: true, tip: '自定义提示内容' }
]
</script>

<style scoped>
.title {
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 20px;
}
.list {
  width: 260px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  margin-top: 10px;
}
.is_disabled {
  cursor: not-allowed;
}
</style>
