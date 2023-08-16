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
        :testID="TestID.combinators"
        :options="rg.schema.combinators"
        :value="rg.combinator"
        :title="rg.translations.combinators.title"
        :className="rg.classNames.combinators"
        :handleOnChange="rg.onCombinatorChange"
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
            :testID="TestID.dragHandle"
            :level="rg.path.length"
            :path="rg.path"
            :title="rg.translations.dragHandle.title"
            :label="rg.translations.dragHandle.label"
            :className="rg.classNames.dragHandle"
            :disabled="rg.disabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :schema="rg.schema"
          ></component>

          <component
            v-if="rg.schema.showNotToggle"
            :is="controls.notToggle"
            :testID="TestID.notToggle"
            :className="rg.classNames.notToggle"
            :title="rg.translations.notToggle.title"
            :label="rg.translations.notToggle.label"
            :checked="rg.ruleGroup.not"
            :handleOnChange="rg.onNotToggleChange"
            :level="rg.path.length"
            :disabled="rg.disabled"
            :path="rg.path"
            :context="rg.context"
            :validation="rg.validationResult"
            :schema="rg.schema"
          ></component>

          <component
            :is="controls.addRuleAction"
            :testID="TestID.addRule"
            :label="rg.translations.addRule.label"
            :title="rg.translations.addRule.title"
            :className="rg.classNames.addRule"
            :handleOnClick="rg.addRule"
            :rules="rg.ruleGroup.rules"
            :level="rg.path.length"
            :path="rg.path"
            :disabled="rg.disabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :ruleOrGroup="rg.ruleGroup"
            :schema="rg.schema"
          >
            <IconPlus class="primary-svg"></IconPlus> 新增条件
          </component>

          <component
            :is="controls.addGroupAction"
            :testID="TestID.addGroup"
            :label="rg.translations.addGroup.label"
            :title="rg.translations.addGroup.title"
            :className="rg.classNames.addGroup"
            :handleOnClick="rg.addGroup"
            :rules="rg.ruleGroup.rules"
            :level="rg.path.length"
            :path="rg.path"
            :disabled="rg.disabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :ruleOrGroup="rg.ruleGroup"
            :schema="rg.schema"
            ><IconPlus class="primary-svg"></IconPlus> 新增子条件组</component
          >

          <component
            v-if="rg.path.length >= 1"
            :is="controls.removeGroupAction"
            :testID="TestID.removeGroup"
            :label="rg.translations.removeGroup.label"
            :title="rg.translations.removeGroup.title"
            :className="rg.classNames.removeGroup"
            :handleOnClick="rg.removeGroup"
            :rules="rg.ruleGroup.rules"
            :level="rg.path.length"
            :path="rg.path"
            :disabled="rg.disabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :ruleOrGroup="rg.ruleGroup"
            :schema="rg.schema"
            ><IconDel class="primary-svg"></IconDel> 移除条件组</component
          >

          <component
            v-if="rg.schema.showCloneButtons && rg.path.length >= 1"
            :is="controls.cloneGroupAction"
            :testID="TestID.cloneGroup"
            :label="rg.translations.cloneRuleGroup.label"
            :title="rg.translations.cloneRuleGroup.title"
            :className="rg.classNames.cloneGroup"
            :handleOnClick="rg.cloneGroup"
            :rules="rg.ruleGroup.rules"
            :level="rg.path.length"
            :path="rg.path"
            :disabled="rg.disabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :ruleOrGroup="rg.ruleGroup"
            :schema="rg.schema"
            ><span class="btn-icon">⧉</span></component
          >

          <component
            v-if="rg.schema.showLockButtons"
            :is="controls.lockGroupAction"
            :testID="TestID.lockGroup"
            :label="rg.translations.lockGroup.label"
            :title="rg.translations.lockGroup.title"
            :className="rg.classNames.lockGroup"
            :handleOnClick="rg.toggleLockGroup"
            :rules="rg.ruleGroup.rules"
            :level="rg.path.length"
            :path="rg.path"
            :disabled="rg.disabled"
            :disabledTranslation="rg.parentDisabled ? undefined : rg.translations.lockGroupDisabled"
            :context="rg.context"
            :validation="rg.validationResult"
            :ruleOrGroup="rg.ruleGroup"
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
