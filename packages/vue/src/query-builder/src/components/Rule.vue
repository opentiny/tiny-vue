<template>
  <div
    :ref="r.dndRef"
    :data-testid="TestID.rule"
    :data-dragmonitorid="r.dragMonitorId"
    :data-dropmonitorid="r.dropMonitorId"
    :class="r.outerClassName"
    :data-rule-id="r.id"
    :data-level="r.path.length"
    :data-path="JSON.stringify(r.path)"
  >
    <RuleComponents v-bind="RuleComponentProps"></RuleComponents>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import { TestID } from '../defaults'
import { useRule } from '../hooks'
import RuleComponents from './RuleComponents.vue'

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
  'onlyOne',
  'dropEffect'
]

export default defineComponent({
  name: 'Rule',
  components: {
    RuleComponents
  },
  props: [...RulePropsParam], // :RuleProps
  setup() {
    return {
      TestID
    }
  },
  computed: {
    r(): any {
      return { ...this.$props, ...useRule(this.$props) }
    },
    RuleComponentProps(): any {
      const r = this.r
      const [cloneRule, toggleLockRule, removeRule, clearData] = [
        r.cloneRule,
        r.toggleLockRule,
        r.removeRule,
        r.clearData
      ].map((f) => (event: MouseEvent) => {
        event.preventDefault()
        event.stopPropagation()
        f()
      })

      return { ...this.r, cloneRule, toggleLockRule, removeRule, clearData }
    }
  }
})
</script>
