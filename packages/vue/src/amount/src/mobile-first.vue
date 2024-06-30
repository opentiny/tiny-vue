<template>
  <div data-tag="tiny-amount" ref="root" v-bind="a($attrs, ['^on[A-Z]'])">
    <template v-if="uiMode === 'default'">
      <tiny-action-sheet
        type="action"
        :menus="[t('ui.amount.currency'), t('ui.amount.date')]"
        :visible="state.visible && state.editorPhase === 'selection'"
        @update:visible="(event) => closeDetailEidtor(!event && state.editorPhase === 'selection')"
        @click="openDetailEditor"
        @close="toggleVisible"
      ></tiny-action-sheet>
      <tiny-currency
        v-model="editorState.currency"
        :clearable="false"
        :fields="fields"
        :fetch-currency="fetchCurrency"
        :popper-class="popperClass"
        :popper-append-to-body="popperAppendToBody"
        :currency="currency"
        :visible="state.visible && state.editorPhase === 'currency'"
        @visible-change="(event) => closeDetailEidtor(!event && state.editorPhase === 'currency')"
      ></tiny-currency>
      <tiny-date-picker-mobile
        v-model="editorState.date"
        :popper-class="popperClass ? ' ' + popperClass : ''"
        :popper-append-to-body="popperAppendToBody"
        :visible="state.visible && state.editorPhase === 'date'"
        @update:visible="(event) => closeDetailEidtor(!event && state.editorPhase === 'date')"
        v-if="date || dateAllowEmpty"
      ></tiny-date-picker-mobile
      ><!-- date-picker-mobile 选择日期后会往前挪一天有bug未修复，待替换成date-picker-mf -->
    </template>
    <tiny-popover
      v-model="state.visible"
      placement="bottom-start"
      :popper-class="
        'sm:max-w-[theme(spacing.96)] sm:px-4 sm:py-4 box-border text-color-text-secondary sm:border-0' +
        ' sm:[&[x-placement^=bottom]]:mt-1 sm:[&[x-placement^=top]]:mb-1' +
        (popperClass ? ' ' + popperClass : '') +
        (shape === 'filter' ? ' w-80' : '') +
        (state.displayOnly ? ' w-auto' : '')
      "
      :visible-arrow="false"
      trigger="manual"
      :append-to-body="popperAppendToBody"
      v-if="!(state.displayOnly || hideIcon) && uiMode !== 'default'"
    >
      <template #reference>
        <tiny-filter-box
          v-if="shape === 'filter'"
          ref="reference"
          :label="label"
          :value="state.amountValue"
          :tip="tip"
          :disabled="disabled"
          @click="toggleVisible"
          :show-close="clearable"
          :blank="blank"
        >
        </tiny-filter-box>
        <tiny-input
          v-else
          :class="
            shape !== 'filter' && !hideCurrency
              ? size === 'medium'
                ? '[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-12'
                : '[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-10'
              : ''
          "
          :tabindex="tabindex"
          :size="size"
          :model-value="shape !== 'filter' ? state.amountNumberValue : state.amountValue"
          :maxlength="maxLen"
          :display-only="state.displayOnly"
          :placeholder="placeholder"
          :disabled="disabled"
          :clearable="clearable"
          @focus="inputFocus"
          @blur="inputBlur"
          @update:modelValue="onInput"
        >
          <template #prefix v-if="shape !== 'filter' && !hideCurrency">
            <div
              data-tag="tiny-amount-currency-mark"
              :class="
                'pl-1 text-color-text-primary' +
                ' ' +
                (disabled ? 'text-color-text-disabled' : '') +
                ' ' +
                (size === 'medium'
                  ? 'h-8 leading-8 text-sm w-9'
                  : size === 'mini'
                    ? 'h-6 leading-6 text-xs w-7'
                    : 'h-7 leading-7 text-sm w-9 sm:text-xs sm:w-7')
              "
            >
              {{ state.currency }}
            </div>
          </template>
          <template #suffix>
            <div
              @click="toggleVisible"
              :class="
                'fill-color-icon-secondary sm:fill-color-text-placeholder text-base hover:fill-color-brand-hover flex order-2 ml-3' +
                (state.visible ? ' fill-color-brand-hover' : '')
              "
              v-if="!hideIcon"
            >
              <icon-coin
                class="tiny-svg-size"
                custom-class="h-5 w-5 sm:h-4 sm:w-4"
                :class="disabled ? 'fill-color-icon-placeholder sm:fill-color-text-placeholder' : ''"
              />
            </div>
          </template>
        </tiny-input>
      </template>
      <div ref="popover">
        <div class="mb-3 text-xs cursor-pointer" v-if="shape === 'filter' && filter">
          <tiny-radio-group v-model="state.radioVal" @change="handleChange" class="[&]:inline-block">
            <tiny-radio
              v-for="(item, index) in state.filterMenu"
              :key="index"
              :label="t(item)"
              :class="
                ' ' +
                'bg-color-bg-2 py-px box-border mb-2 sm:[&]:mr-2 ml-0 inline-flex items-center justify-center h-6 rounded-sm min-w-[theme(spacing.12)] text-center max-w-none px-2 border border-color-bg-2 border-solid font-normal' +
                ' [&[aria-checked]_[data-tag=tiny-radio-label]]:text-color-brand [&[aria-checked]]:border-color-brand' +
                ' ' +
                '[&_[data-tag=tiny-radio-content]]:hidden' +
                ' ' +
                '[&_[data-tag=tiny-radio-label]]:pl-0 [&_[data-tag=tiny-radio-label]]:leading-5 [&_[data-tag=tiny-radio-label]]:h-5 [&_[data-tag=tiny-radio-label]]:inline-block'
              "
            >
              {{ t(item) }}
            </tiny-radio>
          </tiny-radio-group>
        </div>
        <div class="flex justify-end items-center mb-4" v-if="popUp">
          <div class="grow-0 shrink-0 basis-auto mr-2 w-1/5 text-sm">{{ t('ui.amount.currency') }}</div>
          <tiny-currency
            tiny_mode="pc"
            :tiny_mode_root="true"
            v-model="editorState.currency"
            :clearable="false"
            :fields="fields"
            :fetch-currency="fetchCurrency"
            :popper-class="popperClass"
            :popper-append-to-body="popperAppendToBody"
            :currency="currency"
          ></tiny-currency>
        </div>
        <div v-if="date || dateAllowEmpty" class="flex justify-end items-center mb-4">
          <div class="grow-0 shrink-0 basis-auto mr-2 w-1/5 text-sm">{{ t('ui.amount.date') }}</div>
          <tiny-date-picker
            v-model="editorState.date"
            :popper-class="popperClass ? ' ' + popperClass : ''"
            :popper-append-to-body="popperAppendToBody"
          ></tiny-date-picker>
        </div>
        <div class="flex justify-end items-center mb-4" v-if="shape === 'filter'">
          <div class="grow-0 shrink-0 basis-auto mr-2 w-1/5 text-sm">{{ t('ui.amount.amount') }}</div>
          <tiny-input
            class="inline-block"
            v-model="editorState.amount"
            @update:modelValue="popInput"
            :maxlength="maxLen"
          ></tiny-input>
        </div>
        <div class="flex justify-end items-center">
          <tiny-button type="primary" @click="save">{{ t('ui.base.confirm') }}</tiny-button>
        </div>
      </div>
    </tiny-popover>
    <tiny-input
      v-else
      :class="
        (shape !== 'filter' || uiMode === 'default') && !hideCurrency // 移动端不支持filter模式忽略filter配置
          ? size === 'medium'
            ? '[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-12'
            : size === 'mini'
              ? '[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-10'
              : '[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-12 sm:[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-10'
          : ''
      "
      :tabindex="tabindex"
      :size="size"
      :model-value="
        (shape !== 'filter' || uiMode === 'default') && !state.displayOnly //input display-only不显示prefix需要带符号
          ? state.amountNumberValue
          : state.amountValue
      "
      :maxlength="maxLen"
      :display-only="state.displayOnly"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      @focus="inputFocus"
      @blur="inputBlur"
      @update:modelValue="onInput"
    >
      <template #prefix v-if="(shape !== 'filter' || uiMode === 'default') && !hideCurrency">
        <div
          data-tag="tiny-amount-currency-mark"
          :class="
            'pl-1 text-color-text-primary' +
            ' ' +
            (disabled ? 'text-color-text-disabled' : '') +
            ' ' +
            (size === 'medium'
              ? 'h-8 leading-8 text-sm w-9'
              : size === 'mini'
                ? 'h-6 leading-6 text-xs w-7'
                : 'h-7 leading-7 text-sm w-9 sm:text-xs sm:w-7')
          "
        >
          {{ state.currency }}
        </div>
      </template>
      <template #suffix>
        <div
          @click="toggleVisible"
          :class="
            'fill-color-icon-secondary sm:fill-color-text-placeholder text-base hover:fill-color-brand-hover flex order-2 ml-3' +
            (state.visible ? ' fill-color-brand-hover' : '')
          "
          v-if="!hideIcon"
        >
          <icon-coin
            custom-class="h-5 w-5 sm:h-4 sm:w-4"
            :class="disabled ? 'fill-color-icon-placeholder sm:fill-color-text-placeholder' : ''"
          />
        </div>
      </template>
    </tiny-input>
  </div>
