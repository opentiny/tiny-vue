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
  <div class="tiny-time-spinner" :class="{ 'has-seconds': showSeconds }">
    <template v-if="!arrowControl">
      <tiny-scrollbar
        @mouseenter="emitSelectRange('hours')"
        @mousemove="adjustCurrentSpinner('hours')"
        :class="[state.animationName]"
        class="tiny-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="tiny-time-spinner__list"
        noresize
        tag="ul"
        ref="hours"
      >
        <li
          @click="handleClick('hours', { value: hour, disabled })"
          v-for="(disabled, hour) in state.hoursList"
          class="tiny-time-spinner__item"
          :key="hour"
          :class="{ active: hour === state.hours, disabled }"
        >
          <span>{{ ('0' + (amPmMode ? hour % 12 || 12 : hour)).slice(-2) }}{{ amPm(hour) }}</span>
        </li>
      </tiny-scrollbar>
      <tiny-scrollbar
        @mouseenter="emitSelectRange('minutes')"
        @mousemove="adjustCurrentSpinner('minutes')"
        :class="[state.animationName + '-up']"
        class="tiny-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="tiny-time-spinner__list"
        noresize
        tag="ul"
        ref="minutes"
      >
        <li
          @click="handleClick('minutes', { value: key, disabled: false })"
          v-for="(enabled, key) in state.minutesList"
          :key="key"
          class="tiny-time-spinner__item"
          :class="{ active: key === state.minutes, disabled: !enabled }"
        >
          <span>{{ ('0' + key).slice(-2) }}</span>
        </li>
      </tiny-scrollbar>
      <tiny-scrollbar
        v-show="showSeconds"
        @mouseenter="emitSelectRange('seconds')"
        @mousemove="adjustCurrentSpinner('seconds')"
        :class="[state.animationName]"
        class="tiny-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="tiny-time-spinner__list"
        noresize
        tag="ul"
        ref="seconds"
      >
        <li
          @click="handleClick('seconds', { value: key, disabled: false })"
          v-for="(second, key) in 60"
          class="tiny-time-spinner__item"
          :class="{ active: key === state.seconds }"
          :key="key"
        >
          <span>{{ ('0' + key).slice(-2) }}</span>
        </li>
      </tiny-scrollbar>
    </template>
    <template v-if="arrowControl">
      <div @mouseenter="emitSelectRange('hours')" class="tiny-time-spinner__wrapper is-arrow">
        <i class="tiny-time-spinner__arrow tiny-icon-arrow-up" v-repeat-click="decrease">
          <icon-chevron-up></icon-chevron-up>
        </i>
        <i class="tiny-time-spinner__arrow tiny-icon-arrow-down" v-repeat-click="increase">
          <icon-chevron-down></icon-chevron-down>
        </i>

        <ul class="tiny-time-spinner__list" ref="hours" :class="[state.animationName]">
          <li
            class="tiny-time-spinner__item"
            :class="{
              active: hour === state.hours,
              disabled: state.hoursList[hour]
            }"
            v-for="(hour, key) in state.arrowHourList"
            :key="key"
          >
            <span>{{ hour === undefined ? '' : ('0' + (amPmMode ? hour % 12 || 12 : hour)).slice(-2) + amPm(hour) }}</span>
          </li>
        </ul>
      </div>
      <div @mouseenter="emitSelectRange('minutes')" class="tiny-time-spinner__wrapper is-arrow">
        <i class="tiny-time-spinner__arrow tiny-icon-arrow-up" v-repeat-click="decrease">
          <icon-chevron-up></icon-chevron-up>
        </i>
        <i class="tiny-time-spinner__arrow tiny-icon-arrow-down" v-repeat-click="increase">
          <icon-chevron-down></icon-chevron-down>
        </i>
        <ul class="tiny-time-spinner__list" ref="minutes" :class="[state.animationName + '-up']">
          <li class="tiny-time-spinner__item" :class="{ active: minute === state.minutes }" v-for="(minute, key) in state.arrowMinuteList" :key="key">
            <span>{{ minute === undefined ? '' : ('0' + minute).slice(-2) }}</span>
          </li>
        </ul>
      </div>
      <div @mouseenter="emitSelectRange('seconds')" class="tiny-time-spinner__wrapper is-arrow" v-if="showSeconds">
        <i class="tiny-time-spinner__arrow tiny-icon-arrow-up" v-repeat-click="decrease">
          <icon-chevron-up></icon-chevron-up>
        </i>
        <i class="tiny-time-spinner__arrow tiny-icon-arrow-down" v-repeat-click="increase">
          <icon-chevron-down></icon-chevron-down>
        </i>
        <ul class="tiny-time-spinner__list" ref="seconds" :class="[state.animationName]">
          <li v-for="(second, key) in state.arrowSecondList" class="tiny-time-spinner__item" :class="{ active: second === state.seconds }" :key="key">
            <span>{{ second === undefined ? '' : ('0' + second).slice(-2) }}</span>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/time-spinner/vue'
import { $prefix, setup, directive, defineComponent } from '@opentiny/vue-common'
import Scrollbar from '@opentiny/vue-scrollbar'
import bind from '@opentiny/vue-renderless/common/deps/repeat-click'
import { iconChevronDown, iconChevronUp } from '@opentiny/vue-icon'

const $constants = {
  ANIMATIONNAME: 'tiny-transition-timepicker'
}

export default defineComponent({
  name: $prefix + 'TimeSpinner',
  emits: ['change', 'select-range'],
  components: {
    TinyScrollbar: Scrollbar,
    IconChevronDown: iconChevronDown(),
    IconChevronUp: iconChevronUp()
  },
  directives: directive({
    repeatClick: { bind }
  }),
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    date: {},
    defaultValue: {},
    showSeconds: {
      type: Boolean,
      default: true
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: '' // 'a': am/pm; 'A': AM/PM
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
