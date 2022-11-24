<template>
  <transition name="tiny-mobile-alert-fade">
    <div
      v-if="state.show"
      :class="[
        'tiny-mobile-alert',
        'tiny-mobile-alert--' + type,
        'tiny-mobile-alert--' + size,
        'is-center'
      ]"
    >
      <component
        v-if="showIcon"
        :is="state.getIcon"
        class="tiny-mobile-alert__icon"
      />
      <div :class="['tiny-mobile-alert__content', { 'is-hideicon': !showIcon }]">
        <slot>{{ description }}</slot>
      </div>
      <icon-close
        v-if="!closeText && closable"
        @click="close"
        class="tiny-mobile-alert__icon tiny-mobile-alert__close"
      ></icon-close>
      <span
        v-else-if="closeText && closable"
        @click="close"
        class="is-custom"
        >{{ closeText }}</span
      >
    </div>
  </transition>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/alert/vue'
import { props, setup } from '@opentiny/vue-common'
import {
  iconClose,
  iconSuccess,
  iconError,
  iconHelp,
  iconWarning
} from '@opentiny/vue-icon'
import '@opentiny/vue-theme-mobile/alert/index.css'

export default {
  props: [
    ...props,
    'icon',
    'type',
    'size',
    'description',
    'closable',
    'showIcon',
    'closeText',
    'duration'
  ],
  components: {
    IconClose: iconClose(),
    IconSuccess: iconSuccess(),
    IconError: iconError(),
    IconHelp: iconHelp(),
    IconWarning: iconWarning()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
