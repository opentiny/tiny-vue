<template>
  <tiny-recycle-scroller ref="scroller" class="tiny-dynamic-scroller" :items="state.itemsWithSize" :min-item-size="minItemSize" :direction="direction" :key-field="keyField" :list-tag="listTag" :item-tag="itemTag" v-bind="$attrs" @resize="onScrollerResize" @visible="onScrollerVisible">
    <template #default="{ item: itemWithSize, index, active }">
      <slot v-bind="{ item: itemWithSize.item, index, active, itemWithSize }" />
    </template>
    <template #before>
      <slot name="before" />
    </template>
    <template #after>
      <slot name="after" />
    </template>
    <template #empty>
      <slot name="empty" />
    </template>
  </tiny-recycle-scroller>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/dynamic-scroller/vue'
import { props, setup, defineComponent, emitter } from '@opentiny/vue-common'
import RecycleScroller from '@opentiny/vue-recycle-scroller'

export default defineComponent({
  inheritAttrs: false,
  emits: ['resize', 'visible'],
  props: [...props, 'items', 'keyField', 'direction', 'listTag', 'itemTag', 'minItemSize'],
  components: {
    TinyRecycleScroller: RecycleScroller
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api, extendOptions: { emitter } })
  }
})
</script>
