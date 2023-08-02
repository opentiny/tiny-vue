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
  <div class="tiny-popeditor">
    <tiny-input
      ref="reference"
      :size="size"
      :placeholder="placeholder"
      :class="{ 'tiny-popeditor-readonly': state.readonly, suggest }"
      @click="handleOpen($event)"
      v-model="state.display"
      :disabled="state.disabled"
      :readonly="state.readonly"
      :tabindex="tabindex"
      :validate-event="!state.open"
      @update:modelValue="doSuggesst"
      @mouseover.native="state.inputHover = true"
      @mouseleave.native="state.inputHover = false"
    >
      <template #suffix>
        <span>
          <icon-close
            style="margin-right: 8px"
            v-if="showClearBtn && state.commitValue && suggest && state.inputHover"
            @click.stop="handleClear"
            class="tiny-svg-size tiny-svg__popeditor"
          ></icon-close>
          <icon-chevron-up
            v-if="suggest && state.showSuggestPanel"
            @click.stop="closeSuggestPanel(true)"
            class="tiny-svg-size tiny-svg__popeditor tiny-chevron"
          ></icon-chevron-up>
          <icon-chevron-down
            v-if="suggest && !state.showSuggestPanel"
            @click.stop="doSuggesstNow"
            class="tiny-svg-size tiny-svg__popeditor tiny-chevron"
          ></icon-chevron-down>
          <icon-close v-if="showClearBtn && !!state.display && !suggest" @click.stop="handleClear" class="tiny-svg-size tiny-svg__popeditor"></icon-close>
          <component
            v-if="!(showClearBtn && !!state.display && !suggest) || (!suggest && !readonly)"
            :is="icon"
            @click.stop="openDialog"
            class="tiny-svg-size tiny-svg__popeditor"
          ></component>
        </span>
      </template>
    </tiny-input>
    <transition name="tiny-zoom-in-top" @after-leave="popper.doDestroy">
      <div ref="popper" v-show="state.showSuggestPanel">
        <tiny-grid
          ref="suggest"
          v-if="state.showSuggestPanel"
          auto-resize
          :loading="state.loading"
          max-height="300px"
          :highlight-current-row="true"
          :columns="state.baseColumns"
          :data="state.suggestList"
          :row-id="valueField"
          :select-config="{ checkRowKeys: state.selectedValues }"
          :radio-config="{ checkRowKey: state.commitValue, trigger }"
          @select-all="sourceGridSelectAll"
          @select-change="sourceGridSelectChange"
          @radio-change="suggestRadioChange"
        ></tiny-grid>
      </div>
    </transition>
    <tiny-dialog-box
      :visible="state.open"
      @update:visible="state.open = $event"
      :resize="resize"
      :draggable="draggable"
      append-to-body
      :title="state.getTitle"
      :close-on-click-modal="false"
      :width="state.modalWidth"
      @close="$parent.$emit('close')"
      :before-close="handleBeforeClose"
      :dialog-class="dialogClass"
    >
      <template v-if="state.open">
        <div class="tiny-popeditor-top" v-if="state.conditions.length && popseletor === 'grid'">
          <slot name="search" :search-op="state.searchOp">
            <ul class="tiny-popeditor__search-lists">
              <li class="tiny-popeditor__search-item" v-for="item in conditions" :key="item.field" :style="{ width: 100 * ((item.span || 6) / 12) + '%' }">
                <label class="tiny-popeditor__search-label" :title="item.label" :style="{ width: item.labelWidth || '160px' }">{{ item.label }}</label>
                <component
                  :is="item.component || 'tiny-input'"
                  v-model="state.search[item.field]"
                  v-bind="item.attrs"
                  class="tiny-popeditor__search-input"
                  :novalid="true"
                  @keydown.enter="handleSearch"
                ></component>
              </li>
            </ul>
            <div class="tiny-popeditor__search-footer">
              <button type="button" @click="handleSearch" class="tiny-button tiny-button--primary">
                <span>{{ t('ui.popeditor.search') }}</span>
              </button>
              <button type="button" @click="handleReset" class="tiny-button tiny-button--default">
                <span>{{ t('ui.popeditor.reset') }}</span>
              </button>
            </div>
          </slot>
        </div>
        <div v-if="popseletor === 'grid'" class="tiny-popeditor-body">
          <div :class="['tiny-popeditor-body__left', { 'tiny-popeditor-body__radio': !multi }]">
            <div class="tiny-popeditor__tabs">
              <div class="tiny-popeditor__tabs-head">
                <ul>
                  <li
                    v-if="showHistory"
                    @click="state.activeName = 'history'"
                    :class="{
                      'tiny-popeditor__tabs-selected': state.activeName === 'history'
                    }"
                  >
                    <span>{{ t('ui.popeditor.historyLists') }}</span>
                  </li>
                  <li
                    @click="state.activeName = 'source'"
                    :class="{
                      'tiny-popeditor__tabs-selected': state.activeName === 'source'
                    }"
                  >
                    <span>{{ t('ui.popeditor.sourceLists') }}</span>
                  </li>
                </ul>
              </div>
              <div class="tiny-popeditor__tabs-body">
                <div v-if="state.activeName === 'history'" class="tabs-body-item">
                  <tiny-grid
                    ref="historyGrid"
                    height="290px"
                    size="mini"
                    :highlight-current-row="true"
                    :columns="state.baseColumns"
                    :data="state.historyGridDataset"
                    :row-id="valueField"
                    :select-config="{ checkRowKeys: state.selectedValues }"
                    @select-all="sourceGridSelectAll"
                    @select-change="sourceGridSelectChange"
                  ></tiny-grid>
                </div>
                <div v-if="state.activeName === 'source'" class="tabs-body-item">
                  <tiny-grid
                    v-if="multi"
                    auto-resize
                    :loading="state.loading"
                    ref="sourceGrid"
                    height="290px"
                    size="mini"
                    :highlight-current-row="true"
                    :columns="state.baseColumns"
                    :data="state.sourceGridDataset"
                    :row-id="valueField"
                    :select-config="{ checkRowKeys: state.selectedValues }"
                    @select-all="sourceGridSelectAll"
                    @select-change="sourceGridSelectChange"
                  ></tiny-grid>
                  <tiny-grid
                    v-else
                    ref="sourceGrid"
                    auto-resize
                    :loading="state.loading"
                    height="290px"
                    size="mini"
                    :highlight-current-row="true"
                    :columns="state.baseColumns"
                    :data="state.sourceGridDataset"
                    :row-id="valueField"
                    :radio-config="{ checkRowKey: state.commitValue, trigger }"
                  ></tiny-grid>
                  <tiny-pager v-if="showPager" v-bind="state.pagerConfig" @current-change="handleSizeChange" @size-change="handleNumberPageChange"></tiny-pager>
                </div>
              </div>
            </div>
          </div>
          <div v-if="multi" class="tiny-popeditor-body__right">
            <div class="tiny-popeditor__tabs">
              <div class="tiny-popeditor__tabs-head">
                <ul>
                  <li class="tiny-popeditor__tabs-selected">
                    <span>{{ t('ui.popeditor.selectionLists') }}</span>
                  </li>
                </ul>
              </div>
              <div class="tiny-popeditor__tabs-body">
                <div class="tabs-body-item">
                  <tiny-grid
                    ref="selectedGrid"
                    auto-resize
                    :columns="state.baseColumns"
                    :data="state.selectedDatas"
                    height="290px"
                    size="mini"
                    :row-id="valueField"
                    :select-config="{ checkRowKeys: state.selectedValues }"
                    @select-all="selectedGridSelectAll"
                    @select-change="selectedGridSelectChange"
                  ></tiny-grid>
                  <div v-if="showPager" style="height: 50px"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="popseletor === 'tree'">
          <tiny-input
            class="tiny-popeditor_filter-input"
            :placeholder="t('ui.popeditor.filterNode')"
            v-model="state.filterText"
            :suffix-icon="iconSearch"
          ></tiny-input>
          <tiny-tree ref="tree" v-bind="state.treeOp" @check-change="treeCheckChange"></tiny-tree>
        </div>
      </template>
      <template #footer>
        <span class="tiny-toolbar">
          <slot name="footer" :confirm="handleConfirm" :cancel="handleCancel">
            <button type="button" @click="handleConfirm" class="tiny-button tiny-button--primary">
              <span>{{ t('ui.popeditor.confirm') }}</span>
            </button>
            <button type="button" @click="handleCancel" class="tiny-button tiny-button--default">
              <span>{{ t('ui.popeditor.cancel') }}</span>
            </button>
          </slot>
        </span>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/popeditor/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconClose, iconChevronDown, iconChevronUp } from '@opentiny/vue-icon'
