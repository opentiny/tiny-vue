<template>
  <div
    role="column-list-item"
    class="block sm:flex w-full p-3 sm:pb-3 text-sm sm:text-xs border-0.5 sm:border rounded-lg sm:rounded border-color-border-separator"
    :class="[
      state.size === 'small' ? 'min-h-[4.125rem]' : 'min-h-[5.5rem]',
      state.effectOptions.length ? 'pb-0' : 'pb-3'
    ]"
  >
    <div
      v-if="state.showCheckbox"
      class="float-left sm:float-none mr-3 [&_[data-tag=tiny-checkbox]]:p-0 [&_[data-tag=tiny-checkbox]>span>span]:p-0 [&_[data-tag=tiny-checkbox]>span:nth-child(2)]:hidden"
    >
      <tiny-checkbox v-model="state.model" :disabled="state.disabled" :label="label"></tiny-checkbox>
    </div>
    <div
      v-if="image || (slots.image && slots.image())"
      class="float-left block sm:flex items-center mr-3 shrink-0"
      :class="[state.size === 'small' ? 'w-9 h-[2.625rem]' : 'w-[3.625rem] h-16']"
    >
      <slot name="image">
        <img :src="image" class="rounded" :class="[state.size === 'small' ? 'w-9 h-9' : 'w-[3.625rem] h-[3.625rem]']" />
      </slot>
    </div>
    <div
      class="block text-left sm:flex flex-auto flex-wrap"
      :class="[state.size === 'small' ? 'min-h-[2.625rem]' : 'min-h-[4rem]']"
    >
      <div
        v-if="slots.column1 && slots.column1()"
        class="min-w-[10rem] overflow-hidden sm:ml-0 pr-0 sm:pr-5"
        :style="{ 'flex-grow': flexGrow[0] || 0, 'flex-basis': flexBasis[0] || 'auto' }"
      >
        <slot name="column1"></slot>
      </div>
      <div
        v-if="slots.column2 && slots.column2()"
        class="min-w-[10rem] overflow-hidden pr-0 sm:pr-5 mt-1 sm:mt-0"
        :class="[state.showCheckbox ? 'pl-[1.875rem] sm:pl-0' : '']"
        :style="{ 'flex-grow': flexGrow[1] || 0, 'flex-basis': flexBasis[1] || 'auto' }"
      >
        <slot name="column2"></slot>
      </div>
      <div
        v-if="slots.column3 && slots.column3()"
        class="min-w-[10rem] overflow-hidden pr-0 sm:pr-5 mt-1 sm:mt-0"
        :class="[state.showCheckbox ? 'pl-[1.875rem] sm:pl-0' : '']"
        :style="{ 'flex-grow': flexGrow[2] || 0, 'flex-basis': flexBasis[2] || 'auto' }"
      >
        <slot name="column3"></slot>
      </div>
      <div
        v-if="slots.column4 && slots.column4()"
        class="min-w-[10rem] overflow-hidden pr-0 sm:pr-5 mt-1 sm:mt-0"
        :class="[state.showCheckbox ? 'pl-[1.875rem] sm:pl-0' : '']"
        :style="{ 'flex-grow': flexGrow[3] || 0, 'flex-basis': flexBasis[3] || 'auto' }"
      >
        <slot name="column4"></slot>
      </div>
    </div>
    <hr
      v-if="state.effectOptions.length || (slots.operate && slots.operate())"
      class="block sm:hidden mt-2.5 -mx-3 border-t-0.5 border-t-color-border-separator"
    />
    <div
      v-if="state.effectOptions.length || (slots.operate && slots.operate())"
      class="w-full sm:w-auto px-0 sm:pl-5 sm:pr-2 h-[2.875rem] sm:h-auto flex flex-row sm:flex-col items-center justify-around sm:justify-center sm:items-start shadow-none sm:shadow-[-6px_0px_5px_-5px_#e8ebef] shrink-0 text-color-text-primary"
    >
      <slot name="operate">
        <div
          class="cursor-pointer mb-0 sm:mb-2"
          v-for="(item, index) in state.effectOptions.slice(0, state.sliceNum)"
          :key="item.text + index"
          :class="[item.disabled ? 'text-color-text-disabled cursor-not-allowed' : '']"
          @click="handelIconClick(item, index)"
        >
          <component :is="item.icon" class="w-4 h-4" :class="[item.disabled ? 'fill-color-icon-disabled' : '']" />
          <span v-if="item.text" class="ml-1 align-middle sm:align-bottom">{{ item.text }}</span>
        </div>
        <div
          class="cursor-pointer"
          :class="[state.effectOptions[state.sliceNum].disabled ? 'text-color-text-disabled cursor-not-allowed' : '']"
          v-if="state.effectOptions.length === state.iconNum"
          @click="handelIconClick(state.effectOptions[state.sliceNum], state.sliceNum)"
        >
          <component
            :is="state.effectOptions[state.sliceNum].icon"
            class="w-4 h-4"
            :class="[state.effectOptions[state.sliceNum].disabled ? 'fill-color-icon-disabled' : '']"
          />
          <span v-if="state.effectOptions[state.sliceNum].text" class="ml-1 align-middle sm:align-bottom">{{
            state.effectOptions[state.sliceNum].text
          }}</span>
        </div>
        <tiny-dropdown v-if="state.effectOptions.length > state.iconNum" show-self-icon>
          <component :is="iconMore" class="w-4 h-4" />
          <span v-if="state.effectOptions[0].text" class="ml-1 text-color-text-primary">{{ t('ui.base.more') }}</span>
          <template #dropdown>
            <tiny-dropdown-menu placement="bottom">
              <tiny-dropdown-item
                v-for="(item, index) in state.effectOptions.slice(state.sliceNum)"
                :key="item.text + index"
              >
                <div
                  @click="handelIconClick(item, index + state.sliceNum)"
                  :class="['px-2', item.disabled ? 'text-color-text-disabled cursor-not-allowed' : '']"
                >
                  <component
                    :is="item.icon"
                    class="w-4 h-4"
                    :class="[item.disabled ? 'fill-color-icon-disabled' : '']"
                  />
                  <span v-if="item.text">{{ item.text }}</span>
                </div>
              </tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </slot>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/column-list-item/vue'
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'
import Checkbox from '@opentiny/vue-checkbox'
import { IconEllipsis } from '@opentiny/vue-icon'

const $constants = {
  COLUMN_GROUP: 'ColumnListGroup'
}

export default defineComponent({
  name: $prefix + 'ColumnListItem',
  emits: ['icon-click', 'update:modelValue', 'change'],
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    TinyCheckbox: Checkbox,
    IconEllipsis: IconEllipsis()
  },
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: {},
    label: {},
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    flexGrow: {
      type: Array,
      default: () => {
        return [1, 1, 1, 1]
      },
      validator(value) {
        return value.every((val) => typeof val === 'number' && val >= 0)
      }
    },
    flexBasis: {
      type: Array,
      default: () => {
        return []
      }
    },
    image: {
      type: String,
      default: ''
    },
    iconMore: {
      type: [Object, String],
      default: () => {
        return IconEllipsis()
      }
    },
    size: {
      type: String,
      default: 'medium'
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    checkboxDisabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
