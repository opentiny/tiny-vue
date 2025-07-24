<template>
  <tiny-dropdown-item @click.native="itemClick">
    <slot></slot>
  </tiny-dropdown-item>
</template>

<script lang="ts">
import { $prefix, $props, defineComponent } from '@opentiny/vue-common'
import DropdownItem from '@opentiny/vue-dropdown-item'

export default defineComponent({
  name: $prefix + 'TabDropdownItem',
  components: {
    TinyDropdownItem: DropdownItem
  },
  props: {
    ...$props,
    itemClick: { type: Function }
  }
})
</script>
