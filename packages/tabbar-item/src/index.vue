<template>
  <component :is="$view" v-bind="$bind">
    <template>
      <slot></slot>
    </template>
    <template #icon="{ active }">
      <slot name="icon" :active="active"></slot>
    </template>
  </component>
</template>

<script>
import { $props, $prefix, $setup } from '@opentiny/vue-common'
import MobileTemplate from './mobile'

const template = () => {
  return MobileTemplate
}

export default {
  name: $prefix + 'TabbarItem',
  componentName: 'TinyTabbarItem',
  props: {
    ...$props,
    url: String,
    replace: Boolean,
    to: [String, Object],
    dot: Boolean,
    icon: Object,
    name: [Number, String],
    info: [Number, String],
    badge: [Number, String]
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
</script>
