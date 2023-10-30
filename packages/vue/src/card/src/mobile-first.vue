<template>
  <div
    data-tag="tiny-card"
    :class="
      m(
        gcls('card'),
        gcls(`size-${state.size}`),
        gcls(`status-${state.status}`),
        gcls(!state.autoWidth && `size-${state.size}-width`),
        state.itemChecked ? 'border-color-brand' : '',
        state.disabled ? 'bg-color-bg-2' : '',
        state.customClass
      )
    "
    @click="$emit('click', $event)"
  >
    <div data-tag="tiny-card-body" :class="[state.type === 'text' ? 'flex' : 'block']">
      <div
        data-tag="tiny-card-checkbox"
        v-if="state.checkType === 'checkbox' && state.type === 'text'"
        :class="gcls('checkbox')"
      >
        <tiny-checkbox
          v-model="state.model"
          :label="label"
          :disabled="state.disabled"
          @change="handleChange"
        ></tiny-checkbox>
      </div>
      <div
        data-tag="tiny-card-radio"
        v-if="state.checkType === 'radio' && state.type === 'text'"
        :class="gcls('radio')"
      >
        <tiny-radio v-model="state.model" :label="label" :disabled="state.disabled" @change="handleChange"
          ><span></span
        ></tiny-radio>
      </div>
      <div data-tag="tiny-card-image" v-if="state.type === 'image'">
        <img :src="src" class="w-full aspect-video bg-cover" />
      </div>
      <div data-tag="tiny-card-vadio" v-if="state.type === 'video'">
        <video class="w-full aspect-video" :src="src" controls></video>
      </div>
      <div data-tag="tiny-card-logo" class="flex-1" :class="gcls(`size-${state.size}-padding`)">
        <div v-if="state.type === 'logo'" :class="gcls('logo')">
          <img :src="src" class="bg-contain" />
        </div>
        <div
          data-tag="tiny-card-title"
          v-if="title || slots.title"
          class="flex items-start"
          :class="[state.type === 'logo' && 'text-center justify-center mb-1']"
        >
          <slot name="title-left"> </slot>
          <slot name="title">
            <p :class="gcls('title')">{{ title }}</p>
          </slot>
          <slot name="title-right"> </slot>
        </div>
        <div
          data-tag="tiny-card-main"
          :class="m(gcls('main'), state.type === 'logo' ? 'text-center pb-2' : '')"
          :style="{ height: state.height }"
        >
          <slot> </slot>
        </div>
      </div>
    </div>
    <div data-tag="tiny-card-footer" v-if="state.effectOptions.length || slots.footer" class="w-full">
      <div v-if="slots.footer" :class="gcls('footer')">
        <slot name="footer"> </slot>
      </div>
      <div v-if="state.effectOptions.length" :class="gcls('options')">
        <div
          class="cursor-pointer"
          v-for="(item, index) in state.effectOptions.slice(0, state.sliceNum)"
          :key="item.text + index"
          :class="[item.disabled ? 'text-color-text-disabled cursor-not-allowed' : '']"
          @click.stop="handelIconClick(item, index, $event)"
        >
          <component :is="item.icon" class="w-4 h-4" :class="[item.disabled ? 'fill-color-icon-disabled' : '']" />
          <span v-if="item.text" class="ml-1 align-middle">{{ item.text }}</span>
        </div>
        <div
          class="cursor-pointer"
          :class="[state.effectOptions[state.sliceNum].disabled ? 'text-color-text-disabled cursor-not-allowed' : '']"
          v-if="state.effectOptions.length === state.iconNum"
          @click.stop="handelIconClick(state.effectOptions[state.sliceNum], state.sliceNum, $event)"
        >
          <component
            :is="state.effectOptions[state.sliceNum].icon"
            class="w-4 h-4"
            :class="[state.effectOptions[state.sliceNum].disabled ? 'fill-color-icon-disabled' : '']"
          />
          <span v-if="state.effectOptions[state.sliceNum].text" class="ml-1 align-middle">{{
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
                  @click.stop="handelIconClick(item, index + state.sliceNum, $event)"
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/card/vue'
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { classes } from './token'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'
import Checkbox from '@opentiny/vue-checkbox'
import Radio from '@opentiny/vue-radio'
import { IconEllipsis } from '@opentiny/vue-icon'
const $constants = {
  CARD_GROUP: 'CardGroup'
}

export default defineComponent({
  name: $prefix + 'Card',
  emits: ['icon-click', 'update:modelValue', 'change'],
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    TinyCheckbox: Checkbox,
    TinyRadio: Radio,
    IconEllipsis: IconEllipsis()
  },
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: {},
    src: String,
    title: String,
    customClass: String,
    height: String,
    label: {},
    autoWidth: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => {
        return []
      }
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
    status: {
      type: String,
      default: 'default'
    },
    checkType: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      classes,
      mono: true
    })
  }
})
</script>
