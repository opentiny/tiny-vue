<template>
  <tiny-select
    :data-testid="testID"
    :class="className + ' query-builder-select'"
    v-model="valueSelector.val"
    :value="valueSelector.val"
    :title="title"
    :disabled="disabled"
    :multiple="!!multiple"
    v-bind="bindProps"
    @change="selectElementChangeHandler"
    hover-expand
  >
    <template v-if="isOptionGroupArray(options)">
      <tiny-option-group v-for="og in options" :key="og.label" :label="og.label">
        <tiny-option
          v-for="opt in og.options"
          :key="opt.name"
          :value="opt.name"
          :label="opt.label"
          :selected="isSelected(value, opt.name)"
        >
        </tiny-option>
      </tiny-option-group>
    </template>
    <template v-else>
      <template v-if="Array.isArray(options)">
        <tiny-option v-for="opt in options" :key="opt.name" :value="opt.name" :label="opt.label"></tiny-option>
      </template>
    </template>
  </tiny-select>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import { useSelectElementChangeHandler, useValueSelector } from '../hooks'
import { isOptionGroupArray } from '../utils/optGroupUtils'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'
import OptionGroup from '@opentiny/vue-option-group'

export default defineComponent({
  components: {
    TinySelect: Select,
    TinyOption: Option,
    TinyOptionGroup: OptionGroup
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
    'testID',
    'bindProps'
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
      return useSelectElementChangeHandler({ multiple, onChange })
    }
  },
  methods: {
    isSelected(data: any, value: any) {
      return Array.isArray(data) ? data.includes(value) : data === value
    }
  }
})
</script>
