<template>
  <div :class="rg.classNames.body">
    <div v-for="(r, idx) in rg.ruleGroup.rules" :key="getFields[idx].key">
      <component
        :is="controls.inlineCombinator"
        v-if="idx > 0 && !rg.schema.independentCombinators && rg.schema.showCombinatorsBetweenRules"
        :options="rg.schema.combinators"
        :value="rg.combinator"
        :title="rg.translations.combinators.title"
        :className="rg.classNames.combinators"
        :handleOnChange="rg.onCombinatorChange"
        :rules="rg.ruleGroup.rules"
        :level="rg.path.length"
        :context="rg.context"
        :validation="rg.validationResult"
        :component="controls.combinatorSelector"
        :path="getFields[idx].thisPath"
        :disabled="rg.disabled"
        :independentCombinators="rg.schema.independentCombinators"
        :schema="rg.schema"
      ></component>

      <component
        :is="controls.inlineCombinator"
        v-if="typeof r === 'string'"
        :options="rg.schema.combinators"
        :value="r"
        :title="rg.translations.combinators.title"
        :className="rg.classNames.combinators"
        :handleOnChange="(val) => rg.onIndependentCombinatorChange(val, idx)"
        :rules="rg.ruleGroup.rules"
        :level="rg.path.length"
        :context="rg.context"
        :validation="rg.validationResult"
        :component="CombinatorSelectorControlElement"
        :path="getFields[idx].thisPath"
        :disabled="getFields[idx].thisPathDisabled"
        :independentCombinators="rg.schema.independentCombinators"
        :schema="rg.schema"
      ></component>

      <component
        :is="controls.ruleGroup"
        v-else-if="'rules' in r"
        :id="r.id"
        :schema="rg.schema"
        :actions="rg.actions"
        :path="getFields[idx].thisPath"
        :translations="rg.translations"
        :ruleGroup="r"
        :rules="r.rules"
        :combinator="'combinator' in r ? r.combinator : undefined"
        :not="!!r.not"
        :disabled="getFields[idx].thisPathDisabled"
        :parentDisabled="rg.parentDisabled || rg.disabled"
        :context="rg.context"
      ></component>

      <component
        :is="controls.rule"
        v-else
        :id="r.id"
        :rule="r"
        :field="r.field"
        :operator="r.operator"
        :value="r.value"
        :valueSource="r.valueSource"
        :schema="rg.schema"
        :actions="rg.actions"
        :path="getFields[idx].thisPath"
        :disabled="getFields[idx].thisPathDisabled"
        :parentDisabled="rg.parentDisabled || rg.disabled"
        :translations="rg.translations"
        :context="rg.context"
        :onlyOne="onlyOne"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import { TestID } from '../defaults'
import { pathsAreEqual } from '../utils'

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
  'onlyOne',
  'validationResult'
]

export default defineComponent({
  name: 'RuleGroupBodyComponents',
  props: [...RuleGroupProps], // :RuleGroupProps
  setup() {
    return {
      TestID
    }
  },
  computed: {
    rg(): any {
      return { ...this.$props }
    },
    controls(): any {
      const {
        schema: {
          controls: { inlineCombinator, ruleGroup, rule }
        }
      } = this.rg

      return { inlineCombinator, ruleGroup, rule }
    },
    getFields() {
      return this.rg.ruleGroup.rules.map((r: any, idx: number) => {
        const rg = this.rg
        const thisPath = [...rg.path, idx]
        const thisPathDisabled =
          rg.disabled ||
          (typeof r !== 'string' && r.disabled) ||
          rg.schema.disabledPaths.some((p: any) => pathsAreEqual(thisPath, p))
        const key = typeof r === 'string' ? [...thisPath, r].join('-') : r.id

        return { thisPathDisabled, key, thisPath }
      })
    }
  }
})
</script>
