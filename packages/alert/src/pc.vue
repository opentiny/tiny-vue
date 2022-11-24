<template>
  <transition name="tiny-transition-alert-fade">
    <div
      v-if="state.show"
      :class="[
        'tiny-alert',
        'tiny-alert--' + type,
        'tiny-alert--' + size,
        { 'is-center': center }
      ]"
    >
      <component
        v-if="showIcon"
        :is="state.getIcon"
        class="tiny-svg-size tiny-alert__icon"
      />
      <div class="tiny-alert__content">
        <div v-if="size === 'large'" class="tiny-alert__title">
          <slot name="title">{{ state.getTitle }}</slot>
        </div>
        <div
          :class="[
            'tiny-alert__description',
            {
              'is-hide': size === 'large' && !description && !slots.description
            }
          ]"
        >
          <slot name="description">{{ description }}</slot>
        </div>
        <div v-if="size === 'large'" class="tiny-alert__opration">
          <slot></slot>
        </div>
      </div>
      <icon-close
        v-if="!closeText && closable"
        @click="close"
        class="tiny-svg-size tiny-alert__icon tiny-alert__close"
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
import '@opentiny/vue-theme/alert/index.css'

export default {
  props: [
    ...props,
    'icon',
    'type',
    'size',
    'description',
    'title',
    'closable',
    'center',
    'showIcon',
    'closeText'
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
