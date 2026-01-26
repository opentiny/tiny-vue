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
    const { item } = this

    return h(
      'div',
      {
        attrs: {
          'data-tag': 'tiny-tab-panel',
          role: 'tabpanel', // 无障碍：标识为标签面板
          id: `pane-${item.name}`, // 无障碍：唯一 ID，供 tab 的 aria-controls 引用
          'aria-labelledby': `tab-${item.name}`, // 无障碍：关联对应的 tab
          'aria-hidden': !item.selected ? 'true' : 'false' // 无障碍：标识可见性状态
        }
      },
      typeof slots.default === 'function' && slots.default()
    )
  }
})
</script>
