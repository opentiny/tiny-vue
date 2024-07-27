<template>
  <div
    data-tag="tiny-form-item"
    :class="
      m(
        `flex min-h-[theme(spacing.12)] sm:min-h-[theme(spacing.7)] mb-0 p-0 sm:mb-4 box-border after:content-[''] after:table after:clear-both before:content-['']  before:table border-b-0.5 border-color-border-separator sm:border-none`,
        state.validateState === 'error' && state.validateType === 'text' ? 'mb-0 sm:mb-5' : '',
        state.formInline ? 'align-sub' : '',
        state.labelPosition === 'top' ? 'block mb-4' : '',
        state.validateState === 'error'
          ? '[&_.tiny-range-editor]:border-color-error [&_[data-tag~=tiny-range-editor]]:border-color-error [&_[data-tag=tiny-numeric-main]]:border-color-error [&_input]:border-color-error [&_textarea]:border-color-error [&_input:focus]:border-color-error [&_input:hover]:border-color-error [&_textarea:focus]:border-color-error [&_textarea:hover]:border-color-error'
          : '',
        state.labelPosition === 'top' && !state.hideRequiredAsterisk ? 'pl-0' : '',
        !slots.label && !label ? 'border-none' : '',
        state.isDisplayOnly ? 'border-none py-0.5' : ''
      )
    "
  >
    <label-wrap
      :is-auto-width="state.labelStyle && state.labelStyle.width === 'auto'"
      :update-all="state.labelWidth === 'auto'"
      :is-mobile-first="true"
    >
      <label
        data-tag="tiny-item-label"
        v-if="slots.label || label"
        :class="
          m(
            'py-3 sm:py-1.5 sm:min-h-[theme(spacing.7)] relative align-bottom float-left text-sm pr-3 sm:pr-4 box-border leading-5',
            'overflow-hidden text-ellipsis',
            state.labelPosition === 'top'
              ? 'float-none inline-block text-left sm:text-left leading-none px-0 pt-0 pb-1.5 h-auto min-h-0 sm:py-0 sm:pb-1 sm:min-h-[theme(spacing.0)]'
              : 'min-h-[theme(spacing.9)]',
            state.labelPosition === 'right' ? 'text-right sm:text-right' : '',
            state.labelPosition === 'left' ? 'text-left sm:text-left' : '',
            state.formInline && state.labelPosition === 'top' ? 'block' : '',
            state.isDisplayOnly ? 'leading-none h-auto align-[inherit] pr-4' : '',
            tipContent ? 'pr-5 sm:pr-7' : '',
            state.labelPosition === 'top' && !state.hideRequiredAsterisk
              ? 'overflow-visible relative before:absolute before:-left-2.5'
              : '',
            state.disabled ? 'text-color-icon-placeholder sm:text-color-text-secondary' : 'text-color-text-secondary',
            state.formItemSize !== 'mini' ? 'sm:text-sm' : 'sm:text-xs'
          )
        "
        :style="state.labelStyle"
        :for="state.labelFor"
      >
        <span
          :class="
            m(
              'max-h-[theme(spacing.10)] line-clamp-2 inline-block relative top-px leading-normal',
              (state.isRequired || required) && !state.hideRequiredAsterisk
                ? `before:content-['*'] before:text-color-error before:relative before:mr-1`
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
            custom-class="h-4 w-4 ml-0.5 absolute right-1 sm:right-2 align-text-bottom fill-color-text-secondary"
            :class="[state.labelPosition === 'top' ? 'top-0.5 sm:top-1.5' : 'top-3.5 sm:top-1.5']"
          ></icon-help-circle>
        </tiny-tooltip>
      </label>
    </label-wrap>
    <div
      data-tag="tiny-form-item-inline"
      :class="
        m(
          `flex-1 m-0 sm:m-auto relative sm:pt-0 sm:top-auto text-sm after:content-['']  after:table after:clear-both before:content-['']  before:table [&_button:not(:last-child)]:mr-2`,
          '[&_[data-tag=tiny-checkbox]]:py-0 [&_[data-tag=tiny-input]]:w-full',
          '[&_[data-tag=tiny-input]_textarea]:px-0 sm:[&_[data-tag=tiny-input]_textarea]:px-3 [&_[data-tag=tiny-input]_textarea]:w-full [&_[data-tag=tiny-input]_textarea]:pt-1 sm:[&_[data-tag=tiny-input]_textarea]:pt-2',
          state.formInline ? 'align-sub leading-none' : '',
          state.labelPosition === 'top' && !state.hideRequiredAsterisk
            ? state.isDisplayOnly
              ? 'pl-0'
              : 'pl-2 sm:pl-0'
            : 'pt-2',
          state.formItemSize !== 'mini' ? 'sm:text-sm' : 'sm:text-xs'
        )
      "
    >
      <div
        data-tag="tiny-form-item-display-only"
        v-if="state.isDisplayOnly && state.isBasicComp"
        :class="[
          'break-all min-h-[28px] leading-7 text-color-text-primary',
          state.typeName === 'textarea' ? 'line-clamp-3' : 'line-clamp-1'
        ]"
        :type-name="state.typeName"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
      >
        {{ state.displayedValue || '-' }}
      </div>
      <div
        data-tag="tiny-form-item-show"
        v-show="!(state.isDisplayOnly && state.isBasicComp)"
        :class="[
          '[&_[aria-label=checkbox-group]]:pl-0.5 sm:[&_[aria-label=checkbox-group]]:pl-0',
          '[&_>:first-child[data-tag=tiny-checkbox]]:pl-0.5 sm:[&_>:first-child[data-tag=tiny-checkbox]]:pl-0',
          '[&_[class=tiny-autocomplete]]:w-full',
          '[&_[class=tiny-cascader]]:w-full',
          state.isDisplayOnly
            ? '[&_>*:not([data-tag^=tiny-],[class^=tiny-])]:leading-8 [&_>*:not([data-tag^=tiny-],[class^=tiny-])]:sm:leading-normal'
            : ''
        ]"
      >
        <slot></slot>
      </div>
      <slot
        data-tag="tiny-form-item-error"
        v-if="state.validateState === 'error' && showMessage && state.showMessage"
        name="error"
      >
        <div
          :class="
            m(
              'relative sm:absolute left-0 bottom-1 sm:-bottom-5 text-color-error text-xs leading-normal line-clamp-3 sm:line-clamp-1 break-all',
              (typeof inlineMessage === 'boolean' && inlineMessage) || state.inlineMessage
                ? 'relative top-auto left-auto inline-block'
                : '',
              state.formItemSize === 'small' ? 'pt-0.5' : '',
              state.formItemSize === 'mini' ? 'pt-px' : ''
            )
          "
          :title="state.validateMessage"
        >
          {{ state.validateMessage }}
        </div>
      </slot>
      <slot v-if="state.validateState !== 'error' && showMessage && state.showMessage" name="prompt"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/form-item/vue'
import LabelWrap from './label-wrap'
import Tooltip from '@opentiny/vue-tooltip'
import { IconHelpCircle } from '@opentiny/vue-icon'
import type { IFormItemApi } from '@opentiny/vue-renderless/types/form-item.type'

const $constants = {
  FORM_NAME: 'Form',
  FORM_ITEM_NAME: 'FormItem'
}
export default defineComponent({
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
    validateDisabled: Boolean,
    validateDebounce: Boolean,
    validatePosition: String,
    validateStatus: String,
    validateType: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IFormItemApi
  }
})
</script>
