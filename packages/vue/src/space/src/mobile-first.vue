<template>
  <div
    data-tag="tiny-space"
    :class="
      m(
        gcls('base'),
        gcls(`direction-${direction || 'row'}`),
        gcls(`align-${align || 'start'}`),
        gcls(`justify-${justify || 'start'}`),
        gcls(`wrap-${wrap ? 'true' : 'false'}`),
      )
    "
    :style="state.gapStyle"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, setup, props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/space/vue'
import { classes } from './token'

export default defineComponent({
  name: 'TinySpace',
  props: [...props, 'size', 'direction', 'align', 'justify', 'wrap', 'order'],
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
