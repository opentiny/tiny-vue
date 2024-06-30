<template>
  <div class="tiny-demo-drawer">
    <tiny-button @click="showDrawer" type="primary"> 点击打开抽屉 </tiny-button>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { Drawer, Button as TinyButton } from '@opentiny/vue'
import { iconHelp } from '@opentiny/vue-icon'

let drawerInstance = null

const closeDrawer = () => {
  if (drawerInstance) {
    drawerInstance.close()
  }
}
const IconHelp = iconHelp()
const config = ref({
  // props
  title: '这是一个通过方法打开的抽屉',
  showClose: false,
  showFooter: true,
  // 通过 events 监听事件
  events: {
    open: (instance) => console.log('open 事件', instance),
    close: () => console.log('close 事件')
  },
  // 通过属性 customSlots 设置插槽, 插槽内容可以是 string | VNode | ({h, $drawer}) => VNode
  customSlots: {
    // 使用 h 函数
    default: (h) => h('p', { class: 'drawer-content' }, '抽屉主体内容。'),
    // 返回 VNode 节点的方法, 可通过参数中 $drawer 访问到组件实例
    headerRight: () => <IconHelp></IconHelp>,
    // 直接赋值 VNode
    footer: (
      <TinyButton type="primary" onClick={closeDrawer}>
        点击关闭
      </TinyButton>
    )
  }
})
const showDrawer = () => {
  drawerInstance = Drawer.service(config.value)
}
</script>

<style scope>
.drawer-content {
  padding: 20px 0;
}
</style>
