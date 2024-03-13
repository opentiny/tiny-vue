<template>
  <div data-tag="tiny-time-spinner" :class="['flex', { 'has-seconds': showSeconds }]">
    <template v-if="!arrowControl">
      <tiny-scrollbar
        @mouseenter="emitSelectRange('hours')"
        @mousemove="adjustCurrentSpinner('hours')"
        :class="[gcls('wrapper'), state.animationName]"
        data-tag="tiny-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        data-view-class="tiny-time-spinner__list"
        :view-class="gcls('list')"
        noresize
        tag="div"
        ref="hours"
      >
        <div
          @click="handleClick('hours', { value: hour, disabled })"
          v-for="{ disabled, hour } in state.hoursList"
          data-tag="li"
          :key="hour"
          :class="[gcls('item')]"
        >
          <span :class="m(gcls('text'), { [gcls('active')]: hour === state.hours, [gcls('disabled')]: disabled })"
            >{{ ('0' + (amPmMode ? hour % 12 || 12 : hour)).slice(-2) }}{{ amPm(hour) }}</span
          >
        </div>
      </tiny-scrollbar>
      <tiny-scrollbar
        @mouseenter="emitSelectRange('minutes')"
        @mousemove="adjustCurrentSpinner('minutes')"
        :class="[gcls('wrapper'), state.animationName + '-up']"
        data-tag="tiny-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        data-view-class="tiny-time-spinner__list"
        :view-class="gcls('list')"
        noresize
        tag="div"
        ref="minutes"
      >
        <div
          @click="handleClick('minutes', { value: minute, disabled: false })"
          v-for="{ disabled, minute } in state.minutesList"
          :key="minute"
          data-tag="li"
          :class="[gcls('item')]"
        >
          <span
            :class="m(gcls('text'), { [gcls('active')]: minute === state.minutes, [gcls('disabled')]: !disabled })"
            >{{ ('0' + minute).slice(-2) }}</span
          >
        </div>
      </tiny-scrollbar>
      <tiny-scrollbar
        v-show="showSeconds"
        @mouseenter="emitSelectRange('seconds')"
        @mousemove="adjustCurrentSpinner('seconds')"
        :class="[gcls('wrapper'), state.animationName]"
        data-tag="tiny-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        data-view-class="tiny-time-spinner__list"
        :view-class="gcls('list')"
        noresize
        tag="div"
        ref="seconds"
      >
        <div
          @click="handleClick('seconds', { value: second, disabled: false })"
          v-for="{ second } in state.secondsList"
          data-tag="li"
          :class="[gcls('item')]"
          :key="second"
        >
          <span :class="m(gcls('text'), { [gcls('active')]: second === state.seconds })">{{
            ('0' + second).slice(-2)
          }}</span>
        </div>
      </tiny-scrollbar>
    </template>
    <template v-if="arrowControl">
      <div
        @mouseenter="emitSelectRange('hours')"
        data-tag="tiny-time-spinner__wrapper is-arrow"
        :class="gcls(['wrapper', 'is-arrow'])"
      >
        <i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-up" v-repeat-click="decrease">
          <icon-chevron-up></icon-chevron-up>
        </i>
        <i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-down" v-repeat-click="increase">
          <icon-chevron-down></icon-chevron-down>
        </i>

        <ul data-tag="tiny-time-spinner__list" ref="hours" :class="[state.animationName]">
          <div data-tag="li" v-for="(hour, key) in state.arrowHourList" :key="key">
            <span
              :class="
                m(gcls('text'), {
                  [gcls('active')]: hour === state.hours,
                  [gcls('disabled')]:
                    state.hoursList.find((item) => item.hour === hour) &&
                    state.hoursList.find((item) => item.hour === hour).disabled
                })
              "
              >{{ hour === undefined ? '' : ('0' + (amPmMode ? hour % 12 || 12 : hour)).slice(-2) + amPm(hour) }}</span
            >
          </div>
        </ul>
      </div>
      <div
        @mouseenter="emitSelectRange('minutes')"
        data-tag="tiny-time-spinner__wrapper is-arrow"
        :class="gcls(['wrapper', 'is-arrow'])"
      >
        <i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-up" v-repeat-click="decrease">
          <icon-chevron-up></icon-chevron-up>
        </i>
        <i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-down" v-repeat-click="increase">
          <icon-chevron-down></icon-chevron-down>
        </i>
        <ul data-tag="tiny-time-spinner__list" ref="minutes" :class="[state.animationName + '-up']">
          <div data-tag="li" v-for="(minute, key) in state.arrowMinuteList" :key="key">
            <span :class="m(gcls('text'), { [gcls('active')]: minute === state.minutes })">{{
              minute === undefined ? '' : ('0' + minute).slice(-2)
            }}</span>
          </div>
        </ul>
      </div>
      <div
        @mouseenter="emitSelectRange('seconds')"
        data-tag="tiny-time-spinner__wrapper is-arrow"
        v-if="showSeconds"
        :class="gcls(['wrapper', 'is-arrow'])"
      >
        <i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-up" v-repeat-click="decrease">
          <icon-chevron-up></icon-chevron-up>
        </i>
        <i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-down" v-repeat-click="increase">
          <icon-chevron-down></icon-chevron-down>
        </i>
        <ul data-tag="tiny-time-spinner__list" ref="seconds" :class="[state.animationName]">
          <div v-for="(second, key) in state.arrowSecondList" data-tag="li" :key="key">
            <span :class="m(gcls('text'), { [gcls('active')]: second === state.seconds })">{{
              second === undefined ? '' : ('0' + second).slice(-2)
            }}</span>
          </div>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/time-spinner/vue'
import { props, setup, directive, defineComponent } from '@opentiny/vue-common'
import Scrollbar from '@opentiny/vue-scrollbar'
import bind from '@opentiny/vue-renderless/common/deps/repeat-click'
import { IconChevronDown, IconChevronUp } from '@opentiny/vue-icon'
import { classes } from './token'

export default defineComponent({
  emits: ['change', 'select-range'],
  components: {
    TinyScrollbar: Scrollbar,
    IconChevronDown: IconChevronDown(),
    IconChevronUp: IconChevronUp()
  },
  directives: directive({
    repeatClick: { bind }
  }),
  props: [...props, 'date', 'defaultValue', 'showSeconds', 'arrowControl', 'amPmMode', 'step'],
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
