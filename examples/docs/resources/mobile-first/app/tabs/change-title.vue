<template>
  <div>
    <tiny-button @click="handleClick">
      改变标题
    </tiny-button>
    <tiny-tabs v-model="activeName">
      <tiny-tab-item :title="title" name="first">
        导航组件,帮助网站访问者浏览站点的组件.
      </tiny-tab-item>
      <tiny-tab-item title="业务组件" name="second">
        业务组件,与业务紧密相关实现某种业务功能的组件集
      </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script>
import { Tabs, TabItem, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem,
    TinyButton: Button
  },
  data() {
    return {
      activeName: 'first',
      title: '导航组件',
      count: 1
    }
  },
  methods: {
    handleClick() {
      const originTitle = '导航组件'
      this.title = originTitle + this.count++
    }
  }
}
</script>
