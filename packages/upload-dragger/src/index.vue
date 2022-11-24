<template>
  <div
    class="tiny-upload-dragger"
    :class="{ 'is-dragover': state.dragover }"
    @drop.prevent="onDrop"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="state.dragover = false"
  >
    <slot></slot>
  </div>
</template>

<script>
import { $prefix, setup } from '@opentiny/vue-common'
import {
  renderless,
  api
} from '@opentiny/vue-renderless/upload-dragger/vue'

export default {
  name: $prefix + 'UploadDragger',
  props: {
    disabled: Boolean
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
