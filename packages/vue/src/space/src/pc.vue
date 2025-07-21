<template>
  <div :style="spaceStyle">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { renderless } from '@opentiny/vue-renderless/space/vue'
import type { SpaceProps } from '@opentiny/vue-renderless/types/space.type'

export default defineComponent({
  name: 'TinySpace',
  props: {
    size: {
      type: [String, Number, Array],
      default: 'small'
    },
    align: {
      type: String,
      default: 'stretch'
    },
    justify: {
      type: String,
      default: 'start'
    },
    direction: {
      type: String,
      default: 'row'
    },
    wrap: {
      type: Boolean,
      default: false
    },
    order: {
      type: Array,
      default: () => []
    }
  },
  setup(props: SpaceProps, context) {
    const api = renderless(props, context)

    const spaceStyle = api.getSpaceStyle

    return {
      spaceStyle
    }
  }
})
</script>
