<template>
  <div class="rule--wrap">
    <component
      :is="controls.dragHandle"
      v-if="r.schema.enableDragAndDrop"
      :ref="r.dragRef"
      :test-i-d="TestID.dragHandle"
      :level="r.path.length"
      :path="r.path"
      :title="r.translations.dragHandle.title"
      :label="r.translations.dragHandle.label"
      :class-name="r.classNames.dragHandle"
      :disabled="r.disabled"
      :context="r.context"
      :validation="r.validationResult"
      :schema="r.schema"
    ></component>

    <component
      :is="controls.fieldSelector"
      :test-i-d="TestID.fields"
      :options="r.schema.fields"
      :title="r.translations.fields.title"
      :value="r.rule.field"
      :operator="r.rule.operator"
      :class-name="r.classNames.fields"
      :handle-on-change="r.generateOnChangeHandler('field')"
      :level="r.path.length"
      :path="r.path"
      :disabled="r.disabled"
      :context="r.context"
      :validation="r.validationResult"
      :schema="r.schema"
      :bind-props="(r.schema.bindProps && r.schema.bindProps.leftSelect) || {}"
    ></component>

    <component
      :is="controls.operatorSelector"
      v-if="r.schema.autoSelectField || r.rule.field !== r.translations.fields.placeholderName"
      :test-i-d="TestID.operators"
      :field="r.rule.field"
      :field-data="r.fieldData"
      :title="r.translations.operators.title"
      :options="r.operators"
      :value="r.rule.operator"
      :class-name="r.classNames.operators"
      :handle-on-change="operatorChange"
      :level="r.path.length"
      :path="r.path"
      :disabled="r.disabled"
      :context="r.context"
      :validation="r.validationResult"
      :schema="r.schema"
    ></component>

    <template
      v-if="
        (r.schema.autoSelectOperator || r.rule.operator !== r.translations.operators.placeholderName) &&
        !r.hideValueControls
      "
    >
      <component
        v-if="!['null', 'notNull'].includes(r.rule.operator) && r.valueSources.length > 1"
        :is="controls.valueSourceSelector"
        :test-i-d="TestID.valueSourceSelector"
        :field="r.rule.field"
        :field-data="r.fieldData"
        :title="r.translations.valueSourceSelector.title"
        :options="r.valueSourceOptions"
        :value="r.rule.valueSource === undefined || null ? 'value' : r.rule.valueSource"
        :class-name="r.classNames.valueSource"
        :handle-on-change="r.generateOnChangeHandler('valueSource')"
        :level="r.path.length"
        :path="r.path"
        :disabled="r.disabled"
        :context="r.context"
        :validation="r.validationResult"
        :schema="r.schema"
        :bind-props="(r.schema.bindProps && r.schema.bindProps.select) || {}"
      ></component>

      <component
        :is="controls.valueEditor"
        :test-i-d="TestID.valueEditor"
        :field="r.rule.field"
        :field-data="r.fieldData"
        :title="r.translations.title"
        :operator="r.rule.operator"
        :value="r.rule.value"
        :value-source="r.rule.valueSource === undefined || null ? 'value' : r.rule.valueSource"
        :type="r.valueEditorType"
        :input-type="r.inputType"
        :values="r.values"
        :lists-as-arrays="r.schema.listsAsArrays"
        :parse-numbers="r.schema.parseNumbers"
        :separator="r.valueEditorSeparator"
        :class-name="r.classNames.value"
        :handle-on-change="r.generateOnChangeHandler('value')"
        :level="r.path.length"
        :path="r.path"
        :disabled="r.disabled"
        :context="r.context"
        :validation="r.validationResult"
        :schema="r.schema"
      ></component>
    </template>

    <component
      :is="controls.cloneRuleAction"
      v-if="r.schema.showCloneButtons"
      :test-i-d="TestID.cloneRule"
      :label="r.translations.cloneRule.label"
      :title="r.translations.cloneRule.title"
      :class-name="r.classNames.cloneRule"
      :handle-on-click="r.cloneRule"
      :level="r.path.length"
      :path="r.path"
      :disabled="r.disabled"
      :context="r.context"
      :validation="r.validationResult"
      :rule-or-group="r.rule"
      :schema="r.schema"
    >
      <span class="btn-font">⧉</span>
    </component>

    <component
      :is="controls.lockRuleAction"
      v-if="r.schema.showLockButtons"
      :test-i-d="TestID.lockRule"
      :label="r.translations.lockRule.label"
      :title="r.translations.lockRule.title"
      :class-name="r.classNames.lockRule"
      :handle-on-click="r.toggleLockRule"
      :level="r.path.length"
      :path="r.path"
      :disabled="r.disabled"
      :disabled-translation="r.parentDisabled ? undefined : r.translations.lockRuleDisabled"
      :context="r.context"
      :validation="r.validationResult"
      :rule-or-group="r.rule"
      :schema="r.schema"
    >
      <span class="btn-font">🔓</span>
    </component>

    <component
      :is="controls.clearDataAction"
      v-if="queryBuilderRoot.showClearBtn"
      :test-i-d="TestID.clearData"
      :label="r.translations.clearData.label"
      :title="r.translations.clearData.title"
      :class-name="r.classNames.clearData"
      :handle-on-click="r.clearData"
      :level="r.path.length"
      :path="r.path"
      :disabled="r.disabled"
      :context="r.context"
      :validation="r.validationResult"
      :rule-or-group="r.rule"
      :schema="r.schema"
      ><IconEditorEraser class="btn-icon"></IconEditorEraser
    ></component>

    <component
      :is="controls.removeRuleAction"
      v-else
      :test-i-d="TestID.removeRule"
      :label="r.translations.removeRule.label"
      :title="r.translations.removeRule.title"
      :class-name="r.classNames.removeRule"
      :handle-on-click="r.removeRule"
      :level="r.path.length"
      :path="r.path"
      :disabled="r.disabled"
      :context="r.context"
      :validation="r.validationResult"
      :rule-or-group="r.rule"
      :schema="r.schema"
      ><IconNodeOpen class="btn-icon"></IconNodeOpen
    ></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import { TestID } from '../defaults'
