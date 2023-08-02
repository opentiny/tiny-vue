<template>
  <div ref="root" data-tag="tiny-filter" :class="m('text-sm text-color-text-primary relative', customClass)">
    <tiny-filter-bar :model-value="state.showPanelIndex" :data="state.labelList" @click="panelToggle">
      <template v-if="filterGroup" #icon>
        <div data-tag="filter-icon" class="w-full" @click="panelToggle('filter')">
          <slot name="icon" :active="state.filterPanel.show || state.hasFilterValue" :show="state.filterPanel.show">
            <div class="w-10 ml-2 flex-none flex justify-center cursor-pointer">
              <IconUnfilter custom-class="w-5 h-5 fill-current" :class="state.filterPanel.show || state.hasFilterValue ? ' text-color-brand' : ''"></IconUnfilter>
            </div>
          </slot>
        </div>
      </template>
    </tiny-filter-bar>

    <div ref="maskPoint"></div>
    <div ref="panelMask" data-tag="panel-mask" v-show="state.showPanel" class="fixed left-0 right-0 z-40 w-full h-full bg-black opacity-40" @click="cancel"></div>

    <div ref="panel" data-tag="tiny-filter-panel" v-show="state.showPanel" :class="m('absolute top-11 flex flex-col z-40 w-full bg-white overflow-hidden', panelClass)">
      <div data-tag="panel-scrollbar" v-show="state.selectPanel.config.type !== 'list'" class="flex-auto m-5 overflow-x-visible overflow-y-auto scrollbar-size-0">
        <TagGroup data-tag="select-group" v-show="state.showPanelIndex !== -1" v-model="state.selectPanel.selected" :data="state.selectPanel.config.options" :label="state.selectPanel.config.label" :type="state.selectPanel.config.type" :multiple="state.selectPanel.config.multiple" :column-num="columnNum" @click="selectOption"></TagGroup>

        <template v-if="filterGroup">
          <TagGroup data-tag="filter-group" v-show="state.filterPanel.show" v-for="(item, index) in filterGroup" :key="index" v-model="state.filterPanel.selected[index]" :data="item.options" :label="item.label" :type="item.type" :multiple="item.multiple" :column-num="columnNum" :class="[{ 'mt-5': index !== 0 }]" @click="filterSelectOption($event, index)"></TagGroup>
        </template>
      </div>

      <div data-tag="filter-list" v-show="state.selectPanel.config.type === 'list'" class="leading-[2.75rem] cursor-pointer h-full py-2 overflow-x-visible overflow-y-auto scrollbar-size-0">
        <div v-if="state.selectPanel.config.showAll" :class="['px-5 truncate', { 'text-color-brand': state.selectPanel.selected.length === 0 }]" @click.stop="selectOption()">
          {{ t('ui.base.all') }}
        </div>
        <div v-for="(item, index) in state.selectPanel.config.options" :key="index" :title="item.label" :class="['px-5 truncate', { 'text-color-brand': state.selectPanel.selected.indexOf(item.value) !== -1 }]" @click.stop="selectOption(item.value)">
          {{ item.label }}
        </div>
      </div>

      <div data-tag="filter-footer" v-show="state.selectPanel.config.multiple || state.filterPanel.show" class="flex items-center justify-end mx-5 mb-5">
        <slot name="footer" :cancel="cancel" :reset="reset" :confirm="confirm">
          <tiny-button v-show="!state.selectPanel.config.multiple" tiny_mode="mobile-first" key="btn1" size="medium" button-class="sm:max-w-full mr-4 flex-1" @click="cancel">{{ t('ui.base.cancel') }}</tiny-button>
          <tiny-button tiny_mode="mobile-first" key="btn2" size="medium" :reset-time="0" button-class="sm:max-w-full mr-4 flex-1" @click="reset(state.filterPanel.show)">{{ t('ui.base.reset') }}</tiny-button>
          <tiny-button tiny_mode="mobile-first" key="btn3" type="primary" size="medium" button-class="sm:max-w-full flex-1" @click="confirm(state.filterPanel.show)">{{ t('ui.base.confirm') }}</tiny-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/filter/vue'
import { setup, $props, defineComponent } from '@opentiny/vue-common'
import { IconChevronDown, IconChevronUp, IconUnfilter } from '@opentiny/vue-icon'
import TagGroup from './tag-group.vue'
import FilterBar from '@opentiny/vue-filter-bar'
import Button from '@opentiny/vue-button'

export default defineComponent({
  components: {
    TagGroup,
    TinyFilterBar: FilterBar,
    TinyButton: Button,
    IconUnfilter: IconUnfilter(),
    IconChevronDown: IconChevronDown(),
    IconChevronUp: IconChevronUp()
  },
  props: {
    ...$props,
    data: Array,
    modelValue: Array,
    columnNum: {
      type: Number,
      default: 3
    },
    filterGroup: Array,
    filterValue: Array,
    panelClass: String,
    customClass: String
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
