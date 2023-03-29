<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <div
    ref="reference"
    :class="[
      'tiny-cascader',
      state.realSize && `tiny-cascader--${state.realSize}`,
      { 'is-disabled': state.isDisabled },
      { 'tiny-cascader-multiple': state.multiple }
    ]"
    v-clickoutside="() => toggleDropDownVisible(false)"
    @mouseenter="state.inputHover = true"
    @mouseleave="state.inputHover = false"
    @click="() => toggleDropDownVisible(state.readonly ? undefined : true)"
    @keydown="handleKeyDown"
  >
    <tiny-input
      ref="input"
      :model-value="state.multiple ? state.presentText : state.inputValue"
      :size="state.realSize"
      :placeholder="state.placeholder"
      :readonly="state.readonly"
      :disabled="state.isDisabled"
      :validate-event="false"
      :class="{ 'is-focus': state.dropDownVisible }"
      @focus="handleFocus"
      @blur="handleBlur"
      @update:modelValue="handleInput"
    >
      <template #suffix>
        <icon-close v-if="state.clearBtnVisible" key="clear" class="tiny-input__icon" @click.stop="handleClear"></icon-close>
        <component
          v-else
          :is="state.dropDownVisible ? 'icon-chevron-up' : 'icon-chevron-down'"
          key="arrow-down"
          :class="['tiny-input__icon', state.dropDownVisible && 'is-reverse']"
          @click.stop="toggleDropDownVisible()"
        ></component>
      </template>
    </tiny-input>
    <div v-if="state.multiple" class="tiny-cascader__tags">
      <tiny-tag
        v-for="(tag, index) in state.presentTags"
        :key="tag.key"
        type="info"
        :size="state.tagSize"
        :hit="tag.hitState"
        :closable="tag.closable"
        disable-transitions
        @close="deleteTag(index)"
      >
        <span>{{ tag.text }}</span>
      </tiny-tag>
      <input
        v-if="filterable && !state.isDisabled"
        v-model.trim="state.inputValue"
        type="text"
        class="tiny-cascader__search-input"
        :placeholder="state.presentTags.length ? '' : placeholder"
        @input="(e) => handleInput(state.inputValue, e)"
        @click.stop="toggleDropDownVisible(true)"
        @keydown.delete="handleDelete"
      />
    </div>
    <transition name="tiny-zoom-in-top" @after-leave="handleDropdownLeave">
      <div
        v-show="state.dropDownVisible"
        ref="popper"
        :class="['tiny-popper', 'tiny-cascader-dropdown', 'tiny-cascader__dropdown', popperClass, { 'is-auto-size': autoSize, 'is-multiple': state.multiple }]"
        @mousedown.stop
      >
        <tiny-cascader-panel
          ref="panel"
          v-show="!state.filtering"
          v-model="state.checkedValue"
          :options="options"
          :props="state.config"
          :border="false"
          :render-label="slots.default"
          @expand-change="handleExpandChange"
          @close="toggleDropDownVisible(false)"
        ></tiny-cascader-panel>
        <tiny-scrollbar
          ref="suggestionPanel"
          v-if="filterable"
          v-show="state.filtering"
          tag="ul"
          class="tiny-cascader__suggestion-panel"
          view-class="tiny-cascader__suggestion-list"
          @keydown="handleSuggestionKeyDown"
        >
          <template #default v-if="state.suggestions.length">
            <li
              v-for="(item, index) in state.suggestions"
              :key="item.uid"
              :class="['tiny-cascader__suggestion-item', item.checked && 'is-checked']"
              :tabindex="-1"
              @click="handleSuggestionClick(index)"
            >
              <span>{{ item.text }}</span>
              <icon-yes v-if="item.checked" class="icon-check"></icon-yes>
            </li>
          </template>
          <template #empty v-else>
            <li class="tiny-cascader__empty-text">
              {{ t('ui.cascader.noMatch') }}
            </li>
          </template>
        </tiny-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/cascader/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import Input from '@opentiny/vue-input'
import Tag from '@opentiny/vue-tag'
import Scrollbar from '@opentiny/vue-scrollbar'
import CascaderPanel from '@opentiny/vue-cascader-panel'
import { iconClose, iconChevronDown, iconYes, iconChevronUp } from '@opentiny/vue-icon'

export default defineComponent({
  props: [
    ...props,
    'modelValue',
    'options',
    'props',
    'size',
    'placeholder',
    'disabled',
    'clearable',
    'filterable',
    'filterMethod',
    'separator',
    'showAllLevels',
    'collapseTags',
    'debounce',
    'beforeFilter',
    'popperClass',
    'placement',
    'popperOptions',
    'visibleArrow',
    'offset',
    'boundariesPadding',
    'arrowOffset',
    'popperAppendToBody',
    'autoSize'
  ],
  emits: ['update:modelValue', 'change', 'visible-change', 'focus', 'blur', 'expand-change', 'active-item-change', 'remove-tag'],
  directives: { Clickoutside },
  provide() {
    return {
      cascaderRoot: this
    }
  },
  components: {
    TinyInput: Input,
    TinyTag: Tag,
    TinyScrollbar: Scrollbar,
    TinyCascaderPanel: CascaderPanel,
    IconClose: iconClose(),
    IconChevronDown: iconChevronDown(),
    IconChevronUp: iconChevronUp(),
    IconYes: iconYes()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
