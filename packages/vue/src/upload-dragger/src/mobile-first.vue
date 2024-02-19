<template>
  <div
    :class="
      m(
        'min-w-[theme(spacing.72)] min-h-[theme(spacing.36)] border border-dashed rounded',
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
import type { IUploadDraggerApi } from '@opentiny/vue-renderless/types/upload-dragger.type'

export default defineComponent({
  name: $prefix + 'UploadDragger',
  props: [...props, 'disabled', 'customClass'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IUploadDraggerApi
  }
})
</script>
