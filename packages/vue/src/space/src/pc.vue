<template>
  <div
    data-tag="tiny-space"
    :style="[
      state.gapStyle,
      {
        display: 'flex',
        flexDirection: direction || 'row',
        alignItems: align || 'flex-start',
        justifyContent: justify || 'flex-start',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...customStyle
      }
    ]"
    :class="customClass"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, props, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/space/vue'
import type { ISpaceApi } from '@opentiny/vue-renderless/types/space.type'

export default defineComponent({
  name: 'TinySpace',
  props: [...props, 'size', 'direction', 'align', 'justify', 'wrap', 'order', 'customClass', 'customStyle'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ISpaceApi
  }
})
</script>
