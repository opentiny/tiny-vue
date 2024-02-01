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
  <div class="tiny-transfer">
    <tiny-transfer-panel
      id="leftPanel"
      v-if="!slots['right-panel'] && !slots['left-panel']"
      v-bind="$props"
      :option-render="state.optionRender"
      :tree-op="treeOp"
      :render="render"
      :show-pager="showPager"
      :pager-op="pagerOp"
      ref="leftPanel"
      :pageVO="pageVO"
      :render-type="renderType"
      :columns="columns"
      :data="state.sourceData"
      :title="titles[0] || t('ui.transfer.titles.0')"
      :default-checked="leftDefaultChecked"
      :placeholder="filterPlaceholder || t('ui.transfer.filterPlaceholder')"
      @checked-change="onSourceCheckedChange"
    >
      <slot name="left-footer"></slot>
      <slot name="filter"></slot>
    </tiny-transfer-panel>
    <div v-if="slots['left-panel'] && slots['right-panel']" class="tiny-transfer-panel transfer-custom-left-panel">
      <slot name="left-panel"></slot>
    </div>
    <div class="tiny-transfer__buttons">
      <slot name="button-panel">
        <tiny-button
          v-if="showAllBtn"
          type="primary"
          :disabled="state.leftData.length === 0"
          class="tiny-transfer__button"
          @click="addToRight('all')"
        >
          <icon-double-right class="tiny-svg-size"></icon-double-right>
        </tiny-button>
        <div class="defaultButton">
          <tiny-button
            type="primary"
            :class="['tiny-transfer__button', state.hasButtonTexts ? 'is-with-texts' : '']"
            @click="addToRight"
            :disabled="toLeftDisable && state.leftChecked.length === 0"
          >
            <span v-if="buttonTexts[1] !== undefined">{{ buttonTexts[1] }}</span>
            <icon-chevron-right class="tiny-svg-size"></icon-chevron-right>
          </tiny-button>
          <tiny-button
            type="primary"
            :class="['tiny-transfer__button', state.hasButtonTexts ? 'is-with-texts' : '']"
            @click="addToLeft"
            :disabled="toRightDisable && state.rightChecked.length === 0"
          >
            <icon-chevron-left class="tiny-svg-size"></icon-chevron-left>
            <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
          </tiny-button>
        </div>
        <tiny-button
          v-if="showAllBtn"
          type="primary"
          :disabled="state.rightData.length === 0"
          class="tiny-transfer__button"
          @click="addToLeft('all')"
        >
          <icon-double-left class="tiny-svg-size"></icon-double-left>
        </tiny-button>
      </slot>
    </div>
    <tiny-transfer-panel
      v-bind="$props"
      id="rightPanel"
      v-if="!slots['right-panel'] && !slots['left-panel']"
      :render="render"
      :option-render="state.optionRender"
      :tree-op="treeOp"
      :show-pager="showPager"
      :is-to-left="state.isToLeft"
      :pager-op="pagerOp"
      ref="rightPanel"
      :pageVO="pageVO"
      :render-type="renderType"
      :columns="columns"
      :data="state.targetData"
      :title="titles[1] || t('ui.transfer.titles.1')"
      :default-checked="rightDefaultChecked"
      :placeholder="filterPlaceholder || t('ui.transfer.filterPlaceholder')"
      @checked-change="onTargetCheckedChange"
    >
      <slot name="right-footer"></slot>
      <slot name="filter"></slot>
    </tiny-transfer-panel>
    <div v-if="slots['left-panel'] && slots['right-panel']" class="tiny-transfer-panel transfer-custom-right-panel">
      <slot name="right-panel"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/transfer/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import TransferPanel from '@opentiny/vue-transfer-panel'
import { iconDoubleLeft, iconChevronLeft, iconChevronRight, iconDoubleRight } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    TinyButton: Button,
    TinyTransferPanel: TransferPanel,
    IconDoubleLeft: iconDoubleLeft(),
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight(),
    IconDoubleRight: iconDoubleRight()
  },
  props: [
    ...props,
    'data',
    'titles',
    'buttonTexts',
    'filterPlaceholder',
    'filterMethod',
    'leftDefaultChecked',
    'rightDefaultChecked',
    'renderContent',
    'modelValue',
    'format',
    'filterable',
    'props',
    'targetOrder',
    'dropConfig',
    'showAllBtn',
    'toLeftDisable',
    'toRightDisable',
    'renderType',
    'columns',
    'pageVO',
    'pagerOp',
    'showPager',
    'render',
    'treeOp',
    'beforeTransfer'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
