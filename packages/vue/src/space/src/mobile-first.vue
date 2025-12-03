<script lang="ts">
import { defineComponent, props, setup, h } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/space/vue'
import type { ISpaceApi } from '@opentiny/vue-renderless/types/space.type'

export default defineComponent({
  name: 'TinySpace',
  props: [...props, 'size', 'direction', 'align', 'justify', 'wrap', 'order', 'customClass', 'customStyle'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ISpaceApi
  },
  render() {
    const hFunc = (this as any).$createElement || h

    const children = this.orderedChildren?.length ? this.orderedChildren : this.$slots.default?.() || []

    return hFunc(
      'div',
      {
        class: this.customClass,
        style: [
          this.state?.gapStyle,
          {
            display: 'flex',
            flexDirection: this.direction || 'row',
            alignItems: this.align || 'flex-start',
            justifyContent: this.justify || 'flex-start',
            flexWrap: this.wrap ? 'wrap' : 'nowrap',
            ...this.customStyle
          }
        ]
      },
      children
    )
  }
})
</script>
