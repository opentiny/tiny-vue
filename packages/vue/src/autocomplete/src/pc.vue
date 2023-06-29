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
    class="tiny-autocomplete"
    v-clickoutside="close"
    aria-haspopup="listbox"
    role="combobox"
    :aria-expanded="state.suggestionVisible"
    :aria-owns="state.id"
  >
    <tiny-input
      :tabindex="tabindex"
      :display-only="displayOnly"
      ref="input"
      v-bind="f($props, $attrs)"
      @update:modelValue="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @clear="handleClear"
      @keydown.up.prevent="highlight(state.highlightedIndex - 1)"
      @keydown.down.prevent="highlight(state.highlightedIndex + 1)"
      @keydown.enter="handleKeyEnter"
      @keydown.tab="close"
    >
      <template #prepend v-if="slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template #append v-if="slots.append">
        <slot name="append"></slot>
      </template>
      <template #prefix v-if="slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template #suffix v-if="slots.suffix">
        <slot name="suffix"></slot>
      </template>
    </tiny-input>
    <transition name="tiny-zoom-in-top" @after-leave="doDestroy">
      <div
        ref="popper"
        v-show="suggestionState.showPopper"
        class="tiny-autocomplete tiny-autocomplete-suggestion tiny-popper"
        :class="[popperClass ? popperClass : '', { 'is-loading': !hideLoading && state.loading }]"
        :style="{ width: suggestionState.dropdownWidth }"
        role="region"
      >
        <tiny-scrollbar
          tag="ul"
          wrap-class="tiny-autocomplete-suggestion__wrap"
          view-class="tiny-autocomplete-suggestion__list"
          :margin-bottom-adjust="6"
        >
          <li v-if="!hideLoading && state.loading" class="tiny-autocomplete-suggestion__list-loading">
            <icon-loading width="1em" height="1em" />
          </li>
          <template v-else>
            <li
              v-for="(item, index) in state.suggestions"
              :key="index"
              class="tiny-autocomplete-suggestion__list-item"
              :class="{ highlighted: state.highlightedIndex === index }"
              @click="select(item)"
              :id="`${state.id}-item-${index}`"
              role="option"
              :aria-selected="state.highlightedIndex === index"
            >
              <slot :slotScope="item">
                {{ item[valueKey] }}
              </slot>
            </li>
          </template>
        </tiny-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/autocomplete/vue'
import { props, setup, directive, defineComponent } from '@opentiny/vue-common'
import TinyScrollbar from '@opentiny/vue-scrollbar'
import TinyInput from '@opentiny/vue-input'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import { iconLoading } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    TinyInput,
    TinyScrollbar,
    IconLoading: iconLoading()
  },
  directives: directive({ Clickoutside }),
  props: [
    ...props,
    'valueKey',
    'popperClass',
    'tabindex',
    'popperOptions',
    'placeholder',
    'clearable',
    'disabled',
    'name',
    'size',
    'modelValue',
    'maxlength',
    'minlength',
    'autofocus',
    'fetchSuggestions',
    'triggerOnFocus',
    'customItem',
    'selectWhenUnmatched',
    'prefixIcon',
    'suffixIcon',
    'label',
    'debounce',
    'placement',
    'hideLoading',
    'popperAppendToBody',
    'highlightFirstItem',
    'displayOnly'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
