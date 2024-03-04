<template>
  <div
    :ref="rg.previewRef"
    :class="rg.outerClassName + (onlyOne ? ' .only-one' : '')"
    :data-testid="TestID.ruleGroup"
    :data-dragmonitorid="rg.dragMonitorId"
    :data-dropmonitorid="rg.dropMonitorId"
    :data-rule-group-id="rg.id"
    :data-level="rg.path.length"
    :data-path="JSON.stringify(rg.path)"
  >
    <div class="group-rule-branches">
      <!-- <div @click="rg.onCombinatorChange(rg.combinator)">{{ rg.context }}</div> -->
      <component
        v-if="!rg.schema.showCombinatorsBetweenRules && !rg.schema.independentCombinators && !onlyOne"
        :is="controls.combinatorSelector"
        :test-i-d="TestID.combinators"
        :options="rg.schema.combinators"
        :value="rg.combinator"
        :title="rg.translations.combinators.title"
        :class-name="rg.classNames.combinators"
        :handle-on-change="rg.onCombinatorChange"
        :rules="rg.ruleGroup.rules"
        :level="rg.path.length"
        :path="rg.path"
        :disabled="rg.disabled"
        :context="rg.context"
        :validation="rg.validationResult"
        :schema="rg.schema"
      ></component>
    </div>
    <div class="group-rule-body">
      <RuleGroupBodyComponents v-bind="subComponentProps"></RuleGroupBodyComponents>

      <div :ref="rg.dropRef" :class="rg.classNames.header">
        <div class="rule-group--wrap">
          <component
            v-if="rg.path.length > 0 && rg.schema.enableDragAndDrop"
            :is="controls.dragHandle"
            :ref="rg.dragRef"
            :test-i-d="TestID.dragHandle"
            :level="rg.path.length"
            :path="rg.path"
            :title="rg.translations.dragHandle.title"
            :label="rg.translations.dragHandle.label"
            :class-name="rg.classNames.dragHandle"
            :disabled="rg.disabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :schema="rg.schema"
          ></component>

          <component
            v-if="rg.schema.showNotToggle"
            :is="controls.notToggle"
            :test-i-d="TestID.notToggle"
            :class-name="rg.classNames.notToggle"
            :title="rg.translations.notToggle.title"
            :label="rg.translations.notToggle.label"
            :checked="rg.ruleGroup.not"
            :handle-on-change="rg.onNotToggleChange"
            :level="rg.path.length"
            :disabled="rg.disabled"
            :path="rg.path"
            :context="rg.context"
            :validation="rg.validationResult"
            :schema="rg.schema"
          ></component>

          <component
            :is="controls.addRuleAction"
            :test-i-d="TestID.addRule"
            :label="rg.translations.addRule.label"
            :title="rg.translations.addRule.title"
            :class-name="rg.classNames.addRule"
            :handle-on-click="rg.addRule"
            :rules="rg.ruleGroup.rules"
            :level="rg.path.length"
            :path="rg.path"
            :disabled="rg.disabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :rule-or-group="rg.ruleGroup"
            :schema="rg.schema"
          >
            <IconPlus class="primary-svg"></IconPlus> 新增条件
          </component>

          <component
            :is="controls.addGroupAction"
            :test-i-d="TestID.addGroup"
            :label="rg.translations.addGroup.label"
            :title="rg.translations.addGroup.title"
            :class-name="rg.classNames.addGroup"
            :handle-on-click="rg.addGroup"
            :rules="rg.ruleGroup.rules"
            :level="rg.path.length"
            :path="rg.path"
            :disabled="rg.disabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :rule-or-group="rg.ruleGroup"
            :schema="rg.schema"
            ><IconPlus class="primary-svg"></IconPlus> 新增子条件组</component
          >

          <component
            v-if="rg.path.length >= 1"
            :is="controls.removeGroupAction"
            :test-i-d="TestID.removeGroup"
            :label="rg.translations.removeGroup.label"
            :title="rg.translations.removeGroup.title"
            :class-name="rg.classNames.removeGroup"
            :handle-on-click="rg.removeGroup"
            :rules="rg.ruleGroup.rules"
            :level="rg.path.length"
            :path="rg.path"
            :disabled="rg.disabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :rule-or-group="rg.ruleGroup"
            :schema="rg.schema"
            ><IconDel class="primary-svg"></IconDel> 移除条件组</component
          >

          <component
            v-if="rg.schema.showCloneButtons && rg.path.length >= 1"
            :is="controls.cloneGroupAction"
            :test-i-d="TestID.cloneGroup"
            :label="rg.translations.cloneRuleGroup.label"
            :title="rg.translations.cloneRuleGroup.title"
            :class-name="rg.classNames.cloneGroup"
            :handle-on-click="rg.cloneGroup"
            :rules="rg.ruleGroup.rules"
            :level="rg.path.length"
            :path="rg.path"
            :disabled="rg.disabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :rule-or-group="rg.ruleGroup"
            :schema="rg.schema"
            ><span class="btn-icon">⧉</span></component
          >

          <component
            v-if="rg.schema.showLockButtons"
            :is="controls.lockGroupAction"
            :test-i-d="TestID.lockGroup"
            :label="rg.translations.lockGroup.label"
            :title="rg.translations.lockGroup.title"
            :class-name="rg.classNames.lockGroup"
            :handle-on-click="rg.toggleLockGroup"
            :rules="rg.ruleGroup.rules"
            :level="rg.path.length"
            :path="rg.path"
            :disabled="rg.disabled"
            :disabled-translation="rg.parentDisabled ? undefined : rg.translations.lockGroupDisabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :rule-or-group="rg.ruleGroup"
            :schema="rg.schema"
          ></component>
        </div>
      </div>
    </div>
    <div class="group-rule-action"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import { IconPlus, IconNodeOpen, IconNode, IconDel } from '@opentiny/vue-icon'
