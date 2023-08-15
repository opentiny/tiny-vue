<template>
  <tiny-dialog-box
    :class="['tiny-dialog-select', { 'radio-check': !multi }]"
    :visible="visible"
    @update:visible="$emit('update:visible', $event)"
    modal
    draggable
    append-to-body
    modal-append-to-body
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    v-bind="dialogOp"
    @open="$emit('open', $event)"
    @close="$emit('close', $event)"
    @opened="$emit('opened', $event)"
    @closed="$emit('closed', $event)"
    @drag-start="$emit('drag-start', $event)"
    @drag-end="$emit('drag-end', $event)"
    @drag-move="$emit('drag-move', $event)"
  >
    <!-- title -->
    <template v-if="slots.title" #title="params">
      <slot name="title" v-bind="params"></slot>
    </template>
    <!-- body -->
    <div class="tiny-dialog-select__body">
      <div v-if="popseletor === 'grid' && slots.search" class="tiny-dialog-select__body-search">
        <slot name="search"></slot>
      </div>
      <div class="tiny-dialog-select__body-selector">
        <tiny-split v-model="state.splitValue" trigger-simple :style="`height:${mainHeight}px`" :disabled="!multi">
          <template #left>
            <div v-if="popseletor === 'grid'" :style="`height:${mainHeight}px`" class="tiny-dialog-select__body-grid">
              <tiny-grid
                v-if="visible || state.multiGridStore.inited"
                ref="multiGrid"
                v-bind="gridOp"
                border
                :stripe="false"
                size="small"
                auto-resize
                :height="`${mainHeight}px`"
                :loading="state.multiGridStore.loading"
                :row-id="valueField"
                :columns="state.gridColumns"
                :select-config="state.multiGridStore.selectConfig"
                :radio-config="state.multiGridStore.radioConfig"
               
                @select-all="multiGridSelectAll"
                @select-change="multiGridSelectChange"
                @radio-change="multiGridRadioChange"
              ></tiny-grid>
            </div>
            <div v-if="popseletor === 'tree'" :style="`height:${mainHeight}px`" class="tiny-dialog-select__body-tree">
              <tiny-input
                :placeholder="t('ui.dialogSelect.treeSearch')"
                v-model="state.multiTreeStore.filterText"
                @change="doMultiTreeFilter"
                clearable
              ></tiny-input>
              <div style="height: calc(100% - 28px)" class="tiny-dialog-select__body-tree-wrapper">
                <tiny-tree
                  v-if="visible || state.multiTreeStore.inited"
                  ref="multiTree"
                  :show-checkbox="multi"
                  :show-radio="!multi"
                  lazy-current
                  lazy
                  :after-load="multiTreeAfterLoad"
                  :view-type="state.multiTreeStore.viewType"
                  :default-expanded-keys="state.multiTreeStore.expandedKeys"
                  :default-expanded-keys-highlight="state.multiTreeStore.highlight"
                  :filter-node-method="multiTreeFilterNode"
                  :filter-plain-method="multiTreeFilterPlain"
                  :default-checked-keys="state.multiTreeStore.checkedKeys"
                  v-bind="treeOp"
                  @leave-plain-view="multiTreeLeavePlain"
                  @check="multiTreeCheck"
                  @node-expand="multiTreeCheck"
                  @node-collapse="multiTreeCheck"
                  @check-plain="multiTreeCheck"
                  @check-change="multiTreeRadio"
                ></tiny-tree>
              </div>
            </div>
          </template>
          <template #right>
            <div v-if="multi" :style="`height:${mainHeight}px`" class="tiny-dialog-select__body-box">
              <tiny-selected-box
                v-if="showSelectedBox"
                ref="selectedBox"
                :select="state.selectedDatas"
                v-bind="selectedBoxOp"
                @clear="selectedBoxClear"
                @delete="selectedBoxDelete"
                @drag="selectedBoxDrag"
              >
                <template v-if="slots.select" #select="params">
                  <slot name="select" v-bind="params"></slot>
                </template>
                <template v-if="slots.button" #button="params">
                  <slot name="button" v-bind="params"></slot>
                </template>
                <template v-if="slots.clear" #clear="params">
                  <slot name="clear" v-bind="params"></slot>
                </template>
                <template v-if="slots.option" #option="params">
                  <slot name="option" v-bind="params"></slot>
                </template>
                <template v-if="slots.close" #close="params">
                  <slot name="close" v-bind="params"></slot>
                </template>
              </tiny-selected-box>
            </div>
          </template>
        </tiny-split>
      </div>
    </div>
    <!-- footer -->
    <template v-if="slots.footer" #footer="params">
      <slot name="footer" v-bind="params"></slot>
    </template>
    <template v-if="!slots.footer" #footer>
      <div class="tiny-dialog-select__footer">
        <div class="tiny-dialog-select__footer-pager">
          <tiny-pager
            v-if="popseletor === 'grid' && showPager"
            ref="pager"
            v-bind="pagerOp"
            :pager-count="7"
            @size-change="$emit('size-change', $event)"
            @current-change="$emit('current-change', $event)"
            @prev-click="$emit('prev-click', $event)"
            @next-click="$emit('next-click', $event)"
            @before-page-change="$emit('before-page-change', $event)"
          ></tiny-pager>
        </div>
        <div class="tiny-dialog-select__footer-buttons">
          <tiny-button @click="onFooterCancel">{{ t('ui.button.cancel') }}</tiny-button>
          <tiny-button @click="onFooterConfirm" type="primary">{{ t('ui.button.confirm') }}</tiny-button>
        </div>
      </div>
    </template>
  </tiny-dialog-box>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/dialog-select/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import DialogBox from '@opentiny/vue-dialog-box'
import Button from '@opentiny/vue-button'
import Pager from '@opentiny/vue-pager'
import Grid from '@opentiny/vue-grid'
import Split from '@opentiny/vue-split'
import SelectedBox from '@opentiny/vue-selected-box'
import Input from '@opentiny/vue-input'
import Tree from '@opentiny/vue-tree'
import '@opentiny/vue-theme/dialog-select/index.less'

export default defineComponent({
  emits: [
    'open',
    'close',
    'opened',
    'closed',
    'drag-start',
    'drag-end',
    'drag-move',
    'update:visible',
    'size-change',
    'current-change',
    'prev-click',
    'next-click',
    'before-page-change',
    'change'
  ],
  props: [
    ...props,
    'dialogOp',
    'visible',
    'popseletor',
    'multi',
    'gridOp',
    'textField',
    'textSplit',
    'valueField',
    'valueSplit',
    'remoteSearch',
    'showPager',
    'pagerOp',
    'showSelectedBox',
    'selectedBoxOp',
    'treeOp',
    'beforeClose',
    'autoLookup',
    'lookupMethod',
    'mainHeight'
  ],
  components: {
    TinyDialogBox: DialogBox,
    TinyButton: Button,
    TinyPager: Pager,
    TinyGrid: Grid,
    TinySplit: Split,
    TinySelectedBox: SelectedBox,
    TinyInput: Input,
    TinyTree: Tree
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
