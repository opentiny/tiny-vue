<template>
  <transition @after-leave="$emit('dodestroy')">
    <div
      v-show="state.visible"
      class="w-[552px] text-color-text-primary text-xs shadow-md bg-color-bg-1 rounded leading-4 my-0.5 mx-0"
      :class="[
        {
          'w-[664px]': slots.sidebar || state.shortcuts
        },
        state.popperClass
      ]"
    >
      <div class="after:content-[''] after:table after:clear-both">
        <slot
          name="sidebar"
          class="absolute top-0 bottom-0 w-28 border-r border-r-color-bg-3 box-border pt-5 bg-color-bg-1 overflow-auto"
        ></slot>
        <div
          class="absolute top-0 bottom-0 w-28 border-r border-r-color-bg-3 box-border pt-5 bg-color-bg-1 overflow-auto"
          v-if="state.shortcuts"
        >
          <button
            type="button"
            class="block w-24 my-0 mx-auto rounded border-0 bg-transparent leading-8 text-xs text-color-text-primary pl-4 text-left outline-0 cursor-pointer truncate hover:bg-color-bg-2"
            v-for="(shortcut, key) in state.shortcuts"
            :key="key"
            @click="handleShortcutClick(shortcut)"
            :title="shortcut.text"
          >
            {{ shortcut.text }}
          </button>
        </div>
        <div
          class="after:content-[''] after:table after:clear-both min-w-[513px]"
          :class="{ 'ml-28': slots.sidebar || state.shortcuts }"
        >
          <div class="m-0 float-left w-1/2 border-r border-r-color-bg-3 relative py-0 px-4">
            <div class="relative text-center h-12 p-4">
              <button
                type="button"
                @click="leftPrevYear"
                class="float-left text-sm leading-4 fill-color-text-primary border-0 bg-left-bottom cursor-pointer outline-0 hover:fill-color-brand"
              >
                <icon-double-left></icon-double-left>
              </button>
              <div class="mx-12 text-xs font-medium">{{ state.leftLabel }}</div>
            </div>
            <year-table
              ref="leftYearTable"
              :selection-mode="state.selectionMode"
              :date="state.leftDate"
              :default-value="state.defaultValue"
              :min-date="state.minDate"
              :max-date="state.maxDate"
              :range-state="state.rangeState"
              :disabled-date="state.disabledDate"
              :start-year="state.leftStartYear"
              @changerange="handleChangeRange"
              @pick="handleRangePick"
            >
            </year-table>
          </div>
          <div class="m-0 float-right w-1/2 border-r border-r-color-bg-3 relative py-0 px-4">
            <div class="relative text-center h-12 p-4">
              <button
                type="button"
                @click="rightNextYear"
                class="float-right text-sm leading-4 fill-color-text-primary border-0 bg-left-bottom cursor-pointer outline-0 hover:fill-color-brand"
              >
                <icon-double-right></icon-double-right>
              </button>
              <div class="mx-12 text-xs font-medium">{{ state.rightLabel }}</div>
            </div>
            <year-table
              ref="rightRearTable"
              :selection-mode="state.selectionMode"
              :date="state.rightDate"
              :default-value="state.defaultValue"
              :min-date="state.minDate"
              :max-date="state.maxDate"
              :range-state="state.rangeState"
              :disabled-date="state.disabledDate"
              :start-year="state.rightStartYear"
              @changerange="handleChangeRange"
              @pick="handleRangePick"
            >
            </year-table>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/year-range/vue'
import { setup, directive, props, defineComponent } from '@opentiny/vue-common'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import YearTable from '@opentiny/vue-year-table'
import { IconDoubleRight, IconDoubleLeft } from '@opentiny/vue-icon'

export default defineComponent({
  directives: directive({ Clickoutside }),
  components: {
    YearTable,
    IconDoubleRight: IconDoubleRight(),
    IconDoubleLeft: IconDoubleLeft()
  },
  props: [...props, 'emitter'],
  emits: ['dodestroy', 'pick'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
