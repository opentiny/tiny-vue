<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/dynamic-scroller-item/vue'
import { props, setup, defineComponent, h } from '@opentiny/vue-common'

export default defineComponent({
  emits: ['resize'],
  props: [...props, 'item', 'watchData', 'active', 'index', 'sizeDependencies', 'emitResize', 'tag'],
  components: {},
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  },
  render() {
    return h(this.tag, this.slots.default ? this.slots.default() : null)
  }
})
</script>
