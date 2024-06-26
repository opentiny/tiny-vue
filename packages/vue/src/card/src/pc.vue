<template>
  <div
    class="tiny-card"
    :class="[
      `tiny-card--${state.size}`,
      `tiny-card--${state.status}`,
      state.autoWidth ? '' : `tiny-card--${state.size}-width`,
      state.itemChecked
        ? state.checkMode === 'badge'
          ? 'tiny-card--item-checkbox-checked'
          : 'tiny-card--item-checked'
        : '',
      state.disabled ? 'tiny-card--disabled' : '',
      state.customClass
    ]"
    @click="cardClick($event)"
  >
    <div class="tiny-card__body" :style="{ 'display': state.type === 'text' ? 'flex' : 'block' }">
      <div
        class="tiny-card--checkbox"
        v-if="state.checkType === 'checkbox' && state.type === 'text' && state.checkMode === 'normal'"
      >
        <tiny-checkbox
          v-model="state.model"
          :label="label"
          text=""
          :disabled="state.disabled"
          @change="handleChange"
        ></tiny-checkbox>
      </div>
      <div
        class="tiny-card--radio"
        v-if="state.checkType === 'radio' && state.type === 'text' && state.checkMode === 'normal'"
      >
        <tiny-radio v-model="state.model" :label="label" :disabled="state.disabled" @change="handleChange">
          <!-- 为什么空一个span -->
          <span></span>
        </tiny-radio>
      </div>
      <div class="tiny-card--image" v-if="state.type === 'image'">
        <img :src="src" />
      </div>
      <div class="tiny-card--video" v-if="state.type === 'video'">
        <video :src="src" controls></video>
      </div>
      <div class="tiny-card--logo" :class="`tiny-card--${state.size}-padding`">
        <div class="tiny-card--logo__head" v-if="state.type === 'logo'">
          <img :src="src" />
        </div>
        <div
          class="tiny-card--logo__title"
          v-if="title || slots.title"
          :class="state.type === 'logo' ? 'tiny-card--logo__title--type-logo' : ''"
        >
          <slot name="title-left"> </slot>
          <slot name="title">
            <p class="tiny-card--logo__title--p">{{ title }}</p>
          </slot>
          <slot name="title-right"> </slot>
        </div>
        <div
          class="tiny-card--logo__main"
          :class="state.type === 'logo' ? 'tiny-card--logo__main-type-logo' : ''"
          :style="{ height: state.height }"
        >
          <slot> </slot>
        </div>
      </div>
    </div>
    <div class="tiny-card__footer" v-if="state.effectOptions.length || slots.footer">
      <div v-if="slots.footer" class="tiny-card__footer-footer">
        <slot name="footer"> </slot>
      </div>
      <div v-if="state.effectOptions.length" class="tiny-card__footer-options">
        <div
          class="tiny-card__footer-options-div"
          v-for="(item, index) in state.effectOptions.slice(0, state.sliceNum)"
          :key="item.text + index"
          :class="item.disabled ? 'tiny-card__footer-options-disabled' : ''"
          @click.stop="handelIconClick(item, index, $event)"
        >
          <component
            :is="item.icon"
            class="tiny-card__footer-options-icon"
            :class="item.disabled ? 'tiny-card__footer-options-icon-disabled' : ''"
          />
          <span v-if="item.text" class="tiny-card__footer-options-span">{{ item.text }}</span>
        </div>
        <div
          class="tiny-card__footer-options-div"
          :class="state.effectOptions[state.sliceNum].disabled ? 'tiny-card__footer-options-disabled' : ''"
          v-if="state.effectOptions.length === state.iconNum"
          @click.stop="handelIconClick(state.effectOptions[state.sliceNum], state.sliceNum, $event)"
        >
          <component
            :is="state.effectOptions[state.sliceNum].icon"
            class="tiny-card__footer-options-icon"
            :class="state.effectOptions[state.sliceNum].disabled ? 'tiny-card__footer-options-icon-disabled' : ''"
          />
          <span v-if="state.effectOptions[state.sliceNum].text" class="tiny-card__footer-options-span">{{
            state.effectOptions[state.sliceNum].text
          }}</span>
        </div>
        <tiny-dropdown
          class="tiny-card__footer-options-dropdown"
          v-if="state.effectOptions.length > state.iconNum"
          show-self-icon
        >
          <component :is="iconMore" class="tiny-card__footer-options-icon" />
          <span v-if="state.effectOptions[0].text" class="tiny-card__footer-more">{{ t('ui.base.more') }}</span>
          <template #dropdown>
            <tiny-dropdown-menu placement="bottom">
              <tiny-dropdown-item
                v-for="(item, index) in state.effectOptions.slice(state.sliceNum)"
                :key="item.text + index"
              >
                <div
                  @click.stop="handelIconClick(item, index + state.sliceNum, $event)"
                  class=""
                  :class="[
                    'tiny-card__footer-dropdown-item',
                    item.disabled ? 'tiny-card__footer-dropdown-item-disabled' : ''
                  ]"
                >
                  <component
                    :is="item.icon"
                    class="tiny-card__footer-options-icon"
                    :class="item.disabled ? 'tiny-card__footer-options-icon-disabled' : ''"
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
import { props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { classes } from './token'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'
import Checkbox from '@opentiny/vue-checkbox'
import Radio from '@opentiny/vue-radio'
import { IconEllipsis } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/card/index.less'

export default defineComponent({
  name: $prefix + 'Card',
  emits: ['icon-click', 'update:modelValue', 'change', 'click'],
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    TinyCheckbox: Checkbox,
    TinyRadio: Radio,
    IconEllipsis: IconEllipsis()
  },
  props: [
    ...props,
    '_constants',
    'modelValue',
    'src',
    'title',
    'customClass',
    'height',
    'label',
    'autoWidth',
    'options',
    'iconMore',
    'size',
    'status',
    'checkType',
    'type',
    'disabled',
    'checkMode'
  ],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      classes
    })
  }
})
</script>
