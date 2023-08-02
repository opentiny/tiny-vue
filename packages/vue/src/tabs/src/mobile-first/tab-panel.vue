<script lang="ts">
import { h, defineComponent, $props } from '@opentiny/vue-common'

export default defineComponent({
  props: {
    ...$props,
    item: Object
  },
  render() {
    let content = null

    if (this.item) {
      if (typeof this.item.slotDefault === 'function') {
        content = (this.item as any).slotDefault()
      } else if (this.item.slotDefault) {
        content = (this.item as any).slotDefault
      }
    }

    return h('div', { attrs: { 'data-tag': 'tiny-tab-panel' } }, [content])
  }
})
</script>
