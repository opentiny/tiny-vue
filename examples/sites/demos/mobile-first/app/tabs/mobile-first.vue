<template>
  <tiny-tabs
    ref="tabs"
    v-model="activeName"
    :with-close="true"
    :with-add="true"
    @close="close"
    @add="add"
    @click="click"
    @edit="edit"
  >
    <tiny-tab-item title="页签六" name="6">
      <template #title> title插槽-6 </template>
      <template #setting>
        <tiny-dropdown @item-click="itemClick" :show-icon="false">
          <template #default>
            <span>
              <icon-setting></icon-setting>
            </span>
          </template>
          <template #dropdown>
            <tiny-dropdown-menu>
              <tiny-dropdown-item item-data="op-6-1"> 操作1 </tiny-dropdown-item>
              <tiny-dropdown-item item-data="op-6-2"> 操作2 </tiny-dropdown-item>
              <tiny-dropdown-item item-data="op-6-3"> 操作3 </tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </template>
      <span>页签六内容</span>
    </tiny-tab-item>
    <tiny-tab-item title="页签七" name="7" :render-title="renderTitle" :render-setting="renderSetting">
      页签七内容
    </tiny-tab-item>
    <tiny-tab-item title="页签八" name="8"> 页签八内容 </tiny-tab-item>
    <tiny-tab-item title="页签九" name="9"> 页签九内容 </tiny-tab-item>
    <tiny-tab-item title="页签十" name="10"> 页签十内容 </tiny-tab-item>
    <tiny-tab-item title="页签十一" name="11"> 页签十一内容 </tiny-tab-item>
    <tiny-tab-item title="页签十二" name="12"> 页签十二内容 </tiny-tab-item>
    <tiny-tab-item title="页签十三" name="13"> 页签十三内容 </tiny-tab-item>
    <tiny-tab-item title="页签十四" name="14"> 页签十四内容 </tiny-tab-item>
    <tiny-tab-item title="页签十五" name="15"> 页签十五内容 </tiny-tab-item>
    <tiny-tab-item title="页签十六" name="16"> 页签十六内容 </tiny-tab-item>
    <template #custom>
      <span>custom插槽-设置</span>
    </template>
  </tiny-tabs>
</template>

<script>
import { Tabs, TabItem, Modal, Dropdown, DropdownMenu, DropdownItem } from '@opentiny/vue'
import { IconSetting } from '@opentiny/vue-icon'
import { h } from '@opentiny/vue-common'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    IconSetting: IconSetting()
  },
  data() {
    return { activeName: '16' }
  },
  methods: {
    edit(targetName, action) {
      Modal.message(`edit事件 - ${targetName} - ${action}`)
    },
    click(tab) {
      Modal.message(`click事件 - ${tab.name}`)
    },
    close(name) {
      Modal.message(`close事件 - ${name}`)
    },
    add() {
      Modal.message('add事件')
    },
    itemClick(itemData) {
      const parts = itemData.split('-')
      Modal.message('点击了' + parts[1] + '的操作' + parts[2])
    },
    renderTitle() {
      return h('span', 'renderTitle')
    },
    renderSetting() {
      return h('span', 'renderSetting')
    }
  }
}
</script>
