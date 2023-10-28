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
      'tiny-mobile-search',
      `tiny-mobile-search-${themeType}`,
      { collapse: state.collapse },
      { focus: state.focus || (!state.focus && state.currentValue) }
    ]"
  >
    <div :class="['tiny-mobile-search__line']">
      <div class="tiny-mobile-search__box">
        <div class="tiny-mobile-search__input-btn">
          <a class="tiny-mobile-search__icon">
            <icon-search :style="{ fill: state.collapse && transparent ? '#fff' : '' }" @click="searchClick" />
          </a>
        </div>
        <input
          ref="input"
          v-model="state.currentValue"
          :style="
            transparent
              ? {
                  border: 'transparent',
                  background: state.collapse ? 'rgba(255,255,255,0.3)' : '#fff'
                }
              : {}
          "
          :placeholder="placeholder"
          type="text"
          :class="['tiny-mobile-search__input', `tiny-mobile-search__input-${themeType}`]"
          @keyup.enter="searchEnterKey"
          @change="handleChange"
          @input="handleInput"
          @focus="state.focus = true"
          @blur="state.focus = false"
          @select.stop
        />
        <span class="tiny-mobile-search__close-icon" v-show="state.currentValue">
          <icon-operationfaild @click="clear" />
        </span>
      </div>
      <label class="tiny-mobile-search__label">
        <span>{{ placeholder }}</span>
      </label>
    </div>
    <div class="tiny-mobile-search__right">
      <slot>
        <div class="tiny-mobile-search__present" @click="searchClick">
          <span class="tiny-mobile-search__text">{{ buttonText }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/search/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconSearch, iconOperationfaild } from '@opentiny/vue-icon'
import '@opentiny/vue-theme-mobile/search/index.less'
import type { ISearchApi } from '@opentiny/vue-renderless/types/search.type'

export default defineComponent({
  props: [
    ...props,
    'transparent',
    'searchTypes',
    'placeholder',
    'buttonText',
    'modelValue',
    'themeType',
    'isEnterSearch'
  ],
  components: {
    IconSearch: iconSearch(),
    IconOperationfaild: iconOperationfaild()
  },
  emits: ['change', 'search', 'update:modelValue', 'clear', 'select', 'input'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ISearchApi
  }
})
</script>
