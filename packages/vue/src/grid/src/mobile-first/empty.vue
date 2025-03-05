<script lang="ts">
import { defineComponent, $props, h } from '@opentiny/vue-common'

export default defineComponent({
  inject: ['$mftable'],
  props: { ...$props },
  render() {
    const { $mftable } = this as any
    const slotEmpty = $mftable.slotEmpty
    const renderEmpty = $mftable.renderEmpty
    const $table = $mftable.config.tableVm

    let content = null
    if (typeof slotEmpty === 'function') {
      content = slotEmpty({ $table })
    } else if (typeof renderEmpty === 'function') {
      content = renderEmpty(h, $table)
    }

    return h(
      'div',
      {
        attrs: {
          'data-tag': 'tiny-grid-empty-wrapper'
        },
        class: 'flex t-0 justify-center items-center w-full h-full bg-transparent sm:bg-color-bg-1 text-center'
      },
      [content]
    )
  }
})
</script>
