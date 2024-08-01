<template>
  <div class="tiny-user" @mouseover="useSortable" :class="multiLineDrag ? 'draggableClass' : ''">
    <tiny-select
      ref="select"
      :popper-class="'tiny-user' + (popperClass ? ' ' + popperClass : '')"
      :popper-append-to-body="popperAppendToBody"
      @blur="handleBlur"
      @focus="$emit('focus', $event)"
      class="tiny-user__select"
      v-model="state.user"
      v-bind="a($attrs, ['^on[A-Z]'])"
      :display-only="displayOnly"
      :disabled="disabled"
      :show-overflow-tooltip="showOverflowTooltip"
      :hide-drop="!state.visible"
      :size="size"
      :placeholder="placeholder"
      :collapse-tags="collapseTags"
      :multiple="multiple"
      :multipleLimit="multipleLimit"
      @change="userChange"
      :loading="state.loading"
      filterable
      clearable
      remote
      :remote-method="searchMethod"
      @visible-change="visibleChange"
      @clear="$parent.$emit('clear')"
      :tabindex="tabindex"
      :tag-selectable="tagSelectable"
      :copyable="copyable"
      :allow-copy="allowCopy"
      :text-split="textSplit"
      :loading-text="loadingText"
      :no-data-text="noDataText"
      :auto-close="autoClose"
      :query-debounce="queryDebounce"
      :ignore-enter="ignoreEnter"
      :show-tips="showTips"
      :keep-focus="keepFocus"
    >
      <template #prefix>
        <div>
          <icon-group v-if="multiple" class="tiny-svg-size" />
          <icon-user v-else class="tiny-svg-size" />
        </div>
      </template>
      <template v-if="slots.label" #label="{ item }">
        <slot name="label" :user="item"></slot>
      </template>
      <tiny-option
        class="tiny-user__select-dropdown"
        :title="option[state.textField] + (option.dept ? ' ' + option.dept : '')"
        v-for="option in filter()"
        :visible="option._show"
        :key="option[state.valueField]"
        :label="option[state.textField]"
        :value="option[state.valueField]"
      >
        <slot name="options" :slot-scope="option">
          <span class="tiny-user_select left">{{ option[state.textField] }}</span>
          <span class="tiny-user_select right">{{ option.dept }}</span>
        </slot>
      </tiny-option>
    </tiny-select>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/user/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import TinySelect from '@opentiny/vue-select'
import TinyOption from '@opentiny/vue-option'
import { iconUser, iconGroup } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    TinySelect,
    TinyOption,
    IconUser: iconUser(),
    IconGroup: iconGroup()
  },
  inheritAttrs: false,
  emits: ['blur', 'focus', 'change', 'error', 'visible-change', 'update:modelValue'],
  props: [
    ...props,
    'modelValue',
    'multiple',
    'size',
    'displayOnly',
    'disabled',
    'sortable',
    'valueSplit',
    'textSplit',
    'valueField',
    'textField',
    'collapseTags',
    'showOverflowTooltip',
    'placeholder',
    'cache',
    'delay',
    'suggestLength',
    'cacheFields',
    'cacheKey',
    'UserCache',
    'fetchW3Accounts',
    'fetchUserByUserId',
    'fetchSuggestUser',
    'sortByFetchData',
    'popperClass',
    'popperAppendToBody',
    'tabindex',
    'tagSelectable',
    'copyable',
    'batch',
    'allowCopy',
    'noDataText',
    'loadingText',
    'autoClose',
    'queryDebounce',
    'hideSelected',
    'ignoreEnter',
    'showTips',
    'maxWidth',
    'keepFocus',
    'changeCompat',
    'multiLineDrag',
    'multipleLimit'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
