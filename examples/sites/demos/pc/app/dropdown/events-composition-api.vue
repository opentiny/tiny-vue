<template>
  <div>
    <p class="demo-dropdown">场景1：按钮类型 + 循环 tiny-dropdown-item</p>

    <tiny-dropdown split-button @item-click="itemClick" @button-click="buttonClick" @visible-change="visibleChange">
      <template #dropdown>
        <tiny-dropdown-menu>
          <tiny-dropdown-item
            v-for="(item, index) in options"
            :key="index"
            :label="item.label"
            :disabled="item.disabled"
            :divided="item.divided"
            :icon="item.icon"
            :item-data="item"
          ></tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <br /><br />
    <p class="demo-dropdown">场景2：配置式</p>
    <tiny-dropdown class="options-event" @item-click="itemClick" @visible-change="visibleChange">
      <template #dropdown>
        <tiny-dropdown-menu :options="options"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
  </div>
</template>

<script setup>
import {
  Dropdown as TinyDropdown,
  DropdownMenu as TinyDropdownMenu,
  DropdownItem as TinyDropdownItem,
  Notify
} from '@opentiny/vue'
import { iconStarDisable } from '@opentiny/vue-icon'

const options = [
  {
    label: '黄金糕'
  },
  {
    label: '狮子头',
    disabled: true
  },
  {
    label: '螺蛳粉',
    divided: true
  },
  {
    label: '双皮奶',
    icon: iconStarDisable()
  },
  {
    label: '蚵仔煎'
  }
]

const itemClick = (data, vm) => {
  // Aurora主题 item-click 有第二个参数，其他主题只有第一个参数
  const label = vm?.label || data.vm.label

  Notify({
    type: 'info',
    title: 'itemClick 回调事件',
    message: `使用 dropdown-item 的label属性：${label},\n 使用 dropdown-item 的默认插槽：${data.vm.$el.innerText}`,
    position: 'top-right',
    duration: 2000
  })
}

const buttonClick = () => {
  Notify({ message: '下拉菜单内置按钮点击事件', status: 'info' })
}

const visibleChange = (status) => {
  Notify({
    message: `下拉菜单显隐事件，当前为${status ? '显示' : '隐藏'}`,
    status: 'info'
  })
}
</script>

<style lang="less" scoped>
p {
  line-height: 1.5;
  font-size: 14px;
}
.demo-dropdown {
  margin-bottom: 8px;
}
</style>
