<template>
  <div
    ref="select"
    class="inline-block relative w-full outline-0 group [&_[data-tag=tiny-tag]]:max-w-[144px]"
    v-popover:popover
    :class="[hoverExpand ? 'align-top' : '', $parent.$attrs.class]"
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
      :class="[
        { 'absolute top-0 left-0 right-0': hoverExpand },
        { 'absolute w-full': state.isExpand && hoverExpand },
        { 'z-[2]': state.isExpand && hoverExpand && (state.inputHovering || state.visible) }
      ]"
    >
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
        :class="
          m(
            gcls('select-tags'),
            { 'pl-9 sm:pl-9': slots.prefix },
            { 'overflow-y-hidden': (state.inputHovering || state.visible) && !state.selected.length },
            { 'h-6 overflow-hidden': hoverExpand },
            { 'pr-6': state.selectDisabled },
            { 'overflow-y-auto max-h-28 h-auto': hoverExpand && (state.inputHovering || state.visible) }
          )
        "
        v-if="multiple && !state.isDisplayOnly && !shape"
        :style="state.tagsStyle"
      >
        <span
          v-if="!state.selectDisabled"
          :class="[
            collapseTags
              ? filterable && state.device === 'pc'
                ? 'w-auto max-w-[76%] flex'
                : 'w-full flex'
              : 'contents'
          ]"
        >
          <span
            v-if="(collapseTags || state.device === 'mb') && state.selectedVal.length"
            :class="['contents', collapseTags && filterable ? 'max-w-full flex-1' : '']"
          >
            <tiny-tag
              :closable="!state.selectDisabled && state.device !== 'mb'"
              :size="state.collapseTagSize"
              :hit="state.selectedVal[0].state ? state.selectedVal[0].state.hitState : state.selectedVal[0].hitState"
              :key="state.key"
              type="info"
              :class="gcls('tag-info')"
              @close="deleteTag($event, state.selectedVal[0])"
              disable-transitions
            >
              <tiny-tooltip
                effect="light"
                placement="top"
                @mouseenter.native="handleEnterTag($event, getValueKey(state.selectedVal[0]))"
              >
                <span :class="gcls('tags-text')">
                  <slot name="label" :item="getLabelSlotValue(state.selectedVal[0])">{{
                    state.selectedVal[0].state
                      ? state.selectedVal[0].state.currentLabel
                      : state.selectedVal[0].currentLabel
                  }}</slot>
                </span>
                <template v-if="state.tooltipContent[getValueKey(state.selectedVal[0])]" #content>
                  <span :class="gcls('tags-text')">
                    <slot name="label" :item="getLabelSlotValue(state.selectedVal[0])">{{
                      state.selectedVal[0].state
                        ? state.selectedVal[0].state.currentLabel
                        : state.selectedVal[0].currentLabel
                    }}</slot>
                  </span>
                </template>
              </tiny-tooltip>
            </tiny-tag>
            <tiny-tag
              v-if="state.selectedVal.length > 1"
              :closable="false"
              :size="state.collapseTagSize"
              class="overflow-visible"
              :class="gcls('tag-info')"
              type="info"
              disable-transitions
            >
              <span :class="gcls('tags-text')">+ {{ state.selectedVal.length - 1 }}</span>
            </tiny-tag>
          </span>
          <span ref="tags-content" v-if="!collapseTags" class="sm:contents hidden">
            <tiny-tag
              v-if="hoverExpand"
              :class="
                m(
                  gcls('tag-info'),
                  { 'visible static': hoverExpand },
                  { 'invisible absolute': hoverExpand && (state.inputHovering || state.visible || state.isHidden) }
                )
              "
              type="info"
              data-tag="tags-collapse"
              key="tags-collapse"
              :closable="false"
              :size="state.collapseTagSize"
              >+ {{ state.collapseTagsLength }}</tiny-tag
            >
            <tiny-tag
              v-for="(item, index) in state.selected"
              :key="getValueKey(item)"
              :closable="!item.selectDisabled && !item.required && state.device !== 'mb'"
              :size="state.collapseTagSize"
              :hit="item.state ? item.state.hitState : item.hitState"
              :class="gcls('tag-info')"
              type="info"
              @close="deleteTag($event, item)"
              disable-transitions
            >
              <tiny-tooltip
                effect="light"
                placement="top"
                @mouseenter.native="handleEnterTag($event, getValueKey(item))"
              >
                <span v-if="!state.visible && state.overflow === index" :class="gcls('tags-text')">{{
                  item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... '
                }}</span>
                <span v-else :class="gcls('tags-text')">
                  <slot name="label" :item="getLabelSlotValue(item)">{{
                    item.state ? item.state.currentLabel : item.currentLabel
                  }}</slot>
                </span>
                <template v-if="state.tooltipContent[getValueKey(item)]" #content>
                  <span v-if="!state.visible && state.overflow === index" :class="gcls('tags-text')">{{
                    item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... '
                  }}</span>
                  <span v-else :class="gcls('tags-text')">
                    <slot name="label" :item="getLabelSlotValue(item)">{{
                      item.state ? item.state.currentLabel : item.currentLabel
                    }}</slot>
                  </span>
                </template>
              </tiny-tooltip>
            </tiny-tag>
          </span>
        </span>

        <span v-else :class="[gcls('tags-text'), 'flex']">
          <tiny-tooltip effect="light" placement="top" :disabled="!showTips || state.device === 'mb'">
            <span class="inline-block w-full whitespace-nowrap text-ellipsis overflow-hidden text-color-text-disabled">
              <span v-for="item in state.selected" :key="item.value">
                <slot name="label" :item="item">{{ item.state ? item.state.currentLabel : item.currentLabel }}</slot
                >;
              </span>
            </span>

            <template #content>
              <div :class="[state.showTips && 'max-h-[theme(spacing.72)] overflow-x-hidden w-full', 'inline-block']">
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
          class="hidden sm:inline-block border-none outline-0 p-0 ml-px text-color-text-primary text-xs h-7 appearance-none bg-transparent"
          :class="[
            state.selectSize === 'mini' ? 'h-6' : '',
            state.selectSize === 'small' ? 'h-9' : '',
            state.selectSize === 'medium' ? 'h-8' : ''
          ]"
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
          <span v-if="state.showCopy" class="h-4 cursor-pointer relative z-[1]" @click.stop="handleCopyClick">
            <icon-copy :class="[gcls('caret'), 'align-top group-hover:fill-color-brand']"></icon-copy>
          </span>
          <icon-close
            v-if="state.showClose"
            :class="[
              gcls('caret'),
              'hidden sm:inline-block',
              { 'mr-2 fill-color-text-placeholder hover:fill-color-icon-primary': state.showClose },
              { 'mr-1': multiple && state.showClose }
            ]"
            @click="handleClearClick"
            @mouseenter="state.inputHovering = true"
          ></icon-close>
          <component
            v-show="!(remote && filterable && !remoteConfig.showIcon)"
            :is="dropdownIcon"
            :class="
              m(
                gcls('caret'),
                'hidden sm:inline-block',
                state.iconClass,
                { 'hidden': state.selectDisabled },
                { 'fill-color-brand-hover rotate-180 ': state.visible }
              )
            "
            @click="handleDropdownClick"
          ></component>
          <icon-chevron-right
            custom-class="h-5 w-5 sm:h-4 sm:w-4"
            class="inline-block sm:hidden"
            :class="[
              state.selectDisabled
                ? 'fill-color-icon-placeholder sm:fill-color-icon-disabled'
                : 'fill-color-icon-secondary'
            ]"
          ></icon-chevron-right>
        </template>
      </tiny-input>
      <transition @before-enter="handleMenuEnter" @after-leave="doDestroy">
        <tiny-select-dropdown
          ref="popper"
          :title="title"
          :close-by-mask="closeByMask"
          :search-placeholder="searchPlaceholder"
          :is-drop-inherit-width="isDropInheritWidth"
          :placement="placement"
          :append-to-body="popperAppendToBody"
          v-show="!onCopying() && !hideDrop && state.visible && state.emptyText !== false"
          :style="dropStyle"
          :popper-options="popperOptions"
          :class="m('duration-300')"
        >
          <div
            v-if="shape && filterable"
            class="px-3 pt-3 pb-1 hidden sm:block"
            :class="[remote && !state.options.length ? 'pb-3' : '']"
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

          <tiny-tree
            v-if="renderType === 'tree'"
            class="[&_[data-tag=tiny-checkbox]_>span_>span]:p-1.5 sm:[&_[data-tag=tiny-checkbox]_>span_>span]:p-0"
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
            :show-checked-mark="state.device === 'mb'"
            v-bind="treeOp"
          ></tiny-tree>
          <template v-if="optimization && renderType !== 'tree'">
            <div :style="{ height: `${state.optimizeStore.recycleScrollerHeight}px` }">
              <tiny-recycle-scroller
                ref="scrollbar"
                style="height: 100%"
                :key-field="valueField"
                :key="state.magicKey"
                :list-class="[
                  'tiny-select-dropdown__wrap sm:max-h-56 pb-1 sm:pb-0',
                  state.device === 'mb' ? 'scrollbar-size-0' : ''
                ]"
                :items="state.datas"
                :item-size="state.optimizeOpts.optionHeight"
                v-show="!state.emptyFlag && !loading"
              >
                <template #before>
                  <tiny-option
                    v-if="state.showNewOption"
                    highlightClass="sm:mb-0"
                    created
                    :value="state.device === 'mb' ? state.queryValue : state.query"
                  >
                  </tiny-option>
                </template>
                <template #default="{ item }">
                  <tiny-option
                    :class="['absolute w-full']"
                    :key="`${item[valueField]}`"
                    :label="item[textField]"
                    :value="item[valueField]"
                    :disabled="item.disabled"
                    :required="item.required"
                    :highlight-class="item._highlightClass"
                    :events="item.events"
                    @mousedown.stop
                  >
                  </tiny-option>
                </template>
              </tiny-recycle-scroller>
            </div>
          </template>
          <tiny-scrollbar
            v-if="!optimization && renderType !== 'tree'"
            ref="scrollbar"
            tag="ul"
            :wrap-class="[
              'tiny-select-dropdown__wrap sm:max-h-56 pb-1 sm:pb-0',
              state.device === 'mb' ? 'scrollbar-size-0' : ''
            ]"
            :view-class="['tiny-select-dropdown__list']"
            @mousedown.stop
            v-show="state.options.length > 0 && !loading"
          >
            <slot name="dropdown"></slot>
            <div
              v-if="multiple && showCheck && showAlloption && !state.multipleLimit && !state.query && !remote"
              class="whitespace-nowrap box-border py-0 h-10 leading-10 sm:h-8 sm:leading-8 text-sm sm:text-xs pl-0 pr-3 sm:px-3 my-1 sm:m-1 rounded cursor-pointer"
              :class="[
                {
                  hover: state.hoverIndex === -9 && state.selectCls !== 'checked-sur'
                },
                { 'text-color-brand sm:bg-color-fill-6 bg-color-bg-1': state.selectCls === 'checked-sur' }
              ]"
              data-tag="tiny-select-dropdown-item"
              @click.stop="toggleCheckAll(false)"
              @mousedown.stop
              @mouseenter="state.hoverIndex = -9"
            >
              <component
                :is="`icon-${state.selectCls}`"
                :class="
                  m(['-mt-0.5 mr-2 fill-color-icon-secondary', state.selectCls !== 'check' && 'fill-color-brand'])
                "
              />
              <span :class="[state.selectCls === 'checked-sur' ? 'text-color-brand' : 'text-color-text-primary']">{{
                t('ui.base.all')
              }}</span>
            </div>

            <div
              v-if="
                multiple &&
                showCheck &&
                showAlloption &&
                !state.multipleLimit &&
                state.query &&
                !state.emptyText &&
                !remote
              "
              class="whitespace-nowrap box-border py-0 h-10 leading-10 sm:h-8 sm:leading-8 text-sm sm:text-xs pl-0 pr-3 sm:px-3 my-1 sm:m-1 rounded cursor-pointer"
              :class="[
                {
                  hover: state.hoverIndex === -9 && state.filteredSelectCls !== 'checked-sur'
                },
                { 'text-color-brand sm:bg-color-fill-6 bg-color-bg-1': state.filteredSelectCls === 'checked-sur' }
              ]"
              data-tag="tiny-select-dropdown-item"
              @click.stop="toggleCheckAll(true)"
              @mousedown.stop
              @mouseenter="state.hoverIndex = -9"
            >
              <component
                :is="`icon-${state.filteredSelectCls}`"
                :class="
                  m([
                    '-mt-0.5 mr-2 fill-color-icon-secondary',
                    state.filteredSelectCls !== 'check' && 'fill-color-brand'
                  ])
                "
              />
              <span
                :class="[state.filteredSelectCls === 'checked-sur' ? 'text-color-brand' : 'text-color-text-primary']"
                >{{ t('ui.base.all') }}</span
              >
            </div>
            <tiny-option
              :value="state.device === 'mb' ? state.queryValue : state.query"
              created
              v-if="state.showNewOption"
            >
            </tiny-option>
            <slot>
              <tiny-option
                v-for="item in state.datas"
                :class="['relative']"
                :key="`${item[valueField]}`"
                :label="item[textField]"
                :value="item[valueField]"
                :disabled="item.disabled"
                :required="item.required"
                :highlight-class="item._highlightClass"
                :events="item.events"
                @mousedown.stop
              >
              </tiny-option>
            </slot>
          </tiny-scrollbar>

          <template
            v-if="
              renderType !== 'tree' && state.emptyText && (!allowCreate || loading || (allowCreate && state.emptyFlag))
            "
          >
            <div v-if="loadingText || slots.empty">
              <slot name="empty" v-if="slots.empty"></slot>
              <p class="py-2.5 px-0 m-0 text-center text-color-text-secondary text-xs" v-else>
                {{ state.emptyText }}
              </p>
            </div>
            <div v-else class="text-center py-2.5 px-0">
              <span v-if="!loading" class="py-2.5 px-0 m-0 text-center text-color-text-secondary text-xs">
                {{ state.emptyText }}
              </span>
              <icon-loading v-else class="fill-color-brand h-4 w-4 inline-block align-top animate-spin"> </icon-loading>
            </div>
          </template>
        </tiny-select-dropdown>
      </transition>
    </div>
    <div
      v-if="hoverExpand && !state.isDisplayOnly"
      :class="
        m(
          'h-7 invisible',
          { 'h-6': state.selectSize === 'mini' },
          { 'h-7': state.selectSize === 'small' },
          { 'h-8': state.selectSize === 'medium' }
        )
      "
    >
      <input disabled />
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/select/vue'
import { props, setup, directive } from '@opentiny/vue-common'
import TinyTag from '@opentiny/vue-tag'
import TinyInput from '@opentiny/vue-input'
import TinyOption from '@opentiny/vue-option'
import TinyScrollbar from '@opentiny/vue-scrollbar'
import TinySelectDropdown from '@opentiny/vue-select-dropdown'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import {
  iconClose,
  iconHalfselect,
  iconCheck,
  iconCheckedSur,
  iconCopy,
  iconLoading,
  iconChevronRight
} from '@opentiny/vue-icon'
import TinyTree from '@opentiny/vue-tree'
import TinyTooltip from '@opentiny/vue-tooltip'
import TinyFilterBox from '@opentiny/vue-filter-box'
import RecycleScroller from '@opentiny/vue-recycle-scroller'
import { classes } from './token'

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

export default {
  inheritAttrs: false,
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
    'confirm'
  ],
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
    TinyTree,
    TinyScrollbar,
    TinyFilterBox,
    TinyTooltip,
    IconClose: iconClose(),
    IconCopy: iconCopy(),
    TinySelectDropdown,
    IconHalfselect: iconHalfselect(),
    IconCheck: iconCheck(),
    IconCheckedSur: iconCheckedSur(),
    IconLoading: iconLoading(),
    IconChevronRight: iconChevronRight(),
    TinyRecycleScroller: RecycleScroller
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
    'title',
    'closeByMask',
    'searchPlaceholder',
    'blank'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
}
</script>
