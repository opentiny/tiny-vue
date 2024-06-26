<template>
  <div ref="reference" data-tag="tiny-date-container" :class="state.isDisplayOnly ? 'inline' : ''">
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
      data-tag="tiny-date-editor"
      :readonly="state.isMobileScreen || !editable || readonly || state.type === 'dates' || state.type === 'week'"
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
      :custom-class="'sm:border ' + gcls(state.type)"
    >
      <template v-if="label" #prefix>
        <tiny-tooltip
          effect="light"
          :content="state.labelTooltip"
          placement="top"
          @mouseenter.native="handleEnterPickerlabel"
        >
          <span data-tag="tiny-input__label" :class="gcls('input-label')" ref="label"> {{ label }} </span>
        </tiny-tooltip>
      </template>
      <template #suffix>
        <i data-tag="icon" class="flex items-center cursor-pointer">
          <transition v-if="!state.isMobileScreen" name="tiny-transition-icon-scale-in">
            <component
              :is="state.showClose ? clearIcon : null"
              @click="handleClickIcon"
              @mouseenter="state.showClose = true"
              @mouseleave="state.showClose = false"
              v-if="state.haveTrigger"
              class="fill-color-text-placeholder hover:fill-color-text-primary"
            />
          </transition>
          <component
            :is="state.triggerClass"
            @click="handleFocus"
            custom-class="h-5 w-5 sm:h-4 sm:w-4"
            :class="
              !state.isDisplayOnly && state.pickerDisabled
                ? 'fill-color-icon-placeholder sm:fill-color-icon-disabled'
                : 'fill-color-icon-secondary sm:fill-color-text-placeholder'
            "
          />
        </i>
      </template>
    </tiny-input>
    <div
      data-tag="tiny-date-editor tiny-range-editor tiny-input tiny-input__inner"
      :class="
        m(
          gcls('range-editor'),
          gcls(state.type),
          state.pickerVisible && gcls('is-active'),
          !state.isDisplayOnly && state.pickerDisabled && gcls('is-disabled'),
          state.isDisplayOnly && gcls('is-display-only')
        )
      "
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
        <span v-if="label" data-tag="tiny-input__label" ref="label"> {{ label }} </span>
      </tiny-tooltip>
      <template v-if="!state.isDisplayOnly">
        <input
          autocomplete="off"
          :placeholder="startPlaceholder"
          :value="state.displayValue && state.displayValue[0]"
          :title="state.displayValue && state.displayValue[0]"
          :disabled="state.pickerDisabled"
          v-bind="state.firstInputId"
          :readonly="state.isMobileScreen || !editable || readonly"
          :name="name && name[0]"
          @input="handleStartInput"
          @change="handleStartChange"
          @focus="handleFocus"
          data-tag="tiny-range-input"
          :class="gcls('range-input')"
        />
        <slot name="range-separator">
          <span
            v-if="typeof rangeSeparator === 'string'"
            data-tag="tiny-range-separator"
            :class="
              m(
                gcls('range-separator'),
                { 'text-center': type === 'datetimerange' },
                { 'text-color-icon-placeholder': !state.isDisplayOnly && state.pickerDisabled }
              )
            "
            >{{ rangeSeparator }}</span
          >
          <component v-else :is="rangeSeparator" />
        </slot>
        <input
          autocomplete="off"
          :placeholder="endPlaceholder"
          :value="state.displayValue && state.displayValue[1]"
          :title="state.displayValue && state.displayValue[1]"
          :disabled="state.pickerDisabled"
          v-bind="state.secondInputId"
          :readonly="state.isMobileScreen || !editable || readonly"
          :name="name && name[1]"
          @input="handleEndInput"
          @change="handleEndChange"
          @focus="handleFocus"
          data-tag="tiny-range-input"
          :class="gcls('range-input')"
        />
        <i
          @click="handleClickIcon"
          v-if="!state.isMobileScreen && state.haveTrigger"
          data-tag="tiny-input__icon tiny-range__close-icon"
          :class="gcls('close-icon')"
        >
          <transition name="tiny-transition-icon-scale-in">
            <component :is="state.showClose ? clearIcon : null" custom-class="fill-color-text-placeholder" />
          </transition>
        </i>
        <i
          data-tag="tiny-input__icon tiny-range__icon tiny-input__suffix"
          v-if="!state.isDisplayOnly"
          :class="gcls('suffix')"
        >
          <component
            :is="state.triggerClass"
            custom-class="h-5 w-5 sm:h-4 sm:w-4"
            :class="
              !state.isDisplayOnly && state.pickerDisabled
                ? 'fill-color-icon-placeholder sm:fill-color-icon-secondary'
                : 'fill-color-icon-secondary sm:fill-color-text-placeholder'
            "
          />
        </i>
      </template>
      <tiny-tooltip
        data-tag="tiny-range-editor-display-only"
        v-if="state.isDisplayOnly"
        :content="state.displayOnlyTooltip"
        effect="light"
        placement="top"
        @mouseenter.native="handleEnterDisplayOnlyContent"
      >
        <span>{{ state.displayValue && state.displayValue.join(` ${t('ui.datepicker.to')} `) }}</span>
      </tiny-tooltip>
    </div>
    <!-- 大屏面板 -->
    <component
      v-if="!state.isMobileScreen"
      :is="state.panel"
      :step="step"
      :show-week-number="showWeekNumber"
      :format-weeks="formatWeeks"
      ref="picker"
      :visible="state.pickerVisible"
      @pick="handlePick"
      @select-range="handleSelectRange"
      @select-change="handleSelectChange"
    ></component>
    <!-- 小屏 - 日期面板 -->
    <tiny-date-picker-mobile
      v-if="state.isMobileScreen && state.isDateMobileComponent"
      ref="datePickerMobile"
      v-model="state.dateMobileOption.value"
      :title="title"
      :clearable="clearable"
      :step="step"
      :show-time-second="state.showSeconds"
      :range-separator="rangeSeparator"
      :end-placeholder="endPlaceholder"
      custom-class="max-h-[80%]"
      :type="state.dateMobileOption.type"
      :visible="state.dateMobileOption.visible"
      :picker-options="pickerOptions"
      @confirm="emitInput"
      @clear="emitInput"
      @update:visible="dateMobileToggle"
    >
    </tiny-date-picker-mobile>
    <!-- 小屏 - 时间面板 -->
    <tiny-time-picker-mobile
      v-if="state.isMobileScreen && state.isTimeMobileComponent"
      ref="datePickerMobile"
      v-model="state.timeMobileOption.value"
      :default-value="state.timeMobileOption.defaultValue"
      :title="title"
      :clearable="clearable"
      :step="step"
      :show-seconds="state.showSeconds"
      custom-class="max-h-[80%]"
      :type="state.timeMobileOption.type"
      :visible="state.timeMobileOption.visible"
      @confirm="timeMobileConfirm"
      @update:visible="timeMobileToggle"
    >
    </tiny-time-picker-mobile>
  </div>
</template>

<script>
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
import TimeSelect from '@opentiny/vue-time-panel'
import { IconCalendar, IconTime, IconClose } from '@opentiny/vue-icon'
import TinyTooltip from '@opentiny/vue-tooltip'
import FilterBox from '@opentiny/vue-filter-box'
import DatePickerMobile from '@opentiny/vue-date-picker-mobile-first'
import TimePickerMobile from '@opentiny/vue-time-picker-mobile'
import { classes } from './token'
import { pickerProps } from './type'

export default defineComponent({
  components: {
    TinyInput: Input,
    TinyFilterBox: FilterBox,
    TinyDatePickerMobile: DatePickerMobile,
    TinyTimePickerMobile: TimePickerMobile,
    IconCalendar: IconCalendar(),
    IconTime: IconTime(),
    IconClose: IconClose(),
    TinyTooltip
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
      classes,
      extendOptions: {
        DatePanel,
        DateRangePanel,
        MonthRangePanel,
        YearRangePanel,
        TimePanel,
        TimeRangePanel,
        TimeSelect
      }
    })
  }
})
</script>
