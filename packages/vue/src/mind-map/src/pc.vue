<template>
  <div ref="mindmap" class="tiny-mind-map"></div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/mind-map/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import MindElixir from 'mind-elixir'

export default defineComponent({
  emits: [
    'update:modelValue',
    'operation',
    'selectNode',
    'selectNewNode',
    'selectNodes',
    'unselectNode',
    'unselectNodes',
    'expandNode,',
    'beforeImport',
    'afterImport,',
    'create'
  ],
  props: [...props, 'modelValue', 'options'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: false, extendOptions: { MindElixir } })
  }
})
</script>
