<script lang="ts">
import { h, defineComponent, $props } from '@opentiny/vue-common'

export default defineComponent({
  props: {
    ...$props,
    item: Object
  },
  setup(props) {
    if (props.item) {
      // eslint-disable-next-line vue/no-mutating-props
      props.item.rendered = true
    }
  },
  render() {
    // eslint-disable-next-line vue/no-deprecated-dollar-scopedslots-api
    const slots = '$scopedSlots' in this ? this.$scopedSlots : this.$slots

    return h('div', { attrs: { 'data-tag': 'tiny-tab-panel' } }, typeof slots.default === 'function' && slots.default())
  }
})
</script>
