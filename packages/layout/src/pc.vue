<template>
  <component :is="tag" class="tiny-layout">
    <slot></slot>
  </component>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/layout/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'tag'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
