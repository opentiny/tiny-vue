<template>
  <div data-tag="tiny-fluent-editor">
    <div ref="editor" id="editor"></div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/fluent-editor/vue'
import { props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import FluentEditor from '@opentiny/fluent-editor'

export default defineComponent({
  name: $prefix + 'FluentEditor',
  props: [...props, '_constants', 'disabled', 'modelValue', 'options', 'dataType', 'dataUpgrade'],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: {
        FluentEditor
      }
    })
  }
})
</script>
