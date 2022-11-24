<template>
  <button
    class="tiny-button"
    @click="handleClick"
    :disabled="state.buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'tiny-button--' + type : '',
      size ? 'tiny-button--' + size : '',
      {
        'is-disabled': state.buttonDisabled,
        'is-loading': loading,
        'is-plain': state.plain,
        'is-round': round,
        'is-circle': circle,
        'is-icon': icon && !loading && (text || $slots.default)
      }
    ]"
    :tabindex="tabindex"
    v-bind="a($attrs, ['class', 'style'], true)"
  >
    <icon-loading v-if="loading" class="tiny-icon-loading tiny-svg-size" />
    <component v-if="icon && !loading" :is="icon" :class="{ 'is-text': text || $slots.default }" />
    <slot>
      <span>{{ text }}</span>
    </slot>
  </button>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/button/vue'
import { props, setup } from '@opentiny/vue-common'
import { iconLoading } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/button/index.css'

export default {
  emits: ['click', 'hook-updated'],
  props: [...props, 'type', 'text', 'size', 'icon', 'resetTime', 'nativeType', 'loading', 'disabled', 'plain', 'autofocus', 'round', 'circle', 'tabindex'],
  components: { IconLoading: iconLoading() },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
