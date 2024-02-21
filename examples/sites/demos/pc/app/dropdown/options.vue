<template>
  <div>
    <p>场景1：使用 menu-options 属性配置 tiny-dropdown</p>
    <tiny-dropdown :menu-options="menuOptions"></tiny-dropdown>
    <p>场景2：使用 menu-options 和 title 属性配置 tiny-dropdown</p>
    <tiny-dropdown :menu-options="menuOptions" title="点击下拉" @item-click="itemClick"></tiny-dropdown>
    <p>场景3：使用 menu-options 和 text-field 属性配置 tiny-dropdown</p>
    <tiny-dropdown :menu-options="menuOptions1" text-field="name"></tiny-dropdown>
    <p>场景4：使用 options 属性配置 tiny-dropdown-menu</p>
    <tiny-dropdown>
      <template #dropdown>
        <tiny-dropdown-menu :options="options"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <p>场景5：使用 options 和 text-field 属性配置 tiny-dropdown-menu</p>
    <tiny-dropdown>
      <template #dropdown>
        <tiny-dropdown-menu :options="options1" text-field="name"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
  </div>
</template>

<script>
import { iconStarDisable } from '@opentiny/vue-icon'
import { Dropdown, DropdownMenu, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu
  },
  data() {
    return {
      options: [
        {
          label: '老友粉',
          disabled: true
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
      ],
      options1: [
        {
          name: '老友粉',
          disabled: true
        },
        {
          name: '狮子头',
          divided: true
        },
        {
          name: '黄金糕',
          divided: true,
          icon: iconStarDisable()
        }
      ],
      menuOptions: {
        options: [
          {
            label: '老友粉',
            disabled: true
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
      },
      menuOptions1: {
        options: [
          {
            name: '老友粉',
            disabled: true
          },
          {
            name: '狮子头',
            divided: true
          },
          {
            name: '黄金糕',
            divided: true,
            icon: iconStarDisable()
          }
        ],
        textField: 'name'
      }
    }
  },
  methods: {
    itemClick(data) {
      Notify({
        type: 'info',
        title: 'itemData',
        message: `配置式可以通过data.itemData获取配置数据：${JSON.stringify(data.itemData)}`,
        position: 'top-right',
        duration: 2000
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
