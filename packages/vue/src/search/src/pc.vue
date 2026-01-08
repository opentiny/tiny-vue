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
    :class="[
      'tiny-search',
      { mini },
      { collapse: state.collapse },
      state.searchSize ? 'tiny-search--' + state.searchSize : '',
      { 'is-disabled': disabled }
    ]"
    role="search"
    :aria-label="placeholder || 'search'"
    @mouseenter="state.hovering = true"
    @mouseleave="state.hovering = false"
  >
    <div :class="['tiny-search__line', { focus: state.focus }]">
      <div class="tiny-search__prefix" v-if="slots.prefix">
        <slot name="prefix"></slot>
      </div>
      <transition name="tiny-transition-search-line-fade" mode="out-in">
        <div
          v-show="!state.collapse && state.types.length"
          class="tiny-search__present"
          role="button"
          tabindex="0"
          aria-haspopup="listbox"
          :aria-expanded="state.show"
          @click="showSelector"
        >
          <slot name="text" :slot-scope="state.searchValue">
            <span class="tiny-search__text">{{ state.searchValue.text }}</span>
          </slot>
          <span class="icon-outer">
            <icon-chevron-down class="tiny-svg-size" />
          </span>
        </div>
      </transition>
      <input
        ref="input"
        role="searchbox"
        :aria-label="placeholder || 'search'"
        :aria-expanded="state.show"
        :aria-controls="state.show ? `tiny-search__selector-${state.instanceId}` : undefined"
        v-bind="a($attrs, ['type', 'class', 'style', '^on[A-Z]', 'id', 'clearable'])"
        v-model="state.currentValue"
        :disabled="disabled"
        :style="
          transparent
            ? {
                border: 'transparent',
                background: 'inherit'
              }
            : {}
        "
        :placeholder="placeholder"
        type="text"
        class="tiny-search__input"
        aria-haspopup="listbox"
        @keyup.enter="searchEnterKey($event)"
        @change="handleChange"
        @input="handleInput"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @select.stop
        :tabindex="tabindex"
      />
      <transition name="tiny-transition-icon-scale-in">
        <div class="tiny-search__input-btn tiny-icon-close" v-if="state.showClear && !state.collapse && !disabled">
          <a role="button" tabindex="0" aria-label="clear search" @click="clear($event)" @keydown.enter="clear($event)">
            <icon-close @mousedown.prevent class="tiny-svg-size" />
          </a>
        </div>
      </transition>
      <slot v-if="slots.suffix" name="suffix"></slot>
      <div v-else-if="!slots.prefix && !slots.suffix" class="tiny-search__input-btn">
        <a role="button" tabindex="0" aria-label="submit search" @click="searchClick($event)">
          <icon-search :style="{ fill: state.collapse && transparent ? '#fff' : '' }" class="tiny-svg-size" />
        </a>
      </div>
    </div>
    <transition name="tiny-transition-zoom-in-top" mode="out-in">
      <div
        v-show="state.show && state.types.length"
        ref="selector"
        :id="`tiny-search__selector-${state.instanceId}`"
        class="tiny-search__selector"
        role="listbox"
      >
        <div class="tiny-search__selector-body">
          <ul class="tiny-search__poplist">
            <li
              v-for="(item, index) in state.types"
              :key="index"
              class="tiny-search__poplist-item"
              role="option"
              :aria-label="item.text || item.label"
              :aria-selected="item === state.searchValue"
              :id="`tiny-search__option-${state.instanceId}-${index}`"
              tabindex="-1"
              @click="changeKey(item)"
            >
              <slot name="poplist" :slot-scope="item">
                {{ item.text }}
              </slot>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/search/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconChevronDown, iconSearch, iconClose } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/search/index.less'
import type { ISearchApi } from '@opentiny/vue-renderless/types/search.type'

export default defineComponent({
  props: [
    ...props,
    'mini',
    'transparent',
    'searchTypes',
    'placeholder',
    'modelValue',
    'tabindex',
    'clearable',
    'isEnterSearch',
    'typeValue',
    'size',
    'disabled'
  ],
  emits: ['change', 'search', 'update:modelValue', 'clear', 'select', 'input', 'expand', 'collapse'],
  components: {
    IconChevronDown: iconChevronDown(),
    IconSearch: iconSearch(),
    IconClose: iconClose()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ISearchApi
  }
})
</script>
