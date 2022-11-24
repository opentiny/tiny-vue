<template>
  <div :class="['tiny-cascader-panel', border && 'is-bordered']" @keydown="handleKeyDown">
    <cascader-menu v-for="(menu, index) in state.menus" :index="index" :key="index" :nodes="menu"></cascader-menu>
  </div>
</template>

<script>
import { $prefix, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/cascader-panel/vue'
import CascaderMenu from '@opentiny/vue-cascader-menu'

export default {
  name: $prefix + 'CascaderPanel',
  componentName: $prefix + 'CascaderPanel',
  components: {
    CascaderMenu
  },
  inheritAttrs: false,
  props: {
    modelValue: {},
    options: Array,
    props: Object,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },
  provide() {
    return {
      panel: this
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
