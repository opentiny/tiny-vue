<template>
  <div v-if="!show" class="hide"></div>
  <span
    v-else-if="['text', 'select'].includes(type) && ['between', 'notBetween'].includes(operator)"
    :data-testid="testID"
    :class="className + ' rule-value-editor'"
    :title="title"
  >
    <div v-for="(key, i) in ['from', 'to']" :key="i">
      <custom-input
        v-if="type === 'text'"
        :type="allProps.inputTypeCoerced"
        :value="modelValue[key]"
        :props="{
          key,
          placeholder: allProps.placeHolderText,
          class: standardClassnames.valueListItem,
          disabled
        }"
        :events="{
          change: change1(i)
        }"
      ></custom-input>
      <component
        v-else
        :is="allProps.SelectorComponent"
        :key="key"
        v-bind="otherProps"
        :class="standardClassnames.valueListItem"
        :disabled="disabled"
      ></component>
      <component v-if="i === 0" :is="separator"></component>
    </div>
  </span>

  <component
    v-else-if="['select', 'multiselect'].includes(type)"
    :is="allProps.SelectorComponent"
    v-bind="allProps.props"
    :testID="testID"
    :className="className"
    :title="title"
    :handleOnChange="handleOnChange"
    :disabled="disabled"
    :value="value"
    :options="values"
    :multiple="type === 'multiselect'"
    :listsAsArrays="listsAsArrays"
  ></component>

  <span v-else-if="type === 'radio'" :data-testid="testID" :class="className + ' rule-radio'" :title="title">
    <custom-input
      v-for="(v, key) in values"
      :key="key"
      :type="type"
      :value="value"
      :props="{
        label: v.name,
        text: v.label,
        disabled
      }"
      :events="{ change }"
    ></custom-input>
  </span>

  <span v-else class="rule-value-editor">
    <custom-input
      :type="allProps.inputTypeCoerced"
      :value="type === 'checkbox' ? !!value : value"
      :props="{
        'data-testid': testID,
        placeholder: allProps.placeHolderText,
        title,
        class: className,
        disabled
      }"
      :events="{ change }"
    ></custom-input>
  </span>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import { standardClassnames } from '../defaults'
import { getFirstOption, parseNumber } from '../utils'
import { useValueEditor } from '../hooks'
import ValueSelector from './ValueSelector.vue'
import Input from './input'

export default defineComponent({
  components: {
    CustomInput: Input
  },
  props: {
    field: String,
    operator: {},
    value: {},
    valueSource: {},
    fieldData: {},
    type: {
      type: String,
      default: 'text'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    values: {
      type: Array,
      default: () => []
    },
    listsAsArrays: {},
    parseNumbers: {},
    separator: {},
    selectorComponent: {},
    skipHook: {},
    handleOnChange: {},
    className: {},
    path: {},
    level: {},
    title: {},
    disabled: {},
    context: {},
    validation: {},
    testID: {},
    schema: {}
  }, // :ValueEditorProps
  setup() {
    return {
      standardClassnames,
      getFirstOption,
      parseNumber,
      modelValue: {
        from: '',
        to: ''
      }
    }
  },
  computed: {
    allProps() {
      const {
        operator,
        value,
        handleOnChange,
        title,
        className,
        type = 'text',
        inputType = 'text',
        values = [],
        listsAsArrays,
        parseNumbers,
        fieldData,
        disabled,
        separator = null,
        skipHook = false,
        testID,
        selectorComponent: SelectorComponent = ValueSelector,
        ...props
      } = this.$props
      const { valueAsArray, multiValueHandler } = useValueEditor({
        skipHook,
        handleOnChange,
        inputType,
        operator,
        value,
        type,
        listsAsArrays,
        parseNumbers,
        values
      })
      const placeHolderText = fieldData?.placeholder ?? ''
      const inputTypeCoerced = ['textarea', 'switch', 'checkbox'].includes(type)
        ? type
        : ['in', 'notIn'].includes(operator)
        ? 'text'
        : inputType || 'text'

      if (Array.isArray(valueAsArray)) {
        this.modelValue.from = valueAsArray[0]
        this.modelValue.to = valueAsArray[1]
      } else {
        this.modelValue.from = ''
        this.modelValue.to = ''
      }

      return {
        operator,
        value,
        handleOnChange,
        title,
        className,
        type,
        inputType,
        values,
        listsAsArrays,
        parseNumbers,
        fieldData,
        disabled,
        separator,
        skipHook,
        testID,
        SelectorComponent,
        props,

        multiValueHandler,

        placeHolderText,
        inputTypeCoerced
      }
    },
    show() {
      return !['null', 'notNull'].includes(this.operator)
    }
  },
  methods: {
    change(e: any) {
      if (['textarea', 'radio'].includes(this.type)) {
        return this.handleOnChange(e?.target?.value || e)
      }

      return this.handleOnChange(parseNumber(e?.target?.value || e, { parseNumbers: this.parseNumbers }))
    },
    change1(i: number) {
      return (e: any) => this.allProps.multiValueHandler(e?.target?.value || e, i)
    }
  }
})
</script>
