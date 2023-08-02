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
  <div
    ref="select"
    class="tiny-select"
    v-popover:popover
    :class="[
      state.selectSize ? 'tiny-select--' + state.selectSize : '',
      state.collapseTags ? 'tiny-select__collapse-tags' : '',
      filterable ? 'tiny-select__filterable' : '',
      multiple ? 'tiny-select__multiple' : '',
      inputBoxType === 'underline' ? 'tiny-select__underline' : '',
      $parent.$attrs.class
    ]"
    @mouseleave.self="
      () => {
        state.selectHover = false
        state.inputHovering = false
      }
    "
    @mouseenter.self="
      () => {
        state.selectHover = true
        state.inputHovering = true
      }
    "
    @click.stop="toggleMenu"
    v-clickoutside="handleClose"
    v-bind="a($attrs, ['class', 'style'], true)"
  >
    <div :style="state.selectFiexd">
      <slot name="reference">
        <div
          ref="tags"
          :class="['tiny-select__tags', { 'is-showicon': slots.prefix }]"
          v-if="multiple"
          :style="state.tagsStyle"
        >
          <span v-if="state.collapseTags && state.selected.length">
            <tiny-tag
              :type="tagType"
              :closable="!state.selectDisabled && !state.selected[0].disabled"
              :size="state.collapseTagSize"
              :hit="state.selected[0].state ? state.selected[0].state.hitState : state.selected[0].hitState"
              @close="deleteTag($event, state.selected[0])"
              disable-transitions
            >
              <span class="tiny-select__tags-text">
                {{ state.selected[0].state ? state.selected[0].state.currentLabel : state.selected[0].currentLabel }}
              </span>
            </tiny-tag>
            <tiny-tag
              v-if="state.selected.length > 1"
              :type="tagType"
              :closable="false"
              :size="state.collapseTagSize"
              disable-transitions
            >
              <span class="tiny-select__tags-text">+ {{ state.selected.length - 1 }}</span>
            </tiny-tag>
          </span>
          <span v-if="!state.collapseTags">
            <tiny-tag
              v-for="(item, index) in state.selected"
              :key="getValueKey(item)"
              :type="tagType"
              :closable="!state.selectDisabled && !item.disabled"
              :size="state.collapseTagSize"
              :hit="item.state ? item.state.hitState : item.hitState"
              @close="deleteTag($event, item)"
              disable-transitions
            >
              <span v-if="!state.visible && state.overflow === index" class="tiny-select__tags-text">
                {{ item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... ' }}
              </span>
              <span v-else class="tiny-select__tags-text">
                {{ item.state ? item.state.currentLabel : item.currentLabel }}
              </span>
            </tiny-tag>
          </span>

          <input
            ref="input"
            v-if="filterable"
            v-model="state.query"
            type="text"
            class="tiny-select__input"
            :class="[state.selectSize ? `is-${state.selectSize}` : '']"
            :disabled="state.selectDisabled"
            :autocomplete="autocomplete"
            @focus="handleFocus"
            @blur="handleBlur"
            @keyup="managePlaceholder"
            @keydown="resetInputState"
            @keydown.down.prevent="navigateOptions('next')"
            @keydown.up.prevent="navigateOptions('prev')"
            @keydown.enter.prevent="selectOption"
            @keydown.esc.stop.prevent="state.visible = false"
            @keydown.delete="deletePrevTag"
            @keydown.tab="state.visible = false"
            @compositionstart="handleComposition"
            @compositionupdate="handleComposition"
            @compositionend="handleComposition"
            @input="debouncedQueryChange"
            :style="{
              'flex-grow': '1',
              width: state.inputLength / (state.inputWidth - 32) + '%',
              'max-width': state.inputWidth - 42 + 'px'
            }"
          />
        </div>
        <tiny-input
          ref="reference"
          v-model="state.selectedLabel"
          type="text"
          :placeholder="state.currentPlaceholder"
          :name="name"
          :id="id"
          :autocomplete="autocomplete"
          :size="state.selectSize"
          :disabled="state.selectDisabled"
          :readonly="state.readonly"
          :unselectable="state.readonly ? 'on' : 'off'"
          :validate-event="false"
          :class="{ 'is-focus': state.visible, overflow: state.overflow }"
          :tabindex="multiple && filterable ? '-1' : tabindex"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup="debouncedOnInputChange"
          @keydown.down.stop.prevent="navigateOptions('next')"
          @keydown.up.stop.prevent="navigateOptions('prev')"
          @keydown.enter.prevent="selectOption"
          @keydown.esc.stop.prevent="state.visible = false"
          @keydown.tab="state.visible = false"
          @paste="debouncedOnInputChange"
          @mouseenter="onMouseenterNative"
          @mouseleave="onMouseleaveNative"
        >
          <template #prefix v-if="slots.prefix">
            <slot name="prefix"></slot>
          </template>
          <template #suffix>
            <slot name="suffix"></slot>
            <span v-if="state.showCopy" class="tiny-select__copy" @click.stop="handleCopyClick">
              <icon-copy class="tiny-svg-size tiny-select__caret"></icon-copy>
            </span>
            <component
              v-show="!state.showClose && !(remote && filterable && !remoteConfig.showIcon)"
              :is="state.getIcon"
              :class="['tiny-svg-size', 'tiny-select__caret', state.iconClass]"
            ></component>
            <icon-close
              v-if="state.showClose"
              class="tiny-svg-size tiny-select__caret"
              @click="handleClearClick"
              @mouseenter="state.inputHovering = true"
            ></icon-close>
          </template>
        </tiny-input>
      </slot>
      <transition name="tiny-zoom-in-top" @before-enter="handleMenuEnter" @after-leave="doDestroy">
        <tiny-select-dropdown
          ref="popper"
          :is-drop-inherit-width="isDropInheritWidth"
          :placement="placement"
          :append-to-body="popperAppendToBody"
          v-show="!onCopying() && !hideDrop && state.visible && state.emptyText !== false"
          :style="dropStyle"
        >
          <tiny-grid
            v-if="renderType === 'grid'"
            auto-resize
            :row-id="valueField"
            :select-config="buildSelectConfig()"
            :radio-config="buildRadioConfig()"
            ref="selectGrid"
            :highlight-current-row="true"
            :columns="gridOp.columns"
            :data="state.gridData"
            @select-all="selectChange"
            @select-change="selectChange"
            @radio-change="radioChange"
            @mousedown.stop
            v-bind="gridOp"
          ></tiny-grid>

          <tiny-tree
            v-if="renderType === 'tree'"
            :filter-node-method="filterMethod"
            :props="{ label: textField }"
            :expand-on-click-node="false"
            :icon-trigger-click-node="false"
            :node-key="valueField"
            :default-expand-all="state.isExpandAll"
            :check-strictly="treeOp.checkStrictly"
            :default-checked-keys="state.gridCheckedData"
            ref="selectTree"
            :current-node-key="!multiple ? state.currentKey : ''"
            :show-checkbox="multiple"
            @node-collapse="nodeCollapse"
            @node-expand="nodeExpand"
            @check="nodeCheckClick"
            @node-click="treeNodeClick"
            v-bind="treeOp"
          ></tiny-tree>

          <tiny-input
            v-if="searchable"
            v-model="state.query"
            :placeholder="t('ui.search.placeholder')"
            class="tiny-select-dropdown__search"
            @update:modelValue="handleQueryChange(state.query)"
            @keydown.enter.prevent="handleQueryChange(state.query)"
          >
            <template #prefix>
              <icon-search
                class="tiny-select-dropdown__search-prefix"
                @click="handleQueryChange(state.query)"
              ></icon-search>
            </template>
            <template #suffix>
              <span v-show="state.query" class="tiny-icon-close">
                <icon-close @click="resetFilter"></icon-close>
              </span>
              <icon-search
                class="tiny-select-dropdown__search-suffix"
                @click="handleQueryChange(state.query)"
              ></icon-search>
            </template>
          </tiny-input>
          <tiny-scrollbar
            v-if="!~['grid', 'tree'].indexOf(renderType)"
            ref="scrollbar"
            :tag="state.optimizeStore.flag ? 'div' : 'ul'"
            :native="state.optimizeStore.flag"
            :view-style="state.optimizeStore.flag ? state.optimizeStore.viewStyle : ''"
            :wrap-class="['tiny-select-dropdown__wrap', state.optimizeStore.flag ? 'virtual' : '']"
            :view-class="['tiny-select-dropdown__list', state.optimizeStore.flag ? 'virtual' : '']"
            @mousedown.stop
            :class="{
              'is-empty': !allowCreate && state.query && state.filteredOptionsCount === 0
            }"
            v-show="state.options.length > 0 && !loading"
          >
            <tiny-option :value="state.query" created v-if="state.showNewOption && !state.optimizeStore.flag">
            </tiny-option>
            <!-- TINY-TODO 后续废弃tiny-select-dropdown__item -->
            <li
              v-if="multiple && showCheck && showAlloption && !filterable && !state.multipleLimit && !state.emptyText"
              class="tiny-option tiny-select-dropdown__item"
              :class="{ hover: state.hoverIndex === -9, virtual: state.optimizeStore.flag }"
              @click.stop="toggleCheckAll"
              @mousedown.stop
              @mouseenter="state.hoverIndex = -9"
            >
              <tiny-checkbox
                :model-value="state.isSelectAll"
                :indeterminate="state.isHalfSelect"
                :class="state.selectCls"
              >
                {{ t('ui.base.all') }}
              </tiny-checkbox>
            </li>
            <slot>
              <tiny-option
                v-for="(item, index) in state.optimizeStore.flag ? state.optimizeStore.datas : state.datas"
                :class="{
                  virtual: state.optimizeStore.flag,
                  'virtual-hidden': state.optimizeStore.flag && ~state.optimizeStore.hiddenOptions.indexOf(item)
                }"
                :key="state.optimizeStore.flag ? `${item[valueField]}` : index"
                :label="item[textField]"
                :value="item[valueField]"
                :disabled="item.disabled"
                :highlight-class="item._highlightClass"
                :events="item.events"
                @mousedown.stop
              >
              </tiny-option>
            </slot>
          </tiny-scrollbar>
          <template
            v-if="
              renderType !== 'grid' &&
              renderType !== 'tree' &&
              state.emptyText &&
              (!allowCreate || loading || (allowCreate && state.options.length === 0))
            "
          >
            <slot name="empty">
              <div class="tiny-select-dropdown__empty-wrap">
                <span v-if="showEmptyImage" class="tiny-select-dropdown__empty-images"></span>
                <div class="tiny-select-dropdown__empty">
                  {{ state.emptyText }}
                </div>
              </div>
            </slot>
          </template>
          <slot name="footer"></slot>
        </tiny-select-dropdown>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/select/vue'
