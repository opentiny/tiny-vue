<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/tabs-mf/vue-slider-bar'
import { $props, setup, defineComponent, h } from '@opentiny/vue-common'

export default defineComponent({
  props: {
    ...$props,
    currentWidth: {
      type: Number,
      default: 0
    },
    currentPosition: {
      type: Number,
      default: 0
    },
    currentNav: {
      type: Object,
      default: () => {}
    }
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    const { state, m } = this

    return h('div', {
      class: m(
        'absolute bg-color-brand transition-all duration-100 z-20 rounded-full bottom-px h-px py-px box-content',
        {
          'hidden': !state.currentNav
        }
      ),
      style: { width: state.currentWidth, left: state.currentPosition }
    })
  }
})
</script>
