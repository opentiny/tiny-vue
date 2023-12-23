<template>
  <canvas ref="canvas" />
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/mind-map/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { fabric } from 'fabric'

export default defineComponent({
  emits: ['update:modelValue'],
  props: [...props, 'modelValue', 'theme'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: false, extendOptions: { ...fabric } })
  }
})
</script>