import { TestID } from '../defaults'
import { useRuleGroup } from '../hooks'
import RuleGroupBodyComponents from './RuleGroupBodyComponents.vue'

const RuleGroupProps = [
  'ruleGroup',
  'combinator',
  'rules',
  'not',
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
  'previewRef',
  'dragRef',
  'dropRef',
  'dropEffect',
  'addGroup',
  'addRule',
  'classNames',
  'cloneGroup',
  'onCombinatorChange',
  'onGroupAdd',
  'onIndependentCombinatorChange',
  'onNotToggleChange',
  'outerClassName',
  'removeGroup',
  'toggleLockGroup',
  'validationClassName',
  'validationResult'
]

export default defineComponent({
  name: 'RuleGroup',
  components: {
    RuleGroupBodyComponents,
    IconPlus: IconPlus(),
    IconDel: IconDel(),
    IconNodeOpen: IconNodeOpen(),
    IconNode: IconNode()
  },
  props: [...RuleGroupProps], // :RuleGroupProps
  setup() {
    return {
      TestID
    }
  },
  computed: {
    rg(): any {
      return { ...this.$props, ...useRuleGroup(this.$props) }
    },
    subComponentProps(): any {
      const rg = this.rg
      const [addRule, addGroup, cloneGroup, toggleLockGroup, removeGroup] = [
        rg.addRule,
        rg.addGroup,
        rg.cloneGroup,
        rg.toggleLockGroup,
        rg.removeGroup
      ].map((f) => (event: MouseEvent, context?: any) => {
        event.preventDefault()
        event.stopPropagation()
        f(event, context)
      })

      return { ...this.rg, addRule, addGroup, cloneGroup, toggleLockGroup, removeGroup, onlyOne: this.onlyOne }
    },
    controls(): any {
      const {
        schema: {
          controls: {
            dragHandle,
            combinatorSelector,
            notToggle,
            addRuleAction,
            addGroupAction,
            cloneGroupAction,
            lockGroupAction,
            removeGroupAction
          }
        }
      } = this.rg

      return {
        dragHandle,
        combinatorSelector,
        notToggle,
        addRuleAction,
        addGroupAction,
        cloneGroupAction,
        lockGroupAction,
        removeGroupAction
      }
    },
    onlyOne() {
      return this.rg.ruleGroup.rules.length <= 1
    }
  }
})
</script>
