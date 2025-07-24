<template>
  <div class="tiny-space" :style="api.getSpaceStyle()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import { renderless } from '@opentiny/vue-renderless/space/vue'
import type { SpaceApi } from '@opentiny/vue-renderless/types/space.type'

export default defineComponent({
  name: 'TinySpace',
  props: {
    size: [String, Number, Array],
    align: String,
    justify: String,
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
  setup(props) {
    const api: SpaceApi = renderless({ props })

    return {
      api
    }
  }
})
</script>