import { props, setup, directive, defineComponent } from '@opentiny/vue-common'
import TinyTag from '@opentiny/vue-tag'
import TinyInput from '@opentiny/vue-input'
import TinyOption from '@opentiny/vue-option'
import TinyScrollbar from '@opentiny/vue-scrollbar'
import TinySelectDropdown from '@opentiny/vue-select-dropdown'
import TinySearch from '@opentiny/vue-search'
import TinyGrid from '@opentiny/vue-grid'
import TinyTree from '@opentiny/vue-tree'
import TinyCheckbox from '@opentiny/vue-checkbox'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import {
  iconClose,
  iconHalfselect,
  iconCheck,
  iconCheckedSur,
  iconCopy,
  iconSearch,
  iconDeltaDown
} from '@opentiny/vue-icon'

const getReference = (el, binding, vnode) => {
  const _ref = binding.expression ? binding.value : binding.arg
  const popper = vnode.context.$refs[_ref]

  if (popper) {
    if (Array.isArray(popper)) {
      popper[0].$refs.reference = el
    } else {
      popper.$refs.reference = el
    }
  }
}

export default defineComponent({
  emits: ['update:modelValue', 'change', 'focus', 'blur', 'clear', 'remove-tag', 'visible-change'],
  directives: directive({
    Clickoutside,
    popover: {
      bind(el, binding, vnode) {
        getReference(el, binding, vnode)
      },
      inserted(el, binding, vnode) {
        getReference(el, binding, vnode)
      }
    }
  }),
  components: {
    TinyTag,
    TinyInput,
    TinyOption,
    TinySearch,
    TinyScrollbar,
    TinySelectDropdown,
    TinyGrid,
    TinyTree,
    TinyCheckbox,
    IconClose: iconClose(),
    IconCopy: iconCopy(),
    IconHalfselect: iconHalfselect(),
    IconCheck: iconCheck(),
    IconCheckedSur: iconCheckedSur(),
    IconSearch: iconSearch(),
    IconDeltaDown: iconDeltaDown()
  },
  props: [
    ...props,
    'id',
    'multiple',
    'name',
    'dataset',
    'readonly',
    'tabindex',
    'dropStyle',
    'valueField',
    'textField',
    'copyable',
    'size',
    'options',
    'showCheck',
    'showAlloption',
    'hideDrop',
    'modelValue',
    'showOverflowTooltip',
    'remote',
    'remoteConfig',
    'placement',
    'loading',
    'disabled',
    'valueKey',
    'clearable',
    'noDataText',
    'filterable',
    'loadingText',
    'noMatchText',
    'popperClass',
    'allowCreate',
    'placeholder',
    'remoteMethod',
    'filterMethod',
    'collapseTags',
    'autocomplete',
    'multipleLimit',
    'reserveKeyword',
    'automaticDropdown',
    'defaultFirstOption',
    'popperAppendToBody',
    'showDropdown',
    'expandTags',
    'renderType',
    'gridOp',
    'treeOp',
    'delay',
    'cacheOp',
    'isDropInheritWidth',
    'tagSelectable',
    'selectConfig',
    'radioConfig',
    'allowCopy',
    'textSplit',
    'autoClose',
    'queryDebounce',
    'ignoreEnter',
    'optimization',
    'searchable',
    'showEmptyImage',
    'inputBoxType',
    'tagType'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
