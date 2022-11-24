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
        class="tiny-autocomplete-suggestion tiny-popper"
        :class="[
          popperClass ? popperClass : '',
          { 'is-loading': !hideLoading && state.loading }
        ]"
        :style="{ width: suggestionState.dropdownWidth }"
        role="region"
      >
        <tiny-scrollbar
          tag="ul"
          wrap-class="tiny-autocomplete-suggestion__wrap"
          view-class="tiny-autocomplete-suggestion__list"
          :margin-bottom-adjust="6"
        >
          <li
            v-if="!hideLoading && state.loading"
            class="tiny-autocomplete-suggestion__list-loading"
          >
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

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/autocomplete/vue'
import { props, setup, directive } from '@opentiny/vue-common'
import TinyScrollbar from '@opentiny/vue-scrollbar'
import TinyInput from '@opentiny/vue-input'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import { iconLoading } from '@opentiny/vue-icon'

export default {
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
    'highlightFirstItem'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
