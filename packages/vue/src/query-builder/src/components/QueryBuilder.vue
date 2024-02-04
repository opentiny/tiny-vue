<template>
  <div :key="qb.schema.enableDragAndDrop ? 'dnd' : 'no-dnd'">
    <div
      :class="qb.wrapperClassName"
      :data-dnd="qb.schema.enableDragAndDrop ? 'enabled' : 'disabled'"
      :data-inlinecombinators="
        qb.schema.independentCombinators || qb.schema.showCombinatorsBetweenRules ? 'enabled' : 'disabled'
      "
    >
      <component
        :is="ruleGroup"
        :translations="qb.translations"
        :rule-group="query"
        :rules="query.rules"
        :combinator="'combinator' in query ? query.combinator : undefined"
        :not="!!query.not"
        :schema="qb.schema"
        :actions="qb.actions"
        :id="query.id"
        :path="[]"
        :disabled="!!query.disabled || qb.queryDisabled"
        :parent-disabled="qb.queryDisabled"
        :context="qb.context"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import { useQueryBuilder } from '../hooks'

export default defineComponent({
  name: 'QueryBuilder',
  props: [
    'defaultQuery',
    'query',
    'combinator',
    'rules',
    'not',
    'path',
    'id',
    'disabled',
    'field',
    'operator',
    'value',
    'valueSource',
    'combinatorPreceding',
    'independentCombinators',
    'onLog',
    'fields',
    'operators',
    'combinators',
    'getDefaultField',
    'getDefaultOperator',
    'getDefaultValue',
    'getOperators',
    'getValueEditorType',
    'getValueEditorSeparator',
    'getValueSources',
    'getInputType',
    'getValues',
    'getRuleClassname',
    'getRuleGroupClassname',
    'onAddRule',
    'onAddGroup',
    'onRemove',
    'onQueryChange',
    'showCombinatorsBetweenRules',
    'showNotToggle',
    'showCloneButtons',
    'showLockButtons',
    'resetOnFieldChange',
    'resetOnOperatorChange',
    'autoSelectField',
    'autoSelectOperator',
    'addRuleToNewGroups',
    'listsAsArrays',
    'parseNumbers',
    'validateQuery',
    'validator',
    'idGenerator',
    'context',
    'displayOnlyField',
    'showBranches',
    'bindProps'
  ], // :QueryBuilderProps
  computed: {
    qb(): any {
      return { ...this.$props, ...useQueryBuilder(this.$props, this) }
    },
    ruleGroup(): any {
      return this.qb.schema?.controls?.ruleGroup
    }
  }
})
</script>
