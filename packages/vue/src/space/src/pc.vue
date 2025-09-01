<!-- <template>
  <div
    data-tag="tiny-space"
    :style="[
      state.gapStyle,
      {
        display: 'flex',
        flexDirection: direction || 'row',
        alignItems: align || 'flex-start',
        justifyContent: justify || 'flex-start',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...customStyle
      }
    ]"
    :class="customClass"
  >
    <template v-for="(child, idx) in orderedChildren" :key="child.key ?? idx">
      <component :is="child" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, props, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/space/vue'
import type { ISpaceApi } from '@opentiny/vue-renderless/types/space.type'

export default defineComponent({
  name: 'TinySpace',
  props: [...props, 'size', 'direction', 'align', 'justify', 'wrap', 'order', 'customClass', 'customStyle'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ISpaceApi
  }
})
</script> -->
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

    // 如果 renderless 层有 orderedChildren，就用它，否则 fallback 到默认 slot
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
