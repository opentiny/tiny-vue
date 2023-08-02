<template>
  <div data-tag="tiny-tabs">
    <div class="hidden">
      <slot></slot>
    </div>
    <tab-bar ref="tabbar"></tab-bar>
    <tab-panel data-tag="tiny-tab-panel" class="w-full" :item="state.currentItem" :key="state.key"></tab-panel>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/tabs-mf/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import TabBar from './mobile-first/tab-bar.vue'
import TabPanel from './mobile-first/tab-panel.vue'

export default defineComponent({
  props: [...props, 'activeName', 'modelValue', 'size', 'withClose', 'withAdd', 'beforeLeave'],
  emits: ['update:activeName', 'update:modelValue'],
  components: { TabBar, TabPanel },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
