<template>
  <div data-tag="tiny-user">
    <tiny-select
      ref="select"
      tiny_mode="mobile-first"
      :popper-class="popperClass ? ' ' + popperClass : ''"
      :popper-append-to-body="popperAppendToBody"
      @blur="handleBlur"
      @focus="$emit('focus', $event)"
      class="w-full [&_[data-tag=tiny-input-inner]]:pl-9 [&_[data-tag=tiny-input-prefix]]:pl-1 hover:[&_[data-tag=tiny-input-inner]]:pr-9"
      v-model="state.user"
      v-bind="a($attrs, ['^on[A-Z]'])"
      :display-only="displayOnly"
      :disabled="disabled"
      :show-overflow-tooltip="showOverflowTooltip"
      :show-tooltip="showTooltip"
      :size="size"
      :hide-drop="state.device === 'mb' ? false : !state.visible"
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
      :ignore-enter="state.device === 'mb' ? false : ignoreEnter"
      :show-tips="showTips"
      :keep-focus="keepFocus"
      :show-empty-value="showEmptyValue"
      :dropdown-height="dropdownHeight"
    >
      <template #prefix>
        <div>
          <icon-group v-if="multiple" class="h-4 w-4 inline-block fill-color-text-placeholder" />
          <icon-user v-else class="h-4 w-4 inline-block fill-color-text-placeholder" />
        </div>
      </template>
      <template v-if="slots.label" #label="{ item }">
        <slot name="label" :user="item"></slot>
      </template>
      <tiny-option
        :title="option.userCN + (option.dept ? ' ' + option.dept : '')"
        v-for="option in filter()"
        :visible="option._show"
        :key="option[state.valueField]"
        :label="option[state.textField]"
        :value="option[state.valueField]"
      >
        <slot name="options" :slot-scope="option">
          <div class="flex-1">
            <span class="w-auto truncate float-left mr-1">{{ option.userCN }}</span>
            <span class="w-auto truncate float-right ml-1">{{ option.dept }}</span>
          </div>
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
import { IconUser, IconGroup } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    TinySelect,
    TinyOption,
    IconUser: IconUser(),
    IconGroup: IconGroup()
  },
  inheritAttrs: false,
  emits: ['error', 'blur', 'focus', 'change', 'visible-change', 'update:modelValue'],
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
    'multipleLimit',
    'autoSelect',
    'showEmptyValue',
    'dropdownHeight',
    'showTooltip'
  ],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
