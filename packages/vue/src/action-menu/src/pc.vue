<template>
  <div class="tiny-action-menu">
    <ul :class="{ 'tiny-action-menu__wrap': true, 'tiny-action-menu__card-mode': state.isCardMode }">
      <li
        v-for="(visableItem, index) in state.visibleOptions"
        :key="index"
        :class="[
          'tiny-action-menu__item',
          'tiny-action-menu__item-visable',
          { 'is-disabled': visableItem.disabled, 'tiny-action-menu__card-item': state.isCardMode }
        ]"
      >
        <tiny-dropdown-item
          :item-data="visableItem"
          :label="visableItem[textField]"
          :text-field="textField"
          :disabled="visableItem.disabled"
          :icon="visableItem.icon"
          @item-click="handleItemClick"
        >
          <template #default="{ itemData }">
            <slot name="item" :data="itemData"></slot>
          </template>
        </tiny-dropdown-item>
        <span
          v-if="index !== state.visibleOptions.length - 1 || state.moreOptions.length"
          class="tiny-action-menu__item-line"
          :style="{ margin: '0 ' + state.spacing }"
        ></span>
      </li>

      <li v-if="state.moreOptions.length" class="tiny-action-menu__item">
        <tiny-dropdown
          :title="state.moreText"
          :trigger="trigger"
          :show-icon="showIcon"
          @item-click="handleItemClick"
          @handle-click="handleMoreClick"
          @visible-change="visibleChange"
        >
          <template v-if="state.suffixIcon" #suffix-icon>
            <component :is="state.suffixIcon"></component>
          </template>
          <template #dropdown>
            <tiny-dropdown-menu :text-field="textField" :popper-class="popperClass">
              <tiny-dropdown-item
                v-for="(item, index) in state.moreOptions"
                :key="index"
                :divided="item.divided"
                :item-data="item"
                :label="item[textField]"
                :disabled="item.disabled"
              >
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

<script lang="ts">
import type { IActionMenuApi } from '@opentiny/vue-renderless/types/action-menu.type'
import { setup, $prefix, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/action-menu/vue'
import { iconEllipsis } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/action-menu/index.less'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'

export default defineComponent({
  name: $prefix + 'ActionMenu',
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    TinyIconEllipsis: iconEllipsis()
  },
  emits: ['more-click', 'item-click', 'visible-change'],
  props: {
    options: {
      type: Array,
      default: () => []
    },
    maxShowNum: Number,
    moreText: {
      type: String
    },
    spacing: {
      type: [String, Number]
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
    },
    suffixIcon: Object,
    showIcon: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'default'
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IActionMenuApi
  }
})
</script>
