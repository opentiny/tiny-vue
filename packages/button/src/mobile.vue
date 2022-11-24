<template>
  <button
    class="tiny-mobile-button"
    @click="handleClick"
    :disabled="state.buttonDisabled || loading"
    :type="nativeType"
    :class="[
      type ? 'tiny-mobile-button--' + type : '',
      size ? 'tiny-mobile-button--' + size : '',
      {
        'is-disabled': state.buttonDisabled,
        'is-loading': loading,
        'is-plain': state.plain,
        'is-round': round
      }
    ]"
    v-bind="a($attrs, ['class', 'style'], true)"
  >
    <icon-loading v-if="loading" class="tiny-icon-loading" />
    <component v-if="icon && !loading" :is="icon" class="tiny-icon is-icon" />
    <slot>
      <span>{{ text }}</span>
    </slot>
  </button>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/button/vue'
import { props, setup } from '@opentiny/vue-common'
import { iconLoading } from '@opentiny/vue-icon'
import '@opentiny/vue-theme-mobile/button/index.css'

export default {
  inheritAttrs: false,
  emits:  ['hook-updated', 'click'],
  props: [
    ...props,
    'type',
    'text',
    'size',
    'icon',
    'resetTime',
    'nativeType',
    'loading',
    'disabled',
    'plain',
    'round'
  ],
  components: { IconLoading: iconLoading() },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
