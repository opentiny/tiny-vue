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

<style lang="less">
.map-container {
  .map-canvas {
    span {
      word-break: break-all;
    }
    me-root {
      me-tpc {
        #input-box {
          border-radius: var(--root-radius);
        }
      }
      .selected {
        #input-box {
          box-shadow: 0 0 0 4px var(--selected);
          border: unset;
        }
      }
    }
  }
  me-main > me-wrapper > me-parent > me-tpc {
    border: unset;
    box-shadow: unset;
    #input-box {
      border-radius: var(--main-radius);
      box-shadow: 0 0 0 4px var(--selected);
      border: unset;
    }
  }
}
</style>
