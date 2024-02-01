<template>
  <div data-tag="tiny-tabs">
    <div data-tag="tiny-tabs-hidden" class="hidden">
      <slot></slot>
    </div>
    <tab-bar ref="tabbar"></tab-bar>
    <keep-alive>
      <template v-for="item in state.items">
        <template v-if="item === state.currentItem">
          <tab-panel data-tag="tiny-tab-panel" class="w-full" :item="item" :key="item.name"></tab-panel>
        </template>
      </template>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/tabs-mf/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import TabBar from './mobile-first/tab-bar.vue'
import TabPanel from './mobile-first/tab-panel.vue'
import type { ITabsApi } from '@opentiny/vue-renderless/types/tabs.type'

export default defineComponent({
  props: [...props, 'activeName', 'modelValue', 'size', 'withClose', 'withAdd', 'beforeLeave', 'separator'],
  emits: ['update:activeName', 'update:modelValue'],
  components: { TabBar, TabPanel },
  setup(props, context): any {
    return setup({ props, context, renderless, api }) as unknown as ITabsApi
  }
})
</script>
