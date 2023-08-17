<template>
  <tiny-tabs v-model="activeName" tab-style="card" :with-close="true" @close="close">
    <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script setup lang="jsx">
import { ref, getCurrentInstance } from 'vue'
import { Tabs as TinyTabs, TabItem as TinyTabItem } from '@opentiny/vue'

const activeName = ref('first')
const Tabs = ref([
  {
    title: '表单组件',
    name: 'first',
    content: '表单组件,具有与用户交互，并可完成数据采集功能的控件。 '
  },
  {
    title: '数据组件',
    name: 'second',
    content: ' 数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等'
  },
  {
    title: '导航组件',
    name: 'third',
    content: ' 导航组件,帮助网站访问者浏览站点的组件.'
  },
  {
    title: '业务组件',
    name: 'fourth',
    content: '业务组件,与业务紧密相关实现某种业务功能的组件集'
  },
  {
    title: '其他组件',
    name: 'fifth',
    content: '其他组件，更多种类组件'
  }
])
const instance = getCurrentInstance()
const { $message } = instance.appContext.config.globalProperties

function close(name) {
  $message({
    title: 'close 事件',
    message: '关闭 ' + name + ' 页签'
  })

  Tabs.value = Tabs.value.filter((tab) => {
    return tab.name !== name
  })
}
</script>
