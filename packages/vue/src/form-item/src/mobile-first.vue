<template>
  <div
    :class="
      m(
        `flex min-h-[3rem] sm:min-h-[1.75rem] mb-0 p-0 sm:mb-4 box-border after:content-[''] after:table after:clear-both before:content-['']  before:table border-b-[0.5px] border-color-bg-3 sm:border-none`,
        state.validateState === 'error' && state.validateType === 'text' ? 'mb-0 sm:mb-0 pb-3 sm:pb-1' : '',
        state.formInline ? 'align-sub' : '',
        state.labelPosition === 'top' ? 'block mb-4' : '',
        state.validateState === 'error'
          ? '[&_input]:border-color-error [&_textarea]:border-color-error [&_input:focus]:border-color-error [&_input:hover]:border-color-error [&_textarea:focus]:border-color-error [&_textarea:hover]:border-color-error'
          : '',
        state.labelPosition === 'top' && !state.hideRequiredAsterisk ? 'pl-0' : '',
        ['small', 'mini'].indexOf(state.formItemSize) >= 0 ? 'mb-2' : '',
        !slots.label && !this.label ? 'border-none' : '',
        state.isDisplayOnly ? 'border-none py-0.5' : ''
      )
    "
  >
    <label-wrap
      :isAutoWidth="state.labelStyle && state.labelStyle.width === 'auto'"
      :updateAll="state.labelWidth === 'auto'"
      :isMobileFirst="true"
    >
      <label
        v-if="slots.label || label"
        :class="
          m(
            'py-3 sm:py-1.5 min-h-[2.25rem] sm:min-h-[1.75rem] relative align-bottom float-left text-sm sm:text-xs text-color-text-secondary pr-1 sm:pr-4 box-border',
            'overflow-hidden text-ellipsis text-left sm:text-right',
            state.labelPosition === 'top' ? 'float-none inline-block text-left leading-none px-0 pt-0 pb-2 h-auto' : '',
            state.labelPosition === 'left' ? 'text-left' : '',
            state.formInline && state.labelPosition === 'top' ? 'block' : '',
            state.isDisplayOnly ? 'leading-none h-auto align-[inherit] pr-4' : '',
            tipContent ? 'pr-5 sm:pr-7' : '',
            state.labelPosition === 'top' && !state.hideRequiredAsterisk
              ? 'overflow-visible relative before:absolute before:-left-2.5'
              : ''
          )
        "
        :style="state.labelStyle"
        :for="state.labelFor"
      >
        <span
          :class="
            m(
              'max-h-[2.5rem] line-clamp-2 inline-block relative pl-2 sm:pl-0 leading-normal',
              (state.isRequired || required) && !state.hideRequiredAsterisk
                ? `before:content-['*'] before:text-color-error before:absolute before:left-0 before:sm:relative`
                : '',
              state.isDisplayOnly ? 'pl-0 before:hidden' : ''
            )
          "
        >
          <slot name="label">
            {{ label + state.labelSuffix }}
          </slot>
        </span>
        <tiny-tooltip v-if="tipContent" effect="light" :content="tipContent" placement="top">
          <icon-help-circle
            custom-class="h-4 w-4 ml-0.5 absolute top-1.5 right-2 align-text-bottom fill-color-text-secondary"
          ></icon-help-circle>
        </tiny-tooltip>
      </label>
    </label-wrap>
    <div
      :class="
        m(
          `m-auto flex-1 relative -top-0.5 sm:top-auto text-sm sm:text-xs  after:content-['']  after:table after:clear-both before:content-['']  before:table [&_button:not(:last-child)]:mr-2`,
          '[&_[data-tag=tiny-checkbox]]:py-0 [&_[data-tag=tiny-input]]:w-full [&_[data-tag=tiny-input]_textarea]:w-full [&_[data-tag=tiny-input]_textarea]:mt-1 sm:[&_[data-tag=tiny-input]_textarea]:mt-0',
          state.formInline ? 'align-sub leading-none' : '',
          state.labelPosition === 'top' && !state.hideRequiredAsterisk
            ? 'pl-2.5 sm:pl-0 [&_[data-tag=tiny-input]_input]:px-0 sm:[&_[data-tag=tiny-input]_input]:px-3'
            : ''
        )
      "
    >
      <div
        v-if="state.isDisplayOnly && state.isBasicComp"
        :class="['break-all', state.typeName === 'textarea' ? 'line-clamp-3' : 'line-clamp-1']"
        :type-name="state.typeName"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
      >
        {{ state.displayedValue || '-' }}
      </div>
      <div
        v-show="!(state.isDisplayOnly && state.isBasicComp)"
        :class="[
          'leading-[0] [&_[data-tag=tiny-checkbox]]:relative [&_[data-tag=tiny-checkbox]]:top-0.5 [&_[aria-label=checkbox-group]]:pl-0.5 sm:[&_[aria-label=checkbox-group]]:pl-0',
          '[&_>:first-child[data-tag=tiny-checkbox]]:pl-0.5 sm:[&_>:first-child[data-tag=tiny-checkbox]]:pl-0',
          !state.isDisplayOnly
            ? '[&_[data-tag=tiny-switch]]:ml-2.5 sm:[&_[data-tag=tiny-switch]]:ml-0 [&_[data-tag=tiny-numeric]]:ml-2.5 sm:[&_[data-tag=tiny-numeric]]:ml-0'
            : ''
        ]"
      >
        <slot></slot>
      </div>
      <slot v-if="state.validateState === 'error' && showMessage && state.showMessage" name="error">
        <div
          :class="
            m(
              'relative text-color-error text-xs leading-1 pt-1',
              (typeof inlineMessage === 'boolean' && inlineMessage) || state.inlineMessage
                ? 'relative top-auto left-auto inline-block ml-2.5'
                : '',
              state.formItemSize === 'small' ? 'pt-0.5' : '',
              state.formItemSize === 'mini' ? 'pt-px' : ''
            )
          "
        >
          {{ state.validateMessage }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { $props, $prefix, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/form-item/vue'
import LabelWrap from './label-wrap'
import Tooltip from '@opentiny/vue-tooltip'
import { IconHelpCircle } from '@opentiny/vue-icon'

const $constants = {
  FORM_NAME: 'Form',
  FORM_ITEM_NAME: 'FormItem'
}
export default {
  name: $prefix + 'FormItem',
  componentName: 'FormItem',
  components: {
    LabelWrap,
    TinyTooltip: Tooltip,
    IconHelpCircle: IconHelpCircle()
  },
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    appendToBody: {
      type: Boolean,
      default: undefined
    },
    error: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    label: String,
    labelWidth: String,
    manual: Boolean,
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    tipContent: String,
    validateDebounce: Boolean,
    validatePosition: String,
    validateStatus: String,
    validateType: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
