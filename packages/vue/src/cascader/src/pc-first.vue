<template>
  <div
    data-tag="tiny-cascader"
    :class="
      m(
        'inline-block relative text-sm',
        gcls('type-${state.realSize}'),
        gcls(state.showAutoWidth ? 'show-auto-width' : '')
      )
    "
    v-clickoutside="() => toggleDropDownVisible(false)"
    @mouseenter="state.inputHover = true"
    @mouseleave="state.inputHover = false"
    @click="() => toggleDropDownVisible(state.readonly ? undefined : true)"
    @keydown="handleKeyDown"
    v-bind="a($attrs, ['class', 'style'], true)"
  >
    <div ref="reference" data-tag="tiny-cascader-content">
      <tiny-input
        ref="input"
        :model-value="state.multiple ? state.presentText : state.inputValue"
        :size="state.realSize"
        :placeholder="state.placeholder"
        :readonly="state.readonly"
        :disabled="state.isDisabled"
        :display-only="displayOnly"
        :display-only-content="state.multiple ? state.presentTags.map((item) => item.text).join('; ') : ''"
        :validate-event="false"
        @focus="handleFocus"
        @blur="handleBlur"
        @update:modelValue="handleInput"
      >
        <template #suffix>
          <icon-close v-if="state.clearBtnVisible" key="clear" @click.stop="handleClear"></icon-close>
          <component
            v-else
            :is="state.dropDownVisible ? 'icon-chevron-up' : 'icon-chevron-down'"
            key="arrow-down"
            @click.stop="toggleDropDownVisible()"
            :class="{ 'fill-color-brand': state.dropDownVisible }"
          ></component>
        </template>
      </tiny-input>
      <div ref="tags-content" v-if="state.multiple && !state.isDisplayOnly && !shape" data-tag="tiny-cascader__tags">
        <input
          v-if="filterable && !state.isDisabled"
          v-model.trim="state.inputValue"
          type="text"
          data-tag="tiny-cascader__search-input"
          class="flex-1 h-6 text-color-text-primary text-xs border-none outline-0 box-border"
          :placeholder="state.presentTags.length ? '' : placeholder"
          @focus="handleFocus"
          @blur="handleBlur"
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
        data-tag="tiny-cascader__dropdown"
        :class="
          m(
            popperClass,
            'my-1 mx-0 text-sm bg-color-bg-1 rounded shadow-md',
            autoSize ? 'bg-transparent border-none shadow-none' : ''
          )
        "
        @mousedown.stop
      >
        <tiny-cascader-panel
          ref="panel"
          tiny_mode="mobile-first"
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
          tag="div"
          data-tag="tiny-cascader__suggestion-panel"
          wrap-class="overflow-auto pr-2 pb-2"
          class="bg-color-bg-1 border border-solid border-color-border-separator rounded"
          view-class="tiny-cascader__suggestion-list m-0 py-1.5 px-0 text-sm text-color-text-primary text-center"
          @keydown="handleSuggestionKeyDown"
        >
          <template #default v-if="state.suggestions.length">
            <div
              v-for="(item, index) in state.suggestions"
              :key="item.uid"
              data-tag="tiny-cascader__suggestion-item"
              :class="[
                'flex justify-between items-center h-8 py-0 px-2 text-xs text-color-text-primary',
                'text-left outline-0 cursor-pointer',
                item.checked ? 'text-color-brand-hover font-bold' : ''
              ]"
              :tabindex="-1"
              @click="handleSuggestionClick(index)"
            >
              <span>{{ item.text }}</span>
              <icon-yes v-if="item.checked" :class="item.checked ? 'fill-color-icon-hover' : ''"></icon-yes>
            </div>
          </template>
          <slot name="empty" v-if="!state.suggestions.length">
            <div data-tag="tiny-cascader__empty-text" class="my-2.5 mx-0 text-color-text-placeholder">
              {{ t('ui.cascader.noMatch') }}
            </div>
          </slot>
        </tiny-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/cascader/vue'
import { props, setup, defineComponent, directive } from '@opentiny/vue-common'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import Input from '@opentiny/vue-input'
import Scrollbar from '@opentiny/vue-scrollbar'
import CascaderPanel from '@opentiny/vue-cascader-panel'
import Tooltip from '@opentiny/vue-tooltip'
import { IconClose, IconChevronDown, IconYes, IconChevronUp } from '@opentiny/vue-icon'
import { classes } from './token'

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
  directives: directive({ Clickoutside }),
  inheritAttrs: false,
  provide() {
    return {
      cascaderRoot: this
    }
  },
  components: {
    TinyInput: Input,
    TinyScrollbar: Scrollbar,
    TinyCascaderPanel: CascaderPanel,
    IconClose: IconClose(),
    IconChevronDown: IconChevronDown(),
    IconChevronUp: IconChevronUp(),
    IconYes: IconYes(),
    TinyTooltip: Tooltip
  },
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
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
