<script lang="ts">
import { h, defineComponent, $props, hooks } from '@opentiny/vue-common'

export default defineComponent({
  props: {
    ...$props,
    item: { type: Object, required: true }
  },
  provide() {
    return { TabStatus: hooks.toRef(this.item, 'selected') }
  },
  setup(props) {
    if (props.item) {
      // eslint-disable-next-line vue/no-mutating-props
      props.item.rendered = true
    }
  },
  render() {
    const slots = '$scopedSlots' in this ? this.$scopedSlots : this.$slots

    return h('div', { attrs: { 'data-tag': 'tiny-tab-panel' } }, typeof slots.default === 'function' && slots.default())
  }
})
</script>
