<template>
  <div ref="root" class="tiny-amount" :class="{ 'hide-icon': hideIcon }" v-bind="a($attrs, ['^on[A-Z]'])">
    <tiny-popover
      v-model="state.visible"
      placement="bottom-start"
      :popper-class="
        'tiny-amount-popper' +
        (popperClass ? ' ' + popperClass : '') +
        (shape === 'filter' ? ' tiny-amount-filter-box' : '')
      "
      trigger="manual"
      :append-to-body="popperAppendToBody"
      v-if="!(displayOnly || hideIcon)"
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
          :tabindex="tabindex"
          :size="size"
          :model-value="state.amountValue"
          :maxlength="maxLen"
          :display-only="displayOnly"
          :placeholder="placeholder"
          :disabled="disabled"
          @focus="inputFocus"
          @blur="inputBlur"
          @update:modelValue="onInput"
        >
          <template #suffix>
            <div @click="toggleVisible" class="tiny-amount-input-icon" v-if="!hideIcon">
              <icon-coin class="tiny-svg-size" />
            </div>
          </template>
        </tiny-input>
      </template>
      <div class="popover-con" ref="popover">
        <div class="popover-filter-content" v-if="shape === 'filter' && filter">
          <tiny-radio-group v-model="state.radioVal" @change="handleChange">
            <tiny-radio
              v-for="(item, index) in state.filterMenu"
              :key="index"
              :label="t(item)"
              class="popover-filter-botton"
            >
              {{ t(item) }}
            </tiny-radio>
          </tiny-radio-group>
        </div>
        <div class="module" v-if="popUp">
          <div class="popover-left">{{ t('ui.amount.currency') }}</div>
          <tiny-currency
            tiny_mode="pc"
            :tiny_mode_root="true"
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
          <tiny-input
            class="popover-right"
            v-model="editorState.amount"
            @update:modelValue="popInput"
            :maxlength="maxLen"
          ></tiny-input>
        </div>
        <div class="module" v-if="state.theme === 'saas'">
          <tiny-button @click="reset">{{ t('ui.base.reset') }}</tiny-button>
          <tiny-button type="primary" @click="save">{{ t('ui.base.confirm') }}</tiny-button>
        </div>
        <div class="module" v-else>
          <tiny-button type="primary" @click="save">{{ t('ui.base.confirm') }}</tiny-button>
          <tiny-button @click="reset">{{ t('ui.base.reset') }}</tiny-button>
        </div>
      </div>
    </tiny-popover>
    <tiny-input
      v-else
      :tabindex="tabindex"
      :size="size"
      :model-value="state.amountValue"
      :maxlength="maxLen"
      :display-only="displayOnly"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus="inputFocus"
      @blur="inputBlur"
      @update:modelValue="onInput"
    >
      <template #suffix>
        <div @click="toggleVisible" class="tiny-amount-input-icon" v-if="!hideIcon">
          <icon-coin class="tiny-svg-size" />
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
import { IconCoin } from '@opentiny/vue-icon'
import { setup, props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/amount/vue'
import FilterBox from '@opentiny/vue-filter-box'
import Radio from '@opentiny/vue-radio'
import RadioGroup from '@opentiny/vue-radio-group'
import '@opentiny/vue-theme/amount/index.less'

export default {
  inheritAttrs: false,
  components: {
    TinyPopover: Popover,
    TinyInput: Input,
    TinyButton: Button,
    TinyCurrency: Currency,
    TinyDatePicker: DatePicker,
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
}
</script>
