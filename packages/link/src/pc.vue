<template>
  <a
    :class="[
      'tiny-link',
      type ? `tiny-link--${type}` : '',
      state.disabled && 'is-disabled',
      underline && !state.disabled && 'is-underline'
    ]"
    :href="state.disabled ? null : href"
    v-bind="a($attrs, ['^on[A-Z]'])"
    @click="handleClick"
  >
    <component
      :is="icon"
      v-if="icon"
      class="tiny-svg-size tiny-link-svg"
      :class="{ 'tiny-link-svg-only': !slots.default }"
    />

    <span v-if="slots.default" class="tiny-link__inner">
      <slot></slot>
    </span>

    <slot v-if="slots.icon" name="icon"></slot>
  </a>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/link/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'disabled', 'href', 'icon', 'type', 'underline'],
  emits: ['click'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
