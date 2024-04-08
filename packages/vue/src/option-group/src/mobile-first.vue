<template>
  <div
    class="relative m-0 p-0 pb-3 mb-3 border-b border-b-color-bg-2 last:border-none last:pb-0 last:mb-0"
    v-show="state.visible"
  >
    <div class="relative pl-2 text-xs text-color-text-secondary leading-5">
      {{ label }}
    </div>
    <div>
      <div class="m-0 p-0">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/option-group/vue'
import { setup, props, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'label', 'disabled'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
