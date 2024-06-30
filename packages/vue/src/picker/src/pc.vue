<template>
  <div ref="reference" class="tiny-date-container">
    <tiny-filter-box
      v-if="shape === 'filter'"
      v-clickoutside.mousedown="handleClose"
      @click="handleFocus"
      :show-close="clearable"
      :placeholder="placeholder"
      :disabled="state.pickerDisabled"
      :label="label"
      :tip="tip"
      :value="state.displayValue.toString()"
      :drop-down-visible="state.pickerVisible"
      :blank="blank"
    ></tiny-filter-box>
    <tiny-input
      :tabindex="tabindex"
      v-else-if="!state.ranged"
      class="tiny-date-editor"
      :class="'tiny-date-editor--' + state.type"
      :readonly="!editable || readonly || state.type === 'dates' || state.type === 'week'"
      :disabled="state.pickerDisabled"
      :size="state.pickerSize"
      :name="name"
      v-bind="state.firstInputId"
      v-clickoutside.mousedown="handleClose"
      :placeholder="placeholder"
      @focus="handleFocus"
      @keydown="handleKeydown"
      :model-value="state.displayValue"
      :title="state.type === 'date' ? '' : state.displayValue"
      :display-only="state.isDisplayOnly"
      :display-only-content="state.displayValue"
      @input="handleInput"
      @change="handleChange"
      @mouseenter="handleMouseEnter"
      @mouseleave="state.showClose = false"
      :validate-event="false"
    >
      <template v-if="label" #prefix>
        <tiny-tooltip
          effect="light"
          :content="state.labelTooltip"
          placement="top"
          @mouseenter.native="handleEnterPickerlabel"
        >
          <span class="tiny-input__label" ref="label"> {{ label }} </span>
        </tiny-tooltip>
      </template>
      <template #suffix>
        <i class="tiny-input__icon-container">
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
    </tiny-input>
    <div
      class="tiny-date-editor tiny-range-editor tiny-input tiny-input__inner"
      :class="[
        'tiny-date-editor--' + state.type,
        state.pickerSize ? `tiny-range-editor--${state.pickerSize}` : '',
        state.pickerDisabled ? 'is-disabled' : '',
        state.pickerVisible ? 'is-active' : '',
        state.isDisplayOnly ? 'is-display-only' : ''
      ]"
      @click="handleFocus"
      @mouseenter="handleMouseEnter"
      @mouseleave="state.showClose = false"
      @keydown="handleKeydown"
      v-clickoutside.mousedown="handleClose"
      v-else
    >
      <tiny-tooltip
        effect="light"
        :content="state.labelTooltip"
        placement="top"
        @mouseenter.native="handleEnterPickerlabel"
      >
        <span v-if="label" class="tiny-input__label" ref="label"> {{ label }} </span>
      </tiny-tooltip>
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
      <i class="tiny-input__icon tiny-range__icon tiny-input__suffix" v-if="!state.isDisplayOnly">
        <component :is="state.triggerClass" />
      </i>
      <tiny-tooltip
        class="tiny-range-editor-display-only"
        v-if="state.isDisplayOnly"
        :content="state.displayOnlyTooltip"
        effect="light"
        placement="top"
        @mouseenter.native="handleEnterDisplayOnlyContent"
      >
        <span>{{ state.displayValue && state.displayValue.join(` ${t('ui.datepicker.to')} `) }}</span>
      </tiny-tooltip>
    </div>
    <component
      :is="state.panel"
      :step="step"
      :show-week-number="showWeekNumber"
      :time-editable="timeEditable"
      :format-weeks="formatWeeks"
      ref="picker"
      :visible="state.pickerVisible"
      @pick="handlePick"
      @select-range="handleSelectRange"
      @select-change="handleSelectChange"
    ></component>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/picker/vue'
import { setup, directive, defineComponent } from '@opentiny/vue-common'
import Input from '@opentiny/vue-input'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import DatePanel from '@opentiny/vue-date-panel'
import DateRangePanel from '@opentiny/vue-date-range'
import MonthRangePanel from '@opentiny/vue-month-range'
import YearRangePanel from '@opentiny/vue-year-range'
import TimePanel from '@opentiny/vue-time'
import TimeRangePanel from '@opentiny/vue-time-range'
import QuarterPanel from '@opentiny/vue-quarter-panel'
import TimeSelect from '@opentiny/vue-time-panel'
import TinyTooltip from '@opentiny/vue-tooltip'
import FilterBox from '@opentiny/vue-filter-box'
import { iconCalendar, iconTime } from '@opentiny/vue-icon'
import { pickerProps } from './type'
import '@opentiny/vue-theme/picker/index.less'

export default defineComponent({
  components: {
    TinyInput: Input,
    TinyFilterBox: FilterBox,
    TinyTooltip,
    IconCalendar: iconCalendar(),
    IconTime: iconTime()
  },
  emits: ['created', 'select-change', 'update:modelValue', 'blur', 'focus', 'change'],
  props: pickerProps,
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
        YearRangePanel,
        TimePanel,
        TimeRangePanel,
        QuarterPanel,
        TimeSelect
      }
    })
  }
})
</script>
