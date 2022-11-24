<template>
  <transition name="tiny-top-box-fade" @after-leave="handleAfterLeave">
    <div
      :class="[
        'tiny-top-box',
        state.type && !state.iconClass ? `tiny-top-box--${state.type}` : '',
        state.center ? 'is-center' : '',
        state.showClose ? 'is-closable' : '',
        state.customClass
      ]"
      :style="state.positionStyle"
      v-show="state.visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alert"
    >
      <component
        :is="state.iconClass"
        v-if="state.iconClass"
        class="tiny-svg-size"
      />
      <component
        :is="state.typeClass"
        v-else
        class="tiny-svg-size tiny-top-box__icon"
      />
      <slot>
        <p v-if="!state.dangerouslyUseHTMLString" class="tiny-top-box__content">
          {{ state.message }}
        </p>
        <p v-else v-html="state.message" class="tiny-top-box__content"></p>
      </slot>
      <div
        v-if="state.buttons && state.buttons.length"
        class="tiny-top-box__toolbar"
      >
        <tiny-button
          v-for="(item, key) in state.buttons"
          :key="key"
          :type="item.type || ''"
          @click="item.onClick"
          >{{ item.text }}</tiny-button
        >
      </div>
      <icon-close
        v-if="state.showClose"
        @click="close"
        class="tiny-svg-size tiny-top-box__closeBtn"
      ></icon-close>
    </div>
  </transition>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/top-box/vue'
import { props, setup } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import {
  iconClose,
  iconSuccess,
  iconError,
  iconHelp,
  iconWarning,
  iconInfo
} from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button,
    IconClose: iconClose(),
    IconSuccess: iconSuccess(),
    IconError: iconError(),
    IconHelp: iconHelp(),
    IconWarning: iconWarning(),
    IconInfo: iconInfo()
  },
  props: [...props, 'emitter'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
