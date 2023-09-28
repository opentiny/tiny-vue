<template>
  <div class="rule--wrap">
    <component
      :is="controls.dragHandle"
      v-if="r.schema.enableDragAndDrop"
      :ref="r.dragRef"
      :testID="TestID.dragHandle"
      :level="r.path.length"
      :path="r.path"
      :title="r.translations.dragHandle.title"
      :label="r.translations.dragHandle.label"
      :className="r.classNames.dragHandle"
      :disabled="r.disabled"
      :context="r.context"
      :validation="r.validationResult"
      :schema="r.schema"
    ></component>

    <component
      :is="controls.fieldSelector"
      :testID="TestID.fields"
      :options="r.schema.fields"
      :title="r.translations.fields.title"
      :value="r.rule.field"
      :operator="r.rule.operator"
      :className="r.classNames.fields"
      :handleOnChange="r.generateOnChangeHandler('field')"
      :level="r.path.length"
      :path="r.path"
      :disabled="r.disabled"
      :context="r.context"
      :validation="r.validationResult"
      :schema="r.schema"
    ></component>

    <component
      :is="controls.operatorSelector"
      v-if="r.schema.autoSelectField || r.rule.field !== r.translations.fields.placeholderName"
      :testID="TestID.operators"
      :field="r.rule.field"
      :fieldData="r.fieldData"
      :title="r.translations.operators.title"
      :options="r.operators"
      :value="r.rule.operator"
      :className="r.classNames.operators"
      :handleOnChange="r.generateOnChangeHandler('operator')"
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
        :testID="TestID.valueSourceSelector"
        :field="r.rule.field"
        :fieldData="r.fieldData"
        :title="r.translations.valueSourceSelector.title"
        :options="r.valueSourceOptions"
        :value="r.rule.valueSource == undefined || null ? 'value' : r.rule.valueSource"
        :className="r.classNames.valueSource"
        :handleOnChange="r.generateOnChangeHandler('valueSource')"
        :level="r.path.length"
        :path="r.path"
        :disabled="r.disabled"
        :context="r.context"
        :validation="r.validationResult"
        :schema="r.schema"
      ></component>

      <component
        :is="controls.valueEditor"
        :testID="TestID.valueEditor"
        :field="r.rule.field"
        :fieldData="r.fieldData"
        :title="r.translations.title"
        :operator="r.rule.operator"
        :value="r.rule.value"
        :valueSource="r.rule.valueSource == undefined || null ? 'value' : r.rule.valueSource"
        :type="r.valueEditorType"
        :inputType="r.inputType"
        :values="r.values"
        :listsAsArrays="r.schema.listsAsArrays"
        :parseNumbers="r.schema.parseNumbers"
        :separator="r.valueEditorSeparator"
        :className="r.classNames.value"
        :handleOnChange="r.generateOnChangeHandler('value')"
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
      :testID="TestID.cloneRule"
      :label="r.translations.cloneRule.label"
      :title="r.translations.cloneRule.title"
      :className="r.classNames.cloneRule"
      :handleOnClick="r.cloneRule"
      :level="r.path.length"
      :path="r.path"
      :disabled="r.disabled"
      :context="r.context"
      :validation="r.validationResult"
      :ruleOrGroup="r.rule"
      :schema="r.schema"
    >
      <span class="btn-font">⧉</span>
    </component>

    <component
      :is="controls.lockRuleAction"
      v-if="r.schema.showLockButtons"
      :testID="TestID.lockRule"
      :label="r.translations.lockRule.label"
      :title="r.translations.lockRule.title"
      :className="r.classNames.lockRule"
      :handleOnClick="r.toggleLockRule"
      :level="r.path.length"
      :path="r.path"
      :disabled="r.disabled"
      :disabledTranslation="r.parentDisabled ? undefined : r.translations.lockRuleDisabled"
      :context="r.context"
      :validation="r.validationResult"
      :ruleOrGroup="r.rule"
      :schema="r.schema"
    >
      <span class="btn-font">🔓</span>
    </component>

    <component
      :is="controls.clearDataAction"
      v-if="queryBuilderRoot.showClearBtn"
      :testID="TestID.clearData"
      :label="r.translations.clearData.label"
      :title="r.translations.clearData.title"
      :className="r.classNames.clearData"
      :handleOnClick="r.clearData"
      :level="r.path.length"
      :path="r.path"
      :disabled="r.disabled"
      :context="r.context"
      :validation="r.validationResult"
      :ruleOrGroup="r.rule"
      :schema="r.schema"
      ><IconEditorEraser class="btn-icon"></IconEditorEraser
    ></component>

    <component
      :is="controls.removeRuleAction"
      v-else
      :testID="TestID.removeRule"
      :label="r.translations.removeRule.label"
      :title="r.translations.removeRule.title"
      :className="r.classNames.removeRule"
      :handleOnClick="r.removeRule"
      :level="r.path.length"
      :path="r.path"
      :disabled="r.disabled"
      :context="r.context"
      :validation="r.validationResult"
      :ruleOrGroup="r.rule"
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
  props: [...RulePropsParam, ...UseRuleProps], //:RuleComponents
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
  }
})
</script>
