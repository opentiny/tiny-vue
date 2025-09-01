<script lang="ts">
import { defineComponent, setup, props, h } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/space/vue'
import { classes } from './token'

export default defineComponent({
  name: 'TinySpace',
  props: [...props, 'size', 'direction', 'align', 'justify', 'wrap', 'order', 'customClass', 'customStyle'],
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  },
  render() {
    const m = this.m || ((...args) => args.filter(Boolean).join(' '))
    const gcls = this.gcls || ((cls) => cls)
    const children = this.orderedChildren || (this.$slots.default ? this.$slots.default() : [])

    return h(
      'div',
      {
        'data-tag': 'tiny-space',
        class: m(
          gcls('base'),
          gcls(`direction-${this.direction || 'row'}`),
          gcls(`align-${this.align || 'start'}`),
          gcls(`justify-${this.justify || 'start'}`),
          gcls(`wrap-${this.wrap ? 'true' : 'false'}`)
        ),
        style: this.state?.gapStyle
      },
      children.map((child, idx) =>
        typeof child === 'function' ? child() : h(child.type || child, { key: child.key ?? idx, ...child.props })
      )
    )
  }
})
</script>
