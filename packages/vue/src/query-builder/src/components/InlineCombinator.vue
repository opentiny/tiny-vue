<template>
  <div :class="standardClassnames.betweenRules" :data-testid="TestID.inlineCombinator">
    <component :is="CombinatorSelectorComponent" v-bind="otherProps" :test-i-d="TestID.combinators"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'

import { standardClassnames, TestID } from '../defaults'
import ValueSelector from './ValueSelector.vue'

export default defineComponent({
  props: [
    'component',
    'independentCombinators',
    'rules',
    'options',
    'value',
    'handleOnChange',
    'className',
    'path',
    'level',
    'title',
    'disabled',
    'context',
    'validation',
    'testID',
    'schema'
  ],
  setup() {
    return {
      standardClassnames,
      TestID
    }
  },
  computed: {
    otherProps() {
      const otherProps = { ...this.$props }
      delete otherProps.component
      delete otherProps.independentCombinators

      return otherProps
    },
    CombinatorSelectorComponent() {
      return ValueSelector
    }
  }
})
</script>
