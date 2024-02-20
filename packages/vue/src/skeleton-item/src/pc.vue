<template>
  <div
    class="tiny-skeleton-item"
    :class="[
      variant ? 'tiny-skeleton-item--' + variant : '',
      size && variant !== 'square' ? 'tiny-skeleton-item--' + size : '',
      state.isActive ? 'tiny-skeleton-item--active' : ''
    ]"
  >
    <icon-rich-text-image v-if="variant === 'image'"></icon-rich-text-image>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/skeleton-item/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconRichTextImage } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['update:modelValue'],
  props: [...props, 'modelValue', 'variant', 'size'],
  components: {
    IconRichTextImage: iconRichTextImage()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
