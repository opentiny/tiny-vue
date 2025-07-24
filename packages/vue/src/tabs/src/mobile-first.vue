<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/tabs-mf/vue'
import { props, setup, defineComponent, h, isVue2, KeepAlive } from '@opentiny/vue-common'
import Carousel from '@opentiny/vue-carousel'
import TabBar from './mobile-first/tab-bar.vue'
import TabPanel from './mobile-first/tab-panel.vue'
import TabSwipe from './mobile-first/tab-swipe.vue'
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
    'beforeClose',
    'swipeable'
  ],
  emits: ['update:activeName', 'update:modelValue', 'click', 'edit', 'close'],
  components: { TabBar },
  setup(props, context): any {
    return setup({ props, context, renderless, api }) as unknown as ITabsApi
  },
  render() {
    const { state, slots, optimized, modelValue, beforeCarouselSwipe } = this
    const runFnuc = (fn) => (typeof fn === 'function' && fn()) || ''

    const hiddens = (
      <div data-tag="tiny-tabs-hidden" class="hidden">
        {runFnuc(slots.default)}
      </div>
    )

    let tabPanel = []
    let tabWrapper

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
            ? h(TabPanel, {
                props: { item },
                key: state.currentItem.name,
                scopedSlots: { default: () => runFnuc(defaultSlot) }
              })
            : h(TabPanel, { props: { item }, key: state.currentItem.name }, () => runFnuc(defaultSlot))
        )
      })

      tabPanel.push(isVue2 ? <KeepAlive>{vnodes}</KeepAlive> : h(KeepAlive, {}, () => vnodes))
    } else {
      state.items.forEach((item, i) => {
        if (item.lazy && item !== state.currentItem && !item.rendered) {
          return
        }

        const itemDefSlot = isVue2 ? item.vm.$scopedSlots.default : item.slotDefault
        const props = {
          style: { display: item === state.currentItem || state.swipeable ? 'block' : 'none' },
          attrs: { 'data-tag': 'tiny-tab-panel' },
          class: 'w-full',
          props: { item },
          key: item.name
        }

        const tabItem = isVue2
          ? h(TabPanel, { scopedSlots: { default: () => runFnuc(itemDefSlot) }, ...props })
          : h(TabPanel, props, () => runFnuc(itemDefSlot))

        let tabSwipe

        if (state.swipeable) {
          tabSwipe = isVue2
            ? h(TabSwipe, { ref: `tabSwipe${i}`, scopedSlots: { default: () => [tabItem] } })
            : h(TabSwipe, { ref: `tabSwipe${i}` }, () => [tabItem])
        }

        tabPanel.push(state.swipeable ? tabSwipe : tabItem)
      })

      if (state.swipeable) {
        let initialIndex = 0

        if (state.items.length > 0 && modelValue) {
          initialIndex = state.items.map((item) => item.name).indexOf(modelValue)
        }

        tabWrapper = h(
          Carousel,
          {
            ref: 'swipe',
            props: {
              loop: false,
              swipeable: true,
              lite: true,
              initialIndex,
              beforeSwipe: beforeCarouselSwipe,
              height: `${state.maxTabSwipeHeight}px`
            },
            class: '!rounded-none [&_>[data-tag="tiny-carousel-block"]]:!rounded-none'
          },
          tabPanel
        )
      }
    }

    return (
      <div data-tag="tiny-tabs">
        {hiddens}
        <tab-bar ref="tabbar" />
        {state.swipeable ? tabWrapper : tabPanel}
      </div>
    )
  }
})
</script>
