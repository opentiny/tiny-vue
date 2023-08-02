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
      { 'tiny-cascader-multiple': state.multiple },
      { 'is-display-only': state.isDisplayOnly },
      { 'show-auto-width': state.showAutoWidth },
      { 'is-hover-expand': hoverExpand }
    ]"
    v-clickoutside="() => toggleDropDownVisible(false)"
    @mouseenter="state.inputHover = true"
    @mouseleave="state.inputHover = false"
    @click="() => toggleDropDownVisible(state.readonly ? undefined : true)"
    @keydown="handleKeyDown"
  >
    <tiny-filter-box
      v-if="shape === 'filter'"
      @click.stop="toggleDropDownVisible()"
      :show-close="clearable"
      :disabled="state.isDisabled"
      :label="label"
      :tip="tip"
      :value="state.multiple ? state.presentTags.map((item) => item.text).join('; ') : state.inputValue"
      :drop-down-visible="state.dropDownVisible"
    ></tiny-filter-box>
    <div ref="reference" class="tiny-cascader-content">
      <tiny-input
        v-if="shape !== 'filter'"
        ref="input"
        :model-value="state.multiple ? state.presentText : state.inputValue"
        :size="state.realSize"
        :placeholder="state.placeholder"
        :readonly="state.readonly"
        :disabled="state.isDisabled"
        :display-only="displayOnly"
        :display-only-content="state.multiple ? state.presentTags.map((item) => item.text).join('; ') : ''"
        :validate-event="false"
        :class="{ 'is-focus': state.dropDownVisible }"
        @focus="handleFocus"
        @blur="handleBlur"
        @update:modelValue="handleInput"
      >
        <template #suffix>
          <icon-close
            v-if="state.clearBtnVisible"
            key="clear"
            class="tiny-input__icon"
            @click.stop="handleClear"
          ></icon-close>
          <component
            v-else
            :is="state.dropDownVisible ? 'icon-delta-up' : 'icon-delta-down'"
            key="arrow-down"
            :class="['tiny-input__icon', state.dropDownVisible && 'is-reverse']"
            @click.stop="toggleDropDownVisible()"
          ></component>
        </template>
      </tiny-input>
      <div
        ref="tags-content"
        v-if="state.multiple && !state.isDisplayOnly && !shape"
        class="tiny-cascader__tags"
        :class="{
          'is-expand-content': hoverExpand && !state.isDisabled && (state.inputHover || state.dropDownVisible)
        }"
      >
        <tiny-tag
          v-if="hoverExpand"
          :class="['tiny-cascader__tags-collapse', { 'is-hidden': state.isHidden }]"
          type="info"
          :closable="false"
          :size="state.tagSize"
          >+ {{ state.collapseTagsLength }}</tiny-tag
        >
        <tiny-tag
          v-for="(tag, index) in state.presentTags"
          :key="tag.key"
          type="info"
          :size="state.tagSize"
          :hit="tag.hitState"
          :closable="tag.closable"
          disable-transitions
          @close="deleteTag(index)"
          @mouseenter.native="handleMouseenter"
          @mouseleave.native="handleMouseleave"
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
    </div>
    <tiny-tooltip
      ref="tooltip"
      v-model="state.tooltipVisible"
      :manual="true"
      effect="light"
      :content="state.tooltipContent"
      placement="top"
    >
    </tiny-tooltip>
    <transition name="tiny-zoom-in-top" @after-leave="handleDropdownLeave">
      <div
        v-show="state.dropDownVisible"
        ref="popper"
        :class="[
          'tiny-popper',
          'tiny-cascader-dropdown',
          'tiny-cascader__dropdown',
          popperClass,
          { 'is-auto-size': autoSize, 'is-multiple': state.multiple }
        ]"
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
          <slot name="empty" v-if="!state.suggestions.length">
            <li class="tiny-cascader__empty-text">
              {{ t('ui.cascader.noMatch') }}
            </li>
          </slot>
        </tiny-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/cascader/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import Input from '@opentiny/vue-input'
import Tag from '@opentiny/vue-tag'
import Scrollbar from '@opentiny/vue-scrollbar'
import CascaderPanel from '@opentiny/vue-cascader-panel'
import FilterBox from '@opentiny/vue-filter-box'
import Tooltip from '@opentiny/vue-tooltip'
import { iconClose, iconDeltaDown, iconDeltaUp, iconYes } from '@opentiny/vue-icon'

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
    'autoSize',
    'displayOnly',
    'shape',
    'label',
    'tip',
    'hoverExpand'
  ],
  emits: [
    'update:modelValue',
    'change',
    'visible-change',
    'focus',
    'blur',
    'expand-change',
    'active-item-change',
    'remove-tag',
    'created'
  ],
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
    TinyFilterBox: FilterBox,
    TinyCascaderPanel: CascaderPanel,
    IconClose: iconClose(),
    iconDeltaDown: iconDeltaDown(),
    iconDeltaUp: iconDeltaUp(),
    IconYes: iconYes(),
    TinyTooltip: Tooltip
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
