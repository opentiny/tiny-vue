<template>
  <div
    data-tag="tiny-skeleton-item"
    :class="
      m(
        'bg-color-fill-3',
        variant === 'image' && 'fill-color-border',
        variant !== 'circle' && 'rounded',
        gcls(`shape-${variant}`),
        variant !== 'square' ? gcls(`${variant}-${size}`) : '',
        state.isActive &&
          'bg-w200h100 bg-gradient-to-r from-color-border-separator via-color-bg-2 to-color-border-separator animate-skeleton-loading-1500ms'
      )
    "
  >
    <slot v-if="variant === 'image'">
      <icon-picture class="w-3/5 h-3/5"></icon-picture>
    </slot>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/skeleton-item/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconPicture } from '@opentiny/vue-icon'
import { classes } from './token'

export default defineComponent({
  props: [...props, 'variant', 'size'],
  components: {
    IconPicture: iconPicture()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
