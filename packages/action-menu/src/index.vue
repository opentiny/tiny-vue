<template>
  <div class="tiny-action-menu">
    <ul class="tiny-action-menu__wrap">
      <li
        v-for="(visableItem, index) in state.visibleOptions"
        :key="index"
        :class="['tiny-action-menu__item', 'tiny-action-menu__item-visable', { 'is-disabled': visableItem.disabled }]"
      >
        <tiny-dropdown-item :itemData="visableItem" :label="visableItem[textField]" :textField="textField" @item-click="handleItemClick">
          <template #default="{ itemData }">
            <slot name="item" :data="itemData"></slot>
          </template>
        </tiny-dropdown-item>
        <span class="tiny-action-menu__item-line" :style="{ margin: '0 ' + state.spacing }"></span>
      </li>

      <li v-if="state.moreOptions.length" class="tiny-action-menu__item">
        <tiny-dropdown :title="moreText" :trigger="trigger" @item-click="handleItemClick" @handle-click="handleMoreClick" @visible-change="visibleChange">
          <template #dropdown>
            <tiny-dropdown-menu :textField="textField" :popperClass="popperClass">
              <tiny-dropdown-item v-for="(item, index) in state.moreOptions" :key="index" :itemData="item" :label="item[textField]">
                <template #default="{ itemData }">
                  <slot name="item" :data="itemData"></slot>
                </template>
              </tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
import { setup, $prefix } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/action-menu/vue'
import '@opentiny/vue-theme/action-menu/index.css'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'
import { t } from '@opentiny/vue-locale'

export default {
  name: $prefix + 'ActionMenu',
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem
  },
  emits: ['more-click', 'item-click', 'visible-change'],
  props: {
    options: {
      type: Array,
      default: () => []
    },
    maxShowNum: {
      type: Number,
      default: 2
    },
    moreText: {
      type: String,
      default: t('ui.actionMenu.moreText')
    },
    spacing: {
      type: [String, Number],
      default: '5px'
    },
    textField: {
      type: String,
      default: 'label'
    },
    popperClass: {
      type: String,
      default: ''
    },
    popperAppendToBody: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: 'hover'
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
