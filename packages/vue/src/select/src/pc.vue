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
      state.inputHovering || state.visible ? 'is-hover' : '',
      state.isDisplayOnly ? 'is-display-only' : '',
      hoverExpand ? 'is-hover-expand' : '',
      state.selectDisabled ? 'is-disabled' : '',
      state.selectSize ? 'tiny-select--' + state.selectSize : '',
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
    @click="toggleMenu"
    v-clickoutside="handleClose"
    v-bind="a($attrs, ['class', 'style'], true)"
  >
    <div
      ref="tagsGroup"
      :style="state.selectFiexd"
      :class="['tiny-select__tags-group', { 'is-expand': state.isExpand }]"
    >
      <slot name="reference">
        <tiny-filter-box
          v-if="shape === 'filter'"
          ref="reference"
          @click="toggleMenu"
          :show-close="clearable"
          :placeholder="placeholder"
          :disabled="state.selectDisabled"
          :label="label"
          :tip="tip"
          :value="
            multiple
              ? state.selected.map((item) => (item.state ? item.state.currentLabel : item.currentLabel)).join('; ')
              : state.selectedLabel
          "
          :drop-down-visible="state.visible"
          :blank="blank"
        >
        </tiny-filter-box>
        <div
          ref="tags"
          :class="['tiny-select__tags', { 'is-showicon': slots.prefix }, { 'not-selected': !state.selected.length }]"
          v-if="multiple && !state.isDisplayOnly && !shape"
          :style="state.tagsStyle"
        >
          <span v-if="!state.selectDisabled">
            <span v-if="state.collapseTags && state.selected.length">
              <tiny-tag
                :type="state.getTagType"
                :closable="!state.selectDisabled && !state.selected[0].disabled"
                :size="state.collapseTagSize"
                :hit="state.selected[0].state ? state.selected[0].state.hitState : state.selected[0].hitState"
                :key="state.key"
                @close="deleteTag($event, state.selected[0])"
                disable-transitions
              >
                <tiny-tooltip
                  effect="light"
                  placement="top"
                  @mouseenter.native="handleEnterTag($event, getValueKey(state.selected[0]))"
                >
                  <span class="tiny-select__tags-text">
                    <slot name="label" :item="getLabelSlotValue(state.selected[0])">
                      {{
                        state.selected[0].state ? state.selected[0].state.currentLabel : state.selected[0].currentLabel
                      }}
                    </slot>
                  </span>
                  <template v-if="state.tooltipContent[getValueKey(state.selected[0])]" #content>
                    <span class="tiny-select__tags-text">
                      <slot name="label" :item="getLabelSlotValue(state.selected[0])">
                        {{
                          state.selected[0].state
                            ? state.selected[0].state.currentLabel
                            : state.selected[0].currentLabel
                        }}
                      </slot>
                    </span>
                  </template>
                </tiny-tooltip>
              </tiny-tag>
              <tiny-tag
                v-if="state.selected.length > 1"
                :type="state.getTagType"
                :closable="false"
                :size="state.collapseTagSize"
                disable-transitions
                class="tiny-select__tags-number"
              >
                <span class="tiny-select__tags-text">+ {{ state.selected.length - 1 }}</span>
              </tiny-tag>
            </span>
            <span ref="tags-content" v-if="!state.collapseTags">
              <tiny-tag
                v-if="hoverExpand"
                :class="['tiny-select__tags-collapse', { 'is-hidden': state.isHidden }]"
                type="info"
                key="tags-collapse"
                data-tag="tags-collapse"
                :closable="false"
                :size="state.collapseTagSize"
              >
                + {{ state.collapseTagsLength }}
              </tiny-tag>
              <!-- TINY-TODO: state.selectDisabled 同步为 item.selectDisabled 此处同步有疑问 -->
              <tiny-tag
                v-for="(item, index) in state.selected"
                :key="getValueKey(item)"
                :type="state.getTagType"
                :closable="!item.selectDisabled && !item.disabled && !item.required"
                :size="state.collapseTagSize"
                :hit="item.state ? item.state.hitState : item.hitState"
                @close="deleteTag($event, item)"
                disable-transitions
              >
                <tiny-tooltip
                  effect="light"
                  placement="top"
                  @mouseenter.native="handleEnterTag($event, getValueKey(item))"
                >
                  <span v-if="!state.visible && state.overflow === index" class="tiny-select__tags-text">
                    {{ item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... ' }}
                  </span>
                  <span v-else class="tiny-select__tags-text">
                    <slot name="label" :item="getLabelSlotValue(item)">
                      {{ item.state ? item.state.currentLabel : item.currentLabel }}
                    </slot>
                  </span>
                  <template v-if="state.tooltipContent[getValueKey(item)]" #content>
                    <span v-if="!state.visible && state.overflow === index" class="tiny-select__tags-text">{{
                      item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... '
                    }}</span>
                    <span v-else class="tiny-select__tags-text">
                      <slot name="label" :item="getLabelSlotValue(item)">{{
                        item.state ? item.state.currentLabel : item.currentLabel
                      }}</slot>
                    </span>
                  </template>
                </tiny-tooltip>
              </tiny-tag>
            </span>
          </span>
          <span v-else class="tiny-select__tags-text is-disabled">
            <tiny-tooltip effect="light" placement="top" :disabled="!showTips">
              <span>
                <span v-for="item in state.selected" :key="item.value">
                  <slot name="label" :item="item">{{ item.state ? item.state.currentLabel : item.currentLabel }}</slot
                  >;
                </span>
              </span>

              <template #content>
                <div :class="[state.showTips && 'tiny-select__show-tips', 'tiny-select__show-common']">
                  <span v-if="slots.label">
                    <span v-for="item in state.selected" :key="getValueKey(item)">
                      <slot name="label" :item="item"></slot>
                    </span>
                  </span>
                  <span v-else>{{ disabledTooltipContent || state.disabledTooltipContent }}</span>
                </div>
              </template>
            </tiny-tooltip>
          </span>
          <input
            ref="input"
            v-if="filterable && !state.selectDisabled"
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
              'max-width': state.inputWidth - 42 + 'px',
              height: 'auto'
            }"
          />
        </div>
        <tiny-input
          v-if="!shape"
          tiny_mode="pc"
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
          :display-only="state.isDisplayOnly"
          :display-only-content="state.displayOnlyContent"
          :unselectable="state.readonly ? 'on' : 'off'"
          :validate-event="false"
          :class="{ 'is-focus': state.visible, overflow: state.overflow, 'is-show-close': state.showClose }"
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
          @compositionend.native="handleComposition"
        >
          <template #prefix v-if="slots.prefix">
            <slot name="prefix"></slot>
          </template>
          <template #suffix>
            <slot name="suffix"></slot>
            <span v-if="state.showCopy" class="tiny-select__copy" @click.stop="handleCopyClick">
              <icon-copy class="tiny-svg-size tiny-select__caret"></icon-copy>
            </span>
            <icon-close
              v-if="state.showClose"
              class="tiny-svg-size tiny-select__caret tiny-select__close"
              @click="handleClearClick"
              @mouseenter="state.inputHovering = true"
            ></icon-close>
            <!-- 下拉图标  -->
            <component
              v-show="state.isShowDropdownIcon"
              :is="state.getIcon.icon"
              :class="[
                'tiny-svg-size',
                'tiny-select__caret',
                { 'is-reverse': !state.visible && state.getIcon.isDefault },
                { 'not-reverse': !state.getIcon.isDefault }
              ]"
              @click="handleDropdownClick"
            ></component>
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
          :popper-options="popperOptions"
        >
          <div
            v-if="shape && filterable"
            class="tiny-select__filter-input"
            :class="[remote && !state.options.length ? 'tiny-select__remote-input' : '']"
          >
            <tiny-input
              ref="input"
              type="text"
              v-model="state.query"
              :placeholder="placeholder"
              @input="debouncedQueryChange"
              @focus="handleFocus"
              autofocus
            ></tiny-input>
          </div>

          <div v-if="topCreate" class="tiny-select__top-create">
            <div @click="$emit('top-create-click', $event)">
              <icon-plus></icon-plus>
              <span>{{ topCreateText }}</span>
            </div>
          </div>

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
            :props="{ label: textField, isLeaf: 'isLeaf', ...treeOp.props }"
            :expand-on-click-node="false"
            :icon-trigger-click-node="false"
            :node-key="valueField"
            :default-expand-all="state.isExpandAll"
            :check-strictly="treeOp.checkStrictly"
            :default-checked-keys="multiple ? state.defaultCheckedKeys : []"
            ref="selectTree"
            :current-node-key="!multiple ? state.currentKey : ''"
            :show-checkbox="multiple"
            @load-data="loadTreeData"
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
            show
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
              data-tag="tiny-option"
              :class="[
                {
                  hover: state.hoverIndex === -9 && state.selectCls !== 'checked-sur',
                  virtual: state.optimizeStore.flag
                },
                { 'selected': state.selectCls === 'checked-sur' }
              ]"
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
                v-for="item in state.optimizeStore.flag ? state.optimizeStore.datas : state.datas"
                :class="{
                  virtual: state.optimizeStore.flag,
                  'virtual-hidden': state.optimizeStore.flag && ~state.optimizeStore.hiddenOptions.indexOf(item)
                }"
                :key="`${item[valueField]}`"
                :label="item[textField]"
                :value="item[valueField]"
                :disabled="item.disabled"
                :required="item.required"
                :icon="item.icon"
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
            <div v-if="loading" class="tiny-select-dropdown__loading">
              <div v-if="loadingText" class="tiny-select-dropdown__empty">
                {{ state.emptyText }}
              </div>
              <div
                v-else
                v-loading.tiny-select-dropdown__loading="!loadingText"
                class="tiny-select-dropdown__loading-svg"
              ></div>
            </div>
            <div v-else>
              <slot v-if="slots.empty" name="empty"></slot>
              <div v-else class="tiny-select-dropdown__empty-wrap">
                <span v-if="showEmptyImage" class="tiny-select-dropdown__empty-images"></span>
                <div v-else class="tiny-select-dropdown__empty">
                  {{ state.emptyText }}
                </div>
              </div>
            </div>
          </template>
          <slot name="footer"></slot>
        </tiny-select-dropdown>
      </transition>
    </div>
    <div v-if="hoverExpand && !state.isDisplayOnly" class="tiny-select__placeholder">
      <input class="tiny-input__inner" disabled />
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/select/vue'
import { props, setup, directive, defineComponent } from '@opentiny/vue-common'
import TinyTag from '@opentiny/vue-tag'
import Loading from '@opentiny/vue-loading'
import TinyInput from '@opentiny/vue-input'
import TinyOption from '@opentiny/vue-option'
import TinyScrollbar from '@opentiny/vue-scrollbar'
import TinySelectDropdown from '@opentiny/vue-select-dropdown'
import TinySearch from '@opentiny/vue-search'
import TinyGrid from '@opentiny/vue-grid'
import TinyTree from '@opentiny/vue-tree'
import TinyTooltip from '@opentiny/vue-tooltip'
import TinyFilterBox from '@opentiny/vue-filter-box'
import TinyCheckbox from '@opentiny/vue-checkbox'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import {
  iconClose,
  iconHalfselect,
  iconCheck,
  iconCheckedSur,
  iconCopy,
  iconSearch,
  iconDeltaDown,
  iconLoadingShadow,
  iconPlus
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
  emits: [
    'update:modelValue',
    'change',
    'focus',
    'blur',
    'clear',
    'remove-tag',
    'visible-change',
    'handleDropdownClick',
    'dropdown-click',
    'top-create-click'
  ],
  directives: directive({
    Clickoutside,
    Loading: Loading.directive,
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
    TinyTooltip,
    TinyFilterBox,
    IconClose: iconClose(),
    IconCopy: iconCopy(),
    IconHalfselect: iconHalfselect(),
    IconCheck: iconCheck(),
    IconCheckedSur: iconCheckedSur(),
    IconSearch: iconSearch(),
    IconDeltaDown: iconDeltaDown(),
    IconLoadingShadow: iconLoadingShadow(),
    IconPlus: iconPlus()
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
    'dropdownIcon',
    'disabledTooltipContent',
    'hoverExpand',
    'optimization',
    'displayOnly',
    'initQuery',
    'extraQueryParams',
    'shape',
    'label',
    'tip',
    'updateDelay',
    'showTips',
    'popperOptions',
    'trim',
    'topCreate',
    'topCreateText',
    'keepFocus',
    'blank',
    // 以下为 tiny 新增
    'searchable',
    'showEmptyImage',
    'inputBoxType',
    'tagType',
    'clearNoMatchValue'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