</template>

<script lang="ts">
import Popover from '@opentiny/vue-popover'
import Input from '@opentiny/vue-input'
import Currency from '@opentiny/vue-currency'
import Button from '@opentiny/vue-button'
import DatePicker from '@opentiny/vue-date-picker'
import DatePickerMobile from '@opentiny/vue-date-picker-mobile-first'
import TinyActionSheet from '@opentiny/vue-action-sheet'
import { IconCoin } from '@opentiny/vue-icon'
import { setup, props, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/amount/vue'
import FilterBox from '@opentiny/vue-filter-box'
import Radio from '@opentiny/vue-radio'
import RadioGroup from '@opentiny/vue-radio-group'

export default defineComponent({
  inheritAttrs: false,
  components: {
    TinyPopover: Popover,
    TinyInput: Input,
    TinyButton: Button,
    TinyCurrency: Currency,
    TinyDatePicker: DatePicker,
    TinyDatePickerMobile: DatePickerMobile,
    TinyActionSheet,
    IconCoin: IconCoin(),
    TinyFilterBox: FilterBox,
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup
  },
  emits: ['update:modelValue', 'update:currency', 'update:date', 'change', 'clear', 'filter-change'],
  props: [
    ...props,
    'modelValue',
    'tabindex',
    'size',
    'placeholder',
    'currency',
    'date',
    'dateAllowEmpty',
    'digits',
    'stringMode',
    'rounding',
    'maxLen',
    'negative',
    'disabled',
    'fetchCurrency',
    'fields',
    'popperClass',
    'popperAppendToBody',
    'format',
    'type',
    'holdZero',
    'modelTruncation',
    'strictInput',
    'plugin',
    'popUp',
    'hideCurrency',
    'displayOnly',
    'hideIcon',
    'numAllowEmpty',
    'label',
    'tip',
    'shape',
    'clearable',
    'filter',
    'blank'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
