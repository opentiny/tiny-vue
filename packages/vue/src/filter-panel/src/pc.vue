<template>
  <div class="tiny-filter-panel">
    <tiny-popover
      ref="popover"
      v-model="state.visible"
      :placement="placement"
      :visible-arrow="false"
      :popper-class="popperClass + ' tiny-filter-panel__popover'"
      :append-to-body="popperAppendToBody"
      trigger="manual"
      @show="popoverShow"
      @hide="popoverHide"
    >
      <div>
        <slot></slot>
      </div>
      <template #reference>
        <tiny-filter-box
          ref="filterBox"
          @click="togglePanel"
          @handle-clear="handleClear"
          :show-close="clearable"
          :disabled="disabled"
          :label="label"
          :tip="tip"
          :value="value"
          :drop-down-visible="state.visible"
        ></tiny-filter-box>
      </template>
    </tiny-popover>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/filter-panel/vue'
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import TinyFilterBox from '@opentiny/vue-filter-box'
import TinyPopover from '@opentiny/vue-popover'

export default defineComponent({
  name: $prefix + 'FilterPanel',
  emits: ['handle-clear', 'visible-change'],
  components: {
    TinyPopover,
    TinyFilterBox
  },
  props: {
    ...$props,
    label: String,
    value: String,
    tip: String,
    popperClass: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
