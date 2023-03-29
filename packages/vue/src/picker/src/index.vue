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
  <tiny-input
    :tabindex="tabindex"
    v-if="!state.ranged"
    class="tiny-date-editor"
    :class="'tiny-date-editor--' + state.type"
    :readonly="!editable || readonly || state.type === 'dates' || state.type === 'week'"
    :disabled="state.pickerDisabled"
    :size="state.pickerSize"
    :name="name"
    v-bind="state.firstInputId"
    v-clickoutside="handleClose"
    :placeholder="placeholder"
    @focus="handleFocus"
    @keydown="handleKeydown"
    :modelValue="state.displayValue"
    :title="state.displayValue"
    @update:modelValue="(value) => (state.userInput = value)"
    @change="handleChange"
    @mouseenter="handleMouseEnter"
    @mouseleave="state.showClose = false"
    :validateEvent="false"
    ref="reference"
  >
    <template #suffix>
      <i class="tiny-input__icon">
        <transition name="tiny-transition-icon-scale-in">
          <component
            :is="state.showClose ? clearIcon : null"
            @click="handleClickIcon"
            @mouseenter="state.showClose = true"
            @mouseleave="state.showClose = false"
            v-if="state.haveTrigger"
            class="baseClearicon"
          />
        </transition>
        <component :is="state.triggerClass" @click="handleFocus" class="tiny-svg-size" />
      </i>
    </template>
    <template #panel>
      <component
        :is="state.panel"
        ref="picker"
        :visible="state.pickerVisible"
        @pick="handlePick"
        @select-range="handleSelectRange"
        @select-change="handleSelectChange"
      ></component>
    </template>
  </tiny-input>
  <div
    class="tiny-date-editor tiny-range-editor tiny-input tiny-input__inner"
    :class="[
      'tiny-date-editor--' + state.type,
      state.pickerSize ? `tiny-range-editor--${state.pickerSize}` : '',
      state.pickerDisabled ? 'is-disabled' : '',
      state.pickerVisible ? 'is-active' : ''
    ]"
    @click="handleFocus"
    @mouseenter="handleMouseEnter"
    @mouseleave="state.showClose = false"
    @keydown="handleKeydown"
    ref="reference"
    v-clickoutside="handleClose"
    v-else
  >
    <input
      autocomplete="off"
      :placeholder="startPlaceholder"
      :value="state.displayValue && state.displayValue[0]"
      :disabled="state.pickerDisabled"
      v-bind="state.firstInputId"
      :readonly="!editable || readonly"
      :name="name && name[0]"
      @input="handleStartInput"
      @change="handleStartChange"
      @focus="handleFocus"
      class="tiny-range-input"
    />
    <slot name="range-separator">
      <span v-if="typeof rangeSeparator === 'string'" class="tiny-range-separator">{{ rangeSeparator }}</span>
      <component v-else :is="rangeSeparator" />
    </slot>
    <input
      autocomplete="off"
      :placeholder="endPlaceholder"
      :value="state.displayValue && state.displayValue[1]"
      :disabled="state.pickerDisabled"
      v-bind="state.secondInputId"
      :readonly="!editable || readonly"
      :name="name && name[1]"
      @input="handleEndInput"
      @change="handleEndChange"
      @focus="handleFocus"
      class="tiny-range-input"
    />
    <i @click="handleClickIcon" v-if="state.haveTrigger" class="tiny-input__icon tiny-range__close-icon">
      <transition name="tiny-transition-icon-scale-in">
        <component :is="state.showClose ? clearIcon : null" />
      </transition>
    </i>
    <i class="tiny-input__icon tiny-range__icon tiny-input__suffix">
      <component :is="state.triggerClass" />
    </i>
    <component :is="state.panel" ref="picker" :visible="state.pickerVisible" @pick="handlePick" @select-range="handleSelectRange"></component>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/picker/vue'
import { $prefix, setup, directive, defineComponent } from '@opentiny/vue-common'
import Input from '@opentiny/vue-input'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import DatePanel from '@opentiny/vue-date-panel'
import DateRangePanel from '@opentiny/vue-date-range'
import MonthRangePanel from '@opentiny/vue-month-range'
import TimePanel from '@opentiny/vue-time'
import TimeRangePanel from '@opentiny/vue-time-range'
import TimeSelect from '@opentiny/vue-time-panel'
import { iconCalendar, iconTime, iconClose } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'Picker',
  components: {
    TinyInput: Input,
    IconCalendar: iconCalendar(),
    IconTime: iconTime(),
    IconClose: iconClose()
  },
  emits: ['created', 'select-change', 'update:modelValue', 'blur', 'focus', 'change'],
  props: {
    type: {
      type: String,
      default: 'date'
    },
    tabindex: {
      type: String,
      default: '1'
    },
    timeArrowControl: Boolean,
    size: String,
    format: String,
    valueFormat: String,
    timeFormat: String,
    readonly: Boolean,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    prefixIcon: Object,
    suffixIcon: Object,
    clearIcon: {
      type: Object,
      default() {
        return iconClose()
      }
    },
    name: {
      default: '',
      validator(value) {
        return (
          value === null ||
          value === undefined ||
          typeof value === 'string' ||
          value instanceof String ||
          (Array.isArray(value) && value.length === 2 && value.every((item) => typeof item === 'string' || item instanceof String))
        )
      }
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    id: {
      default: '',
      validator(value) {
        return (
          value === null ||
          value === undefined ||
          typeof value === 'string' ||
          value instanceof String ||
          (Array.isArray(value) && value.length === 2 && value.every((item) => typeof item === 'string' || item instanceof String))
        )
      }
    },
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    editable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    modelValue: {},
    defaultValue: {},
    defaultTime: {},
    rangeSeparator: {
      type: [Object, String],
      default: '-'
    },
    pickerOptions: {},
    unlinkPanels: Boolean,
    validateEvent: {
      type: Boolean,
      default: true
    },
    isRange: Boolean,
    arrowControl: Boolean,
    timezoneData: {},
    showTimezone: {
      type: Boolean,
      default: false
    },
    defaultTimezone: String,
    isutc8: {
      type: Boolean,
      default: false
    },
    dbTimezone: Number,
    timezone: Number,
    iso8601: Boolean
  },
  directives: directive({ Clickoutside }),
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: {
        DatePanel,
        DateRangePanel,
        MonthRangePanel,
        TimePanel,
        TimeRangePanel,
        TimeSelect
      }
    })
  }
})
</script>
