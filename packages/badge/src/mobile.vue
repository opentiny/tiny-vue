<template>
  <div class="tiny-mobile-badge">
    <slot />
    <div
      v-if="!hidden && (value > 0 || isDot)"
      class="tiny-mobile-badge__content"
      :class="[
        {
          'is-dot': isDot,
          'is-fixed': isFixed,
          'is-mini': isMini
        },
        value < 10 ? 'is-circle' : '',
        type ? 'tiny-mobile-badge--' + type : ''
      ]"
    >
      <span v-if="!isDot">
        <slot name="content">
          <a
            :href="state.href"
            :target="target"
            rel="noopener noreferrer"
            class="tiny-mobile-badge__link"
            >{{ state.content }}</a
          >
        </slot>
      </span>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/badge/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/badge/index.css'

export default {
  props: [
    ...props,
    'isDot',
    'isFixed',
    'isMini',
    'hidden',
    'max',
    'type',
    'value',
    'modelValue',
    'href',
    'target'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