import { IconNodeOpen, IconEditorEraser } from '@opentiny/vue-icon'

const RulePropsParam = [
  'rule',
  'field',
  'operator',
  'value',
  'valueSource',
  'id',
  'path',
  'parentDisabled',
  'translations',
  'schema',
  'actions',
  'disabled',
  'context',
  'isDragging',
  'dragMonitorId',
  'isOver',
  'dropMonitorId',
  'dragRef',
  'dndRef',
  'dropEffect'
]

const UseRuleProps = [
  'classNames',
  'cloneRule',
  'fieldData',
  'generateOnChangeHandler',
  'hideValueControls',
  'inputType',
  'operators',
  'outerClassName',
  'removeRule',
  'clearData',
  'toggleLockRule',
  'validationResult',
  'valueEditorSeparator',
  'valueEditorType',
  'values',
  'valueSourceOptions',
  'onlyOne',
  'valueSources'
]

export default defineComponent({
  name: 'RuleComponents',
  components: {
    IconNodeOpen: IconNodeOpen(),
    IconEditorEraser: IconEditorEraser()
  },
  inject: ['queryBuilderRoot'],
  props: [...RulePropsParam, ...UseRuleProps], // :RuleComponents
  setup() {
    return {
      TestID
    }
  },
  computed: {
    r(): any {
      return { ...this.$props }
    },
    controls(): any {
      const {
        schema: {
          controls: {
            dragHandle,
            fieldSelector,
            operatorSelector,
            valueSourceSelector,
            valueEditor,
            cloneRuleAction,
            lockRuleAction,
            clearRuleAction,
            removeRuleAction,
            clearDataAction
          }
        }
      } = this.r

      return {
        dragHandle,
        fieldSelector,
        operatorSelector,
        valueSourceSelector,
        valueEditor,
        cloneRuleAction,
        lockRuleAction,
        clearRuleAction,
        removeRuleAction,
        clearDataAction
      }
    }
  },
  data() {
    const zero = 'zeroOperator'
    const two = 'twoOperator'
    return {
      lastOperator: '',
      operatorMap: {
        'null': zero,
        'notNull': zero,
        'between': two,
        'notBetween': two
      }
    }
  },

  methods: {
    sameTypeOperator(val) {
      return this.operatorMap[this.lastOperator] === this.operatorMap[val]
    },
    operatorChangeHandler() {
      return this.r.generateOnChangeHandler('operator')
    },
    operatorChange(val) {
      this.r.generateOnChangeHandler('operator')(val)
      // 如果是切换操作符类型所需要的操作数不一致，则清空缓存值
      if (!this.sameTypeOperator(val)) {
        this.r.generateOnChangeHandler('value')('')
      }
      this.lastOperator = val
    }
  },
  mounted() {
    this.lastOperator = this.r.rule.operator
  }
})
</script>
