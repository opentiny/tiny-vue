<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/tabs-mf/vue'
import { props, setup, defineComponent, h, isVue2, KeepAlive } from '@opentiny/vue-common'
import TabBar from './mobile-first/tab-bar.vue'
import TabPanel from './mobile-first/tab-panel.vue'
import type { ITabsApi } from '@opentiny/vue-renderless/types/tabs.type'

export default defineComponent({
  props: [
    ...props,
    'activeName',
    'modelValue',
    'size',
    'withClose',
    'withAdd',
    'beforeLeave',
    'separator',
    'optimized',
    'beforeClose'
  ],
  emits: ['update:activeName', 'update:modelValue', 'click', 'edit', 'close', 'add'],
  components: { TabBar, TabPanel },
  setup(props, context): any {
    return setup({ props, context, renderless, api }) as unknown as ITabsApi
  },
  render() {
    const { state, slots, optimized } = this
    const runFnuc = (fn) => (typeof fn === 'function' && fn()) || ''

    const hiddens = (
      <div data-tag="tiny-tabs-hidden" class="hidden">
        {runFnuc(slots.default)}
      </div>
    )

    let tabPanel = []

    if (optimized) {
      let defaultSlot, vnodes

      if (state.currentItem) {
        defaultSlot = isVue2 ? state.currentItem.vm.$scopedSlots.default : state.currentItem.slotDefault
      }

      vnodes = []

      state.items.forEach((item) => {
        if (item !== state.currentItem) {
          return
        }

        vnodes.push(
          isVue2
            ? h(TabPanel, { key: state.currentItem.name, scopedSlots: { default: () => runFnuc(defaultSlot) } })
            : h(TabPanel, { key: state.currentItem.name }, () => runFnuc(defaultSlot))
        )
      })

      tabPanel.push(isVue2 ? <KeepAlive>{vnodes}</KeepAlive> : h(KeepAlive, {}, () => vnodes))
    } else {
      state.items.forEach((item) => {
        if (item.lazy && item !== state.currentItem && !item.rendered) {
          return
        }

        const itemDefSlot = isVue2 ? item.vm.$scopedSlots.default : item.slotDefault
        const props = {
          style: { display: item === state.currentItem ? 'block' : 'none' },
          attrs: { 'data-tag': 'tiny-tab-panel' },
          class: 'w-full',
          props: { item },
          key: item.name
        }

        tabPanel.push(
          isVue2
            ? h(TabPanel, { scopedSlots: { default: () => runFnuc(itemDefSlot) }, ...props })
            : h(TabPanel, props, () => runFnuc(itemDefSlot))
        )
      })
    }

    return (
      <div data-tag="tiny-tabs">
        {hiddens}
        <tab-bar ref="tabbar" />
        {tabPanel}
      </div>
    )
  }
})
</script>
