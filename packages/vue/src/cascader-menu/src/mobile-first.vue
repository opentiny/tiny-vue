<template>
  <tiny-scrollbar
    data-tag="tiny-cascader-menu"
    :id="state.menuId"
    role="menu"
    ref="cascaderMenu"
    :class="m('min-w-[theme(spacing.54)] box-border text-color-text-primary pt-1')"
    tag="div"
    wrap-class="overflow-auto h-auto pb-1.5 max-h-[theme(spacing.72)]"
    view-class="relative min-h-full m-0  list-none box-border pb-1 "
  >
    <div
      v-if="state.isEmpty"
      data-tag="tiny-cascader-menu__empty-text"
      class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center text-color-text-placeholder"
    >
      {{ t('ui.cascader.noData') }}
    </div>
    <template v-else>
      <cascader-node
        v-for="(node, nodeIndex) in nodes"
        tiny_mode="mobile-first"
        :key="node.uid"
        :node="node"
        :node-id="`${state.menuId}-${nodeIndex}`"
        :data-haspopup="node.hasChildren"
        :data-owns="node.hasChildren ? state.menuId : null"
      ></cascader-node>
    </template>
  </tiny-scrollbar>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/cascader-menu/vue'
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import Scrollbar from '@opentiny/vue-scrollbar'
import CascaderNode from '@opentiny/vue-cascader-node'

export default defineComponent({
  name: $prefix + 'CascaderMenu',
  components: {
    TinyScrollbar: Scrollbar,
    CascaderNode
  },
  props: {
    ...$props,
    nodes: {
      type: Array,
      required: true
    },
    index: Number
  },
  inject: ['panel', 'cascaderRoot'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
