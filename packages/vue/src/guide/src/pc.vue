<template>
  <div class="tiny-guide">
    <slot name="main"></slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/guide/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/guide/index.less'
import Shepherd from 'shepherd.js'
import { offset } from '@floating-ui/dom'

export default defineComponent({
  props: [
    ...props,
    'showStep',
    'domData',
    'mainAxis',
    'crossAxis',
    'alignmentAxis',
    'popPosition',
    'modalOverlayOpeningPadding',
    'modalOverlayOpeningRadius',
    'arrow',
    'lightClass',
    'width',
    'height'
  ],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: {
        Shepherd,
        offset
      }
    })
  }
})
</script>
