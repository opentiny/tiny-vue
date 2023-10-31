<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/tabs-mf/vue-nav'
import { $props, setup, defineComponent, h } from '@opentiny/vue-common'
import TabNavItem from './tab-nav-item.vue'
import type { NavItem } from './type'

export default defineComponent({
  props: {
    ...$props,
    customClass: {
      type: String,
      default: ''
    }
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    const { state, customClass, m } = this

    return h('div', { attrs: { 'data-tag': 'tiny-tab-nav' }, class: m('relative', customClass) }, [
      ...state.navItems.map((item: NavItem) =>
        typeof item.visible === 'undefined' || item.visible
          ? h(TabNavItem, {
              key: item.name,
              props: {
                title: item.title,
                name: item.name,
                selected: item.selected,
                navItem: item
              }
            })
          : null
      ),
      h('div', {
        class: m('absolute bottom-0.5 h-0.5 bg-color-brand transition-all duration-300', {
          'hidden': !state.currentNav
        }),
        style: {
          width: state.currentWidth + 'px',
          left: state.currentPosition + 'px'
        }
      })
    ])
  }
})
</script>
