<template>
  <transition
    name="tiny-zoom-in-top"
    @before-enter="handleMenuEnter"
    @after-leave="emitDestroy"
  >
    <div
      ref="popper"
      v-show="state.visible"
      :style="{ width: state.width + 'px' }"
      :class="state.popperClass"
      class="tiny-picker-panel tiny-time-select tiny-popper"
    >
      <tiny-scrollbar noresize wrap-class="tiny-picker-panel__content">
        <div
          class="tiny-time-select__item"
          v-for="item in state.items"
          :class="{
            selected: state.value === item.value,
            disabled: item.disabled,
            default: item.value === state.default
          }"
          :disabled="item.disabled"
          :key="item.value"
          @click="handleClick(item)"
        >
          {{ item.value }}
        </div>
      </tiny-scrollbar>
    </div>
  </transition>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/time-panel/vue'
import { $prefix, setup } from '@opentiny/vue-common'
import Scrollbar from '@opentiny/vue-scrollbar'

export default {
  name: $prefix + 'TimePanel',
  emits: ['dodestroy', 'pick'],
  components: {
    TinyScrollbar: Scrollbar
  },
  props: {
    emitter: Object
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
