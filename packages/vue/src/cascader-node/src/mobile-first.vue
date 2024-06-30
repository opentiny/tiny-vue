<template>
  <div
    :id="nodeId"
    role="menuitem"
    data-tag="tiny-cascader-node"
    @click="handleNodeClick"
    :class="
      m(
        gcls('cascader-node'),
        gcls(!state.isDisabled && state.config.checkStrictly ? 'is-selectable' : ''),
        gcls(!state.isDisabled && state.inActivePath ? 'in-active-path' : ''),
        gcls(!state.isDisabled && state.inCheckedPath ? 'in-checked-path' : ''),
        gcls(!state.isDisabled && state.isChecked ? 'in-active' : ''),
        gcls(state.isDisabled ? 'cascader-node_disabled' : ''),
        gcls(state.isDisabled ? 'in-active_disabled' : '')
      )
    "
  >
    <span :class="[node ? gcls('cascader-node__label_disabled') : '']">{{ state.nodeLabel }}</span>
    <icon-loading v-if="node.loading" :class="gcls('cascader-node__postfix')"></icon-loading>
    <icon-chevron-right
      v-else-if="!state.isLeaf"
      :class="
        m(
          gcls('cascader-node__postfix'),
          gcls(!state.isDisabled && state.inActivePath ? 'node-active' : ''),
          gcls(!state.isDisabled && state.inCheckedPath ? 'node-active' : ''),
          gcls(!state.isDisabled && state.isChecked ? 'node-active' : '')
        )
      "
      >></icon-chevron-right
    >
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/cascader-node/vue'
import { $prefix, setup, $props, defineComponent } from '@opentiny/vue-common'
import { IconLoading, IconChevronRight } from '@opentiny/vue-icon'
import { classes } from './token'

export default defineComponent({
  name: $prefix + 'CascaderNode',
  components: {
    IconLoading: IconLoading(),
    IconChevronRight: IconChevronRight()
  },
  inheritAttrs: false,
  emits: ['expand', 'update:modelValue', 'expand-change', 'active-item-change', 'change'],
  inject: ['panel'],
  props: {
    ...$props,
    node: {
      required: true
    },
    nodeId: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
