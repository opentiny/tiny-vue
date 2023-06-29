<template>
  <div
    :class="
      m(
        'min-w-[18.75rem] min-h-[8.75rem] border border-dashed rounded',
        state.dragover ? 'border-color-brand' : 'border-color-none-hover',
        customClass
      )
    "
    @drop.prevent="onDrop"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="state.dragover = false"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent, props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/upload-dragger/vue'

export default defineComponent({
  name: $prefix + 'UploadDragger',
  props: [...props, 'disabled', 'customClass'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
