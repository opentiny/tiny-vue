<template>
  <div
    data-tag="tiny-tabbar"
    :class="[
      'z-10 flex box-content w-full h-14 bg-color-bg-1 fixed bottom-0 left-0',
      { 'border-t border-color-border border-solid': border },
      { unfit: !state.fit }
    ]"
    ref="tabbar"
  >
    <slot>
      <tabbar-item v-for="(item, index) in itemList" :key="index" v-bind="item"></tabbar-item>
    </slot>
  </div>
</template>

<script lang="ts">
import { setup, $prefix, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tabbar/vue'
import TabbarItem from '@opentiny/vue-tabbar-item'

export default defineComponent({
  name: $prefix + 'Tabbar',
  componentName: 'Tabbar',
  props: {
    activeColor: String,
    border: {
      type: Boolean,
      default: true
    },
    inactiveColor: String,
    modelValue: {
      type: [Number, String],
      default: 0
    },
    showNumber: {
      type: Number,
      default: 5
    },
    itemList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    TabbarItem
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
