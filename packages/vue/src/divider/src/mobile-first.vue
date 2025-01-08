<template>
  <div
    data-tag="aui-divider"
    :style="state.rootStyle"
    :class="
      m(
        'overflow-hidden relative',
        vertical ? 'inline-block w-px border-l' : 'h-auto flex items-center justify-center w-full',
        gcls('status-' + status)
      )
    "
  >
    <div
      v-if="!vertical"
      class="h-px w-full border-t"
      :style="state.lineStyle"
      :class="[gcls('status-' + status)]"
    ></div>
    <span v-if="!vertical" ref="text" class="absolute py-0 px-3.5 bg-white" :style="state.textStyle">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/divider/vue'
import { setup, props, defineComponent } from '@opentiny/vue-common'
import { classes } from './token'

export default defineComponent({
  props: [
    ...props,
    'type',
    'vertical',
    'lineColor',
    'textPosition',
    'status',
    'margin',
    'offset',
    'fontSize',
    'height'
  ],
  setup(props, context): any {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