import Input from '@opentiny/vue-input'
import DialogBox from '@opentiny/vue-dialog-box'
import Grid from '@opentiny/vue-grid'
import Pager from '@opentiny/vue-pager'
import Tree from '@opentiny/vue-tree'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'

export default defineComponent({
  components: {
    IconClose: iconClose(),
    IconChevronDown: iconChevronDown(),
    IconChevronUp: iconChevronUp(),
    TinyInput: Input,
    TinyGrid: Grid,
    TinyPager: Pager,
    TinyDialogBox: DialogBox,
    TinyTree: Tree
  },
  directives: {
    Clickoutside
  },
  props: [
    ...props,
    'dataset',
    'placeholder',
    'autoLookup',
    'beforeReset',
    'textRenderSource',
    'resize',
    'size',
    'trigger',
    'conditions',
    'disabled',
    'gridOp',
    'alwaysLoad',
    'remoteSearch',
    'treeOp',
    'icon',
    'iconSearch',
    'initSelectedDatas',
    'multi',
    'pagerOp',
    'popseletor',
    'readonly',
    'showClearBtn',
    'showHistory',
    'showPager',
    'textField',
    'textSplit',
    'title',
    'modelValue',
    'valueField',
    'valueSplit',
    'width',
    'dialogClass',
    'tabindex',
    'draggable',
    'placement',
    'popperAppendToBody',
    'suggest',
    'beforeClose'
  ],
  emits: ['change', 'close', 'page-change', 'popup'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
