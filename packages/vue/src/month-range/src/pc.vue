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
  <transition name="tiny-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="state.visible"
      class="tiny-picker-panel tiny-date-range-picker tiny-popper"
      :class="[
        {
          'has-sidebar': slots.sidebar || state.shortcuts
        },
        state.popperClass
      ]"
    >
      <div class="tiny-picker-panel__body-wrapper">
        <slot name="sidebar" class="tiny-picker-panel__sidebar"></slot>
        <div class="tiny-picker-panel__sidebar" v-if="state.shortcuts">
          <button
            type="button"
            class="tiny-picker-panel__shortcut"
            v-for="(shortcut, key) in state.shortcuts"
            :key="key"
            @click="handleShortcutClick(shortcut)"
            :title="shortcut.text"
          >
            {{ shortcut.text }}
          </button>
        </div>
        <div class="tiny-picker-panel__body">
          <div class="tiny-picker-panel__content tiny-date-range-picker__content is-left">
            <div class="tiny-date-range-picker__header">
              <button type="button" @click="leftPrevYear" class="tiny-picker-panel__icon-btn tiny-icon-d-arrow-left">
                <icon-double-left></icon-double-left>
              </button>
              <button
                type="button"
                v-if="state.unlinkPanels"
                @click="leftNextYear"
                :disabled="!state.enableYearArrow"
                :class="{ 'is-disabled': !state.enableYearArrow }"
                class="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right"
              >
                <icon-double-right></icon-double-right>
              </button>
              <div>{{ state.leftLabel }}</div>
            </div>
            <month-table
              selection-mode="range"
              :date="state.leftDate"
              :default-value="state.defaultValue"
              :min-date="state.minDate"
              :max-date="state.maxDate"
              :range-state="state.rangeState"
              :disabled-date="state.disabledDate"
              @changerange="handleChangeRange"
              @pick="handleRangePick"
            >
            </month-table>
          </div>
          <div class="tiny-picker-panel__content tiny-date-range-picker__content is-right">
            <div class="tiny-date-range-picker__header">
              <button
                type="button"
                v-if="state.unlinkPanels"
                @click="rightPrevYear"
                :disabled="!state.enableYearArrow"
                :class="{ 'is-disabled': !state.enableYearArrow }"
                class="tiny-picker-panel__icon-btn tiny-icon-d-arrow-left"
              >
                <icon-double-left></icon-double-left>
              </button>
              <button type="button" @click="rightNextYear" class="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right">
                <icon-double-right></icon-double-right>
              </button>
              <div>{{ state.rightLabel }}</div>
            </div>
            <month-table
              selection-mode="range"
              :date="state.rightDate"
              :default-value="state.defaultValue"
              :min-date="state.minDate"
              :max-date="state.maxDate"
              :range-state="state.rangeState"
              :disabled-date="state.disabledDate"
              @changerange="handleChangeRange"
              @pick="handleRangePick"
            >
            </month-table>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/month-range/vue'
import { $prefix, setup, directive, $props, defineComponent } from '@opentiny/vue-common'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import MonthTable from '@opentiny/vue-month-table'
import { iconDoubleRight, iconDoubleLeft } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'MonthRange',
  directives: directive({ Clickoutside }),
  components: {
    MonthTable,
    IconDoubleRight: iconDoubleRight(),
    IconDoubleLeft: iconDoubleLeft()
  },
  props: {
    ...$props,
    emitter: Object
  },
  emits: ['dodestroy', 'pick'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
