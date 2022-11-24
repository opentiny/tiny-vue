<template>
  <i :style="styleExternalIcon" class="tiny-svg" v-on="$listeners" />
</template>

<script>
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'SvgIcon',
  props: {
    src: {
      type: String,
      required: true
    },
    width: String,
    height: String,
    fill: String
  },
  computed: {
    styleExternalIcon() {
      const style = {
        mask: `url(${this.src}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.src}) no-repeat 50% 50%`
      }

      this.width && (style.width = this.width)
      this.height && (style.height = this.height)
      this.fill && (style.background = this.fill)

      return style
    }
  }
}
</script>
