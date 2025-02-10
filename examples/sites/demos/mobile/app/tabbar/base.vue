<template>
  <div class="tiny-mobile-tabbar-demo">
    <div class="buttons">
      <tiny-button type="primary" size="large" @click="change(2)">切换成2个标签页</tiny-button>
      <tiny-button type="primary" size="large" @click="change(3)">切换成3个标签页</tiny-button>
      <tiny-button type="primary" size="large" @click="change(4)">切换成4个标签页</tiny-button>
      <tiny-button type="primary" size="large" @click="change(5)"> 切换成5个标签页</tiny-button>
    </div>
    <div v-show="pagename" class="content">{{ pagename }}</div>
    <tiny-tabbar v-model="activeName" fixed>
      <tiny-tabbar-item v-for="item in list" :key="item.title" :icon="item.ico" @click="tab(item.title)">
        {{ item.title }}
      </tiny-tabbar-item>
    </tiny-tabbar>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyTabbar, TinyTabbarItem, TinyButton } from '@opentiny/vue-mobile'
import { iconDialog, iconEmailAdd, iconGroup, iconSetting, iconAdministrator } from '@opentiny/vue-icon'

const activeName = ref(3)
const IconDialog = iconDialog()
const IconEmailAdd = iconEmailAdd()
const IconGroup = iconGroup()
const IconSetting = iconSetting()
const IconAdministrator = iconAdministrator()
const pagename = ref('')
const list = ref([
  { title: '消息', ico: iconDialog() },
  { title: '邮件', ico: iconEmailAdd() }
])
const itemList = ref([
  { title: '消息', ico: iconDialog() },
  { title: '邮件', ico: iconEmailAdd() },
  { title: '人员', ico: iconGroup() },
  { title: '设置', ico: iconSetting() },
  { title: '我的', ico: iconAdministrator() }
])

function change(num) {
  pagename.value = ''
  list.value = itemList.value.slice(0, num)
}

function tab(name) {
  pagename.value = '当前点击的是------' + name + '   标签栏'
}
</script>

<style scoped>
.buttons button {
  margin-top: 20px;
}
.tiny-mobile-tabbar-demo .content {
  margin-top: 30px;
  text-align: center;
  background-color: bisque;
  height: 70px;
  line-height: 70px;
}
</style>
