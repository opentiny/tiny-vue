<template>
  <div>
    <p>场景1：按钮类型 + 循环 tiny-dropdown-item</p>

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

    <p>场景2：配置式</p>
    <tiny-dropdown @item-click="itemClick" @button-click="buttonClick" @visible-change="visibleChange">
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

const itemClick = (data) => {
  Notify({
    type: 'info',
    title: 'itemClick 回调事件',
    message: `使用 dropdown-item 的label属性：${data.vm.label},\n 使用 dropdown-item 的默认插槽：${data.vm.$el.innerText}`,
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
</style>
