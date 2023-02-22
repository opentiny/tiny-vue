<template>
  <div ref="root" class="tiny-amount" v-bind="a($attrs, ['^on[A-Z]'])">
    <tiny-popover
      v-model="state.visible"
      placement="bottom-start"
      :popper-class="'tiny-amount-popper' + (popperClass ? ' ' + popperClass : '')"
      trigger="manual"
      :append-to-body="popperAppendToBody"
    >
      <template #reference>
        <tiny-input
          :tabindex="tabindex"
          :size="size"
          :modelValue="getAmountText()"
          :maxlength="maxLen"
          :placeholder="placeholder"
          :disabled="disabled"
          @focus="inputFocus"
          @blur="inputBlur"
          @update:modelValue="onInput"
        >
          <template #suffix>
            <div @click="toggleVisible" class="tiny-amount-input-icon">
              <icon-coin class="tiny-svg-size" />
            </div>
          </template>
        </tiny-input>
      </template>
      <div class="popover-con" ref="popover">
        <div class="module" v-if="popUp">
          <div class="popover-left">{{ t('ui.amount.currency') }}</div>
          <tiny-currency
            class="popover-right"
            v-model="editorState.currency"
            :clearable="false"
            :fields="fields"
            :fetch-currency="fetchCurrency"
            :popper-class="popperClass"
            :popper-append-to-body="popperAppendToBody"
            :currency="currency"
          ></tiny-currency>
        </div>
        <div v-if="date || dateAllowEmpty" class="module">
          <div class="popover-left">{{ t('ui.amount.date') }}</div>
          <tiny-date-picker
            class="popover-right"
            v-model="editorState.date"
            :popper-class="'tiny-amount-popper' + (popperClass ? ' ' + popperClass : '')"
            :popper-append-to-body="popperAppendToBody"
          ></tiny-date-picker>
        </div>
        <div class="module">
          <div class="popover-left">{{ t('ui.amount.amount') }}</div>
          <tiny-input class="popover-right" v-model="editorState.amount" @update:modelValue="popInput" :maxlength="maxLen"></tiny-input>
        </div>
        <div class="module">
          <tiny-button type="primary" @click="save">{{ t('ui.base.confirm') }}</tiny-button>
          <tiny-button @click="reset">{{ t('ui.base.reset') }}</tiny-button>
        </div>
      </div>
    </tiny-popover>
  </div>
</template>

<script>
import Popover from '@opentiny/vue-popover'
import Input from '@opentiny/vue-input'
import Currency from '@opentiny/vue-currency'
import Button from '@opentiny/vue-button'
import DatePicker from '@opentiny/vue-date-picker'
import { IconCoin } from '@opentiny/vue-icon'
import { $prefix, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/amount/vue'

export default {
  inheritAttrs: false,
  name: $prefix + 'Amount',
  components: {
    TinyPopover: Popover,
    TinyInput: Input,
    TinyButton: Button,
    TinyCurrency: Currency,
    TinyDatePicker: DatePicker,
    IconCoin: IconCoin()
  },
  props: {
    modelValue: {
      type: [Number, String]
    },
    tabindex: { type: String, default: '1' },
    size: String,
    placeholder: {
      type: String,
      default: ''
    },
    currency: {
      type: String,
      default: 'CNY'
    },
    date: [String, Date],
    dateAllowEmpty: {
      type: Boolean,
      default: false
    },
    digits: {
      type: Number,
      default: 2
    },
    rounding: {
      type: Boolean,
      default: true
    },
    maxLen: {
      type: Number,
      default: 15
    },
    negative: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fetchCurrency: Function,
    fields: Object,
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    format: Object,
    type: {
      type: String,
      default: 'amount'
    },
    holdZero: {
      type: Boolean,
      default: true
    },
    modelTruncation: {
      type: Boolean,
      default: true
    },
    strictInput: {
      type: Boolean,
      default: false
    },
    plugin: Function,
    popUp: {
      type: Boolean,
      default: true
    },
    hideCurrency: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
