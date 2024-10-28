<template>
  <div>
    <p>场景1：使用 menu-options 属性定义 children</p>
    <tiny-dropdown :menu-options="menuOptions" @item-click="itemClick"></tiny-dropdown>
    <br />
    <p>场景2：使用 options 属性定义 children</p>
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

<script>
import { iconStarDisable } from '@opentiny/vue-icon'
import { Dropdown, DropdownMenu, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu
  },
  data() {
    return {
      options: [
        {
          label: '老友粉1',
          icon: iconStarDisable(),
          children: [
            {
              label: '老友粉2.1',
              children: [{ label: '狮子头3.1' }]
            },
            { label: '老友粉2.2' },
            { label: '老友粉2.3', disabled: true }
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
      ],
      options1: [
        {
          label: '老友粉'
        },
        {
          label: '狮子头',
          children: [
            {
              label: '狮子头2.1'
            },
            { label: '狮子头2.2' },
            { label: '狮子头2.3', disabled: true }
          ]
        },
        {
          label: '黄金糕',
          disabled: true
        }
      ],
      menuOptions: {
        options: [
          {
            label: '老友粉',
            icon: iconStarDisable(),
            children: [
              {
                label: '老友粉2.1',
                children: [{ label: '狮子头3.1' }]
              },
              { label: '老友粉2.2' },
              { label: '老友粉2.3', disabled: true }
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
      }
    }
  },
  methods: {
    itemClick(data) {
      Modal.message({
        message: `配置式可以通过 data.itemData 获取配置数据：${JSON.stringify(data.itemData)}`
      })
    }
  }
}
</script>

<style lang="less" scoped>
p {
  line-height: 1.5;
  font-size: 14px;
}
</style>
