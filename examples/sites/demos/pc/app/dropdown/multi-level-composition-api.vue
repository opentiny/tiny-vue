<template>
  <div>
    <p>场景 1：使用 menu-options 属性定义 children</p>
    <tiny-dropdown :menu-options="menuOptions" @item-click="itemClick"></tiny-dropdown>
    <br />

    <p>场景 2：使用 options 属性定义 children</p>
    <tiny-dropdown @item-click="itemClick">
      <template #dropdown>
        <tiny-dropdown-menu :options="options"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <br />
    <br />
    <tiny-dropdown @item-click="itemClick">
      <template #dropdown>
        <tiny-dropdown-menu :options="options1"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <br />
    <br />
    <tiny-dropdown @item-click="itemClick" border>
      <template #dropdown>
        <tiny-dropdown-menu :options="options1"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <br />
    <br />
    <tiny-dropdown @item-click="itemClick" border type="primary">
      <template #dropdown>
        <tiny-dropdown-menu :options="options1"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { iconStarDisable } from '@opentiny/vue-icon'
import { TinyDropdown, TinyDropdownMenu, TinyModal } from '@opentiny/vue'

const options = reactive([
  {
    label: '老友粉 1',
    icon: iconStarDisable(),
    children: [
      {
        label: '老友粉 2.1',
        children: [{ label: '狮子头 3.1' }]
      },
      { label: '老友粉 2.2' },
      { label: '老友粉 2.3', disabled: true }
    ]
  },
  {
    label: '狮子头',
    disabled: true
  },
  {
    label: '黄金糕',
    icon: iconStarDisable()
  }
])

const options1 = reactive([
  {
    label: '老友粉'
  },
  {
    label: '狮子头',
    children: [
      {
        label: '狮子头 2.1'
      },
      { label: '狮子头 2.2' },
      { label: '狮子头 2.3', disabled: true }
    ]
  },
  {
    label: '黄金糕',
    disabled: true
  }
])

const menuOptions = reactive({
  options: [
    {
      label: '老友粉',
      icon: iconStarDisable(),
      children: [
        {
          label: '老友粉 2.1',
          children: [{ label: '狮子头 3.1' }]
        },
        { label: '老友粉 2.2' },
        { label: '老友粉 2.3', disabled: true }
      ]
    },
    {
      label: '狮子头',
      divided: true
    },
    {
      label: '黄金糕',
      divided: true,
      icon: iconStarDisable()
    }
  ]
})

const itemClick = (data) => {
  TinyModal.message({
    message: `配置式可以通过 data.itemData 获取配置数据：${JSON.stringify(data.itemData)}`
  })
}
</script>

<style lang="less" scoped>
p {
  line-height: 1.5;
  font-size: 14px;
}
</style>
