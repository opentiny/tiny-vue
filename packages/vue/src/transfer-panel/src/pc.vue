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
  <div class="tiny-transfer-panel" :class="[state.renderType === 'TinyTable' ? 'transferGrid' : '']">
    <p class="tiny-transfer-panel__header">
      <tiny-checkbox v-model="state.allChecked" @change="handleAllCheckedChange" :indeterminate="state.isIndeterminate">
        {{ title }}
        <div class="headSort" v-if="render && state.renderType !== 'TinyTable' && data.flag === 'sort'">
          <div class="sort-btn disabled up" @click="setPosition('up', $event)">
            <icon-arrow-up fill="#1890ff"></icon-arrow-up>
          </div>
          <div class="sort-btn disabled down" @click="setPosition('down', $event)">
            <icon-arrow-down fill="#1890ff"></icon-arrow-down>
          </div>
        </div>
        <span>{{ state.checkedSummary }}</span>
      </tiny-checkbox>
    </p>
    <div :class="['tiny-transfer-panel__body', state.hasFooter ? 'is-with-footer' : '']" ref="reference">
      <tiny-input
        class="tiny-transfer-panel__filter"
        v-model="state.query"
        size="small"
        :placeholder="placeholder"
        @mouseenter="state.inputHover = true"
        @mouseleave="state.inputHover = false"
        v-if="filterable"
      >
        <template #prefix>
          <i :class="['tiny-input__icon', 'tiny-icon-' + state.inputIcon]" @click="clearQuery"></i>
        </template>
      </tiny-input>
      <transition-group
        name="tiny-transition-transfer-fade"
        tag="div"
        v-show="!render"
        role="group"
        aria-label="checkbox-group"
        class="tiny-checkbox-group tiny-transfer-panel__list"
        :class="{ 'is-filterable': filterable }"
      >
        <label
          class="tiny-checkbox tiny-transfer-panel__item"
          :class="[
            item[state.disabledProp] ? 'is-disabled' : '',
            state.checked.length > 0 && state.checked.indexOf(item[state.keyProp]) > -1 ? 'is-checked' : ''
          ]"
          @click.stop.prevent="checkedEvent(item[state.keyProp], item[state.disabledProp])"
          :key="item[state.keyProp]"
          v-for="item in state.filteredData"
        >
          <span
            class="tiny-checkbox__input"
            :class="[
              item[state.disabledProp] ? 'is-disabled' : '',
              state.checked.length > 0 && state.checked.indexOf(item[state.keyProp]) > -1 ? 'is-checked' : ''
            ]"
          >
            <span class="tiny-checkbox__inner">
              <icon-check v-if="!(state.checked.length > 0 && state.checked.indexOf(item[state.keyProp]) > -1)" class="tiny-svg-size" />
              <icon-checked-sur v-else class="tiny-svg-size" />
            </span>
            <input type="checkbox" aria-hidden="false" :disabled="item[state.disabledProp]" class="tiny-checkbox__original" :value="item[state.keyProp]" />
          </span>
          <span class="tiny-checkbox__label">
            <option-content :option="optionRender(item)"></option-content>
          </span>
        </label>
      </transition-group>
      <component ref="plugin" v-if="render && render.plugin" :is="markRaw(toRaw(render.plugin))" v-bind="state.render" v-on="state.render.on"></component>
      <tiny-pager
        v-show="showPager && state.renderType === 'TinyTable'"
        @size-change="sizesChange"
        ref="pager"
        :total="state.pagerTotal.length"
        :current-page="state.currentPage"
        @update:current-page="state.currentPage = $event"
        :page-size="pagerOp.pageVO.pageSize"
        :layout="pagerOp.pageVO.layout"
        :page-sizes="pagerOp.pageVO.pageSizes"
        :mode="pagerOp.mode"
        :pager-count="pagerOp.pagerCount"
        @current-change="handlePageChange"
      >
      </tiny-pager>

      <p class="tiny-transfer-panel__empty" v-show="!render && state.hasNoMatch">
        {{ t('ui.transfer.noMatch') }}
      </p>
      <p class="tiny-transfer-panel__empty" v-show="!render && data.length === 0 && !state.hasNoMatch">
        {{ t('ui.transfer.noData') }}
      </p>
    </div>
    <p class="tiny-transfer-panel__footer" v-if="$parent.slots['left-footer'] || $parent.slots['right-footer']">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/transfer-panel/vue'
import Checkbox from '@opentiny/vue-checkbox'
import Input from '@opentiny/vue-input'
import Pager from '@opentiny/vue-pager'
import { iconArrowUp, iconArrowDown, iconCheckedSur, iconCheck } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'TransferPanel',
  componentName: 'TransferPanel',
  inheritAttrs: false,
  components: {
    TinyCheckbox: Checkbox,
    TinyInput: Input,
    TinyPager: Pager,
    IconArrowDown: iconArrowDown(),
    IconArrowUp: iconArrowUp(),
    IconCheckedSur: iconCheckedSur(),
    IconCheck: iconCheck(),
    OptionContent: {
      props: {
        option: [Object, Array]
      },
      render() {
        return this.option
      }
    }
  },
  props: {
    columns: Array,
    data: {
      type: Array,
      default() {
        return []
      }
    },
    defaultChecked: Array,
    filterMethod: Function,
    filterable: Boolean,
    format: Object,
    isToLeft: Boolean,
    optionRender: Function,
    pagerOp: Object,
    placeholder: String,
    props: Object,
    render: Object,
    renderContent: Function,
    showLeft: Boolean,
    showPager: Boolean,
    title: String,
    treeOp: Object,
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
