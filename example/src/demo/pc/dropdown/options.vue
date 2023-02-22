<template>
  <div>
    <tiny-dropdown>
      <span>
        <span>下拉菜单</span>
        <icon-chevron-down></icon-chevron-down>
      </span>
      <template #dropdown>
        <tiny-dropdown-menu :options="options"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>

    <tiny-dropdown>
      <span>
        <span>下拉菜单</span>
        <icon-chevron-down></icon-chevron-down>
      </span>
      <template #dropdown>
        <tiny-dropdown-menu :options="options1" textField="name"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>

    <tiny-dropdown :menuOptions="menuOptions" title="点击下拉" @item-click="itemClick"></tiny-dropdown>

    <tiny-dropdown :menuOptions="menuOptions">
      <span>
        <span>自定义下拉菜单</span>
        <icon-chevron-down></icon-chevron-down>
      </span>
    </tiny-dropdown>

    <tiny-dropdown :menuOptions="menuOptions1" textField="name">
      <span>
        <span>下拉菜单</span>
        <icon-chevron-down></icon-chevron-down>
      </span>
    </tiny-dropdown>
  </div>
</template>

<script>
import { IconChevronDown, IconStarDisable } from '@opentiny/vue-icon'
import { Dropdown, DropdownMenu, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    IconChevronDown: IconChevronDown()
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
          icon: IconStarDisable()
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
          icon: IconStarDisable()
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
            icon: IconStarDisable()
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
            icon: IconStarDisable()
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
        message: `配置式可以通过 data.itemData 获取配置数据：${JSON.stringify(data.itemData)}`,
        position: 'top-right',
        duration: 2000
      })
    }
  }
}
</script>

<style scoped>
.tiny-dropdown {
  margin-right: 20px;
}
</style>
