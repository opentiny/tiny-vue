<template>
  <button
    data-tag="tiny-button"
    @click="handleClick"
    :disabled="state.buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="
      m(
        gcls('button'),
        gcls(banner ? 'button-banner' : 'button-base-width'),
        gcls(`size-${size || 'default'}`),
        gcls(
          `type-${type || 'default'}${icon ? '-icon' : state.plain ? '-plain' : ''}${
            state.buttonDisabled ? '-disabled' : ''
          }`
        ),
        gcls(round ? 'is-round' : 'no-round'),
        gcls(circle ? 'is-circle' : 'no-circle'),
        gcls({ 'is-border': circle || !(type === 'text' || icon) }),
        gcls({ 'button-link': href }),
        customClass
      )
    "
    :tabindex="tabindex"
    v-bind="a($attrs, ['class', 'style', 'id'], true)"
  >
    <icon-loading v-if="loading" :class="gcls('loading-svg')" />
    <component
      v-if="icon && !loading"
      :is="icon"
      :class="[gcls('button-icon'), gcls(`button-icon-${state.buttonDisabled ? 'disabled' : 'default'}`)]"
    />
    <slot>
      <span>{{ text }}</span>
    </slot>
  </button>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/button/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconLoading } from '@opentiny/vue-icon'
import { classes } from './token'

export default defineComponent({
  emits: ['click', 'hook-updated'],
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
    'autofocus',
    'round',
    'circle',
    'tabindex',
    'href',
    'customClass',
    'banner'
  ],
  components: { IconLoading: iconLoading() },
  setup(props, context): any {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
