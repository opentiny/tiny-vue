<template>
  <tiny-select
    :data-testid="testID"
    :class="className + ' query-builder-select'"
    v-model="valueSelector.val"
    value-field="name"
    text-field="label"
    render-type="tree"
    :tree-op="treeOp"
    :title="title"
    :disabled="disabled"
    :multiple="!!multiple"
    @change="selectElementChangeHandler"
    hover-expand
  ></tiny-select>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import { useSelectElementChangeHandler, useValueSelector } from '../hooks'
import { isOptionGroupArray } from '../utils/optGroupUtils'
import Select from '@opentiny/vue-select'

export default defineComponent({
  components: {
    TinySelect: Select
  },
  props: [
    'className',
    'handleOnChange',
    'options',
    'title',
    'value',
    'multiple',
    'listsAsArrays',
    'disabled',
    'testID'
  ],
  setup() {
    return {
      isOptionGroupArray
    }
  },
  computed: {
    valueSelector() {
      const { handleOnChange, value, multiple, listsAsArrays } = this

      return useValueSelector({ handleOnChange, listsAsArrays, multiple, value })
    },
    selectElementChangeHandler() {
      const { onChange } = this.valueSelector
      const multiple = this.multiple

      return useSelectElementChangeHandler({ multiple, onChange, field: 'name' })
    },
    treeOp() {
      const data = this.formatField(this.options)

      return {
        nodeKey: 'name',
        data
      }
    }
  },
  methods: {
    formatField(options = []) {
      options.map((option) => {
        const children = option.children
        if (children && children.length) {
          option.disabled = true
          option.children = this.formatField(children)
        }
      })
      return options
    },
    isSelected(data: any, value: any) {
      return Array.isArray(data) ? data.includes(value) : data === value
    }
  }
})
</script>
