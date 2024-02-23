<template>
  <div
    data-tag="tiny-cascader-panel"
    :class="['flex rounded text-xs', border ? 'border border-solid border-color-border' : '']"
    @keydown="handleKeyDown"
  >
    <cascader-menu
      v-for="(menu, index) in state.menus"
      tiny_mode="mobile-first"
      :index="index"
      :key="index"
      :nodes="menu"
    ></cascader-menu>
  </div>
</template>

<script>
import { $prefix, setup, $props, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/cascader-panel/vue'
import CascaderMenu from '@opentiny/vue-cascader-menu'

export default defineComponent({
  name: $prefix + 'CascaderPanel',
  components: {
    CascaderMenu
  },
  inheritAttrs: false,
  emits: ['update:modelValue', 'change', 'close', 'expand-change', 'active-item-change'],
  props: {
    ...$props,
    modelValue: {},
    options: Array,
    props: Object,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },
  inject: ['cascaderRoot'],
  provide() {
    return {
      panel: this
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
