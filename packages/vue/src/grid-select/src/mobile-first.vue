<template>
  <tiny-base-select
    ref="baseSelectRef"
    data-tag="tiny-grid-select"
    v-model="state.modelValue"
    :clearable="clearable"
    :multiple="multiple"
    :filterable="filterable"
    :filter-method="filter"
    :text-field="textField"
    :value-field="valueField"
    :size="size"
    :disabled="disabled"
    :placeholder="placeholder"
    :readonly="readonly"
    :popper-class="popperClass"
    :popper-append-to-body="popperAppendToBody"
    :placement="placement"
    :drop-style="dropStyle"
    :hover-expand="hoverExpand"
    :click-expand="clickExpand"
    :collapse-tags="collapseTags"
    :copyable="copyable"
    :text-split="textSplit"
    :show-tips="showTips"
    :searchable="searchable"
    :multiple-limit="multipleLimit"
    :remote="remote"
    :remote-method="remoteMethod"
    :init-query="initQuery"
    :extra-query-params="extraQueryParams"
    :remote-config="remoteConfig"
    @visible-change="handleVisibleChange"
  >
    <template #panel>
      <tiny-grid
        ref="gridRef"
        auto-resize
        :row-id="valueField"
        :select-config="state.selectConfig"
        :radio-config="state.radioConfig"
        :highlight-current-row="true"
        :columns="gridOp?.columns || []"
        :data="Array.isArray(state.gridData) ? state.gridData : state.gridData?.data || state.gridData || []"
        @select-all="selectChange"
        @select-change="selectChange"
        @radio-change="radioChange"
        @mousedown.stop
        v-bind="gridOp"
      ></tiny-grid>
    </template>
  </tiny-base-select>
</template>

<script lang="ts">
import { props, $prefix, defineComponent, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/grid-select/vue'
import Grid from '@opentiny/vue-grid'
import BaseSelect from '@opentiny/vue-base-select'

export default defineComponent({
  name: $prefix + 'GridSelect',
  components: {
    TinyGrid: Grid,
    TinyBaseSelect: BaseSelect
  },
  props: {
    ...props,
    // 基础 props
    clearable: Boolean,
    disabled: Boolean,
    size: String,
    placeholder: String,
    readonly: Boolean,
    modelValue: {},
    multiple: Boolean,
    // 弹框相关
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    dropStyle: {
      type: Object,
      default: () => ({})
    },
    // 标签相关
    collapseTags: Boolean,
    copyable: Boolean,
    textSplit: {
      type: String,
      default: ','
    },
    hoverExpand: Boolean,
    clickExpand: Boolean,
    showTips: {
      type: Boolean,
      default: true
    },
    // 搜索和过滤
    filterable: Boolean,
    filterMethod: Function,
    searchable: Boolean,
    // 远程搜索
    remote: Boolean,
    remoteMethod: Function,
    remoteConfig: {
      type: Object,
      default() {
        return {
          showIcon: false,
          clearData: false,
          autoSearch: false
        }
      }
    },
    reserveKeyword: Boolean,
    extraQueryParams: {
      type: [Object, String, Boolean, Array, Number],
      default: ''
    },
    initQuery: Function,
    // 表格配置
    gridOp: {
      type: Object,
      default: () => ({})
    },
    selectConfig: {
      type: Object,
      default() {
        return {
          checkMethod() {
            return true
          }
        }
      }
    },
    radioConfig: {
      type: Object,
      default() {
        return {
          checkMethod() {
            return true
          }
        }
      }
    },
    // 字段映射
    textField: {
      type: String,
      default: 'label'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    // 多选相关
    multipleLimit: {
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
