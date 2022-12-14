<template>
  <div>
    <transition
      :name="state.transitionName"
      @after-enter="opened"
      @after-leave="closed"
    >
      <div
        v-show="modelValue"
        ref="popup"
        class="tiny-popup"
        :style="state.style"
        @click="$emit('click')"
        :class="[
          round ? 'tiny-popup--round' : '',
          position ? 'tiny-popup--' + position : '',
          popupClass
        ]"
      >
        <slot></slot>
        <icon-close
          class="tiny-popup__close-icon tiny-popup__close-icon--top-right"
          v-if="closeable"
          fill="#c8c9cc"
          tabindex="0"
          @click="close"
        ></icon-close>
      </div>
    </transition>
    <transition name="tiny-fade">
      <div
        v-show="state.opened && overlay"
        :style="state.overlayStyle"
        :class="overlayClass"
        class="tiny-overlay"
        @click="clickOverlay"
      >
        <slot name="overlay"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { setup, $prefix } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/popup/vue'
import { iconClose } from '@opentiny/vue-icon'

const $constants = {
  OVERFLOWHIDDEN: 'tiny-overflow-hidde'
}

export default {
  name: $prefix + 'Popup',
  emits: [
    'open',
    'close',
    'update:modelValue',
    'click-overlay',
    'closed',
    'opened',
    'click'
  ],
  components: {
    IconClose: iconClose()
  },
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    closeIcon: {
      type: String,
      default: 'cross'
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    closeable: {
      type: Boolean,
      default: true
    },
    duration: [Number, String],
    lazyRender: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    modelValue: Boolean,
    overlay: {
      type: Boolean,
      default: true
    },
    overlayClass: String,
    overlayStyle: Object,
    popupClass: String,
    popupStyle: Object,
    position: {
      type: String,
      default: 'center'
    },
    round: Boolean,
    safeAreaInsetBottom: Boolean,
    transition: String,
    zIndex: [Number, String]
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
