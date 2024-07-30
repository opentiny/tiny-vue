<template>
  <div>
    <tiny-button @click="handleClick">改变标题</tiny-button>
    <tiny-tabs v-model="activeName">
      <tiny-tab-item name="first">
        <template #title>
          <div class="slot-content">
            <tiny-icon-calendar class="demp-tabs-icon"></tiny-icon-calendar>
            <span class="slot-message">表单组件</span>
          </div>
        </template>
        <div>表单组件,具有与用户交互，并可完成数据采集功能的控件。</div>
      </tiny-tab-item>
      <tiny-tab-item name="second">
        <template #title>
          <div class="slot-content">
            <tiny-icon-replies class="demp-tabs-icon icon-color"></tiny-icon-replies>
            <span class="slot-message">数据组件</span>
          </div>
        </template>
        <div>数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等</div>
      </tiny-tab-item>
      <tiny-tab-item :title="title" name="third"> 导航组件,帮助网站访问者浏览站点的组件. </tiny-tab-item>
      <tiny-tab-item title="业务组件" name="fourth"> 业务组件,与业务紧密相关实现某种业务功能的组件集 </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tabs as TinyTabs, TabItem as TinyTabItem, Button as TinyButton } from '@opentiny/vue'
import { iconCalendar, iconReplies } from '@opentiny/vue-icon'

const activeName = ref('second')
const title = ref('导航组件')
const count = ref(1)

const TinyIconCalendar = iconCalendar()
const TinyIconReplies = iconReplies()
const handleClick = () => {
  title.value = '导航组件' + count.value++
}
</script>

<style scoped>
.slot-content {
  height: 16px;
  line-height: 16px;
}
.slot-message {
  display: inline-block;
}
.demp-tabs-icon {
  vertical-align: top;
  margin-right: 4px;
}
.icon-color {
  fill: red;
}
</style>
