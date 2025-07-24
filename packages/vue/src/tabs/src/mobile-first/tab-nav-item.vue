<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/tabs-mf/vue-nav-item'
import { setup, defineComponent, h, $props } from '@opentiny/vue-common'
import { IconClose } from '@opentiny/vue-icon'
import type { TabNavItemInstance } from './type'

export default defineComponent({
  props: {
    ...$props,
    title: String,
    name: String,
    selected: Boolean,
    navItem: Object
  },
  components: { IconClose: IconClose() },
  setup(props, context): any {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    const { state, handleNavItemClick, selected, title, handleNavItemClose, navItem }: TabNavItemInstance = this as any
    const settingClick = (e: Event) => e.stopPropagation()

    return h(
      'div',
      {
        attrs: { 'data-tag': 'tiny-tab-nav-item' },
        class: [
          'w-max h-11 sm:h-10 inline-flex flex-col justify-center group',
          'first:ml-3 last:mr-3 hover:cursor-pointer sm:first:pl-0 sm:last:pr-0 sm:first:ml-0 sm:last:mr-0',
          state.separator ? 'mx-3.5 [&:last-of-type>div>span:last-of-type]:hidden [&:not(:last-of-type)]:mr-px' : 'mx-3'
        ],
        on: { click: handleNavItemClick }
      },
      [
        h(
          'span',
          {
            class: [
              'text-base sm:text-sm leading-6 sm:leading-5.5 group-hover:text-color-brand',
              state.tabSize === 'large' ? 'min-w-[theme(spacing.8)]' : 'min-w-[theme(spacing.7)]',
              selected ? 'text-color-brand font-bold' : 'text-color-text-primary'
            ],
            style: state.tabSize === 'large' ? 'font-size: 1rem' : ''
          },
          [
            navItem.slotTitle ? navItem.slotTitle(navItem) : h('span', {}, title),
            navItem.slotSetting || state.withClose
              ? h(
                  'span',
                  {
                    class: [
                      'pl-2 inline-flex translate-y-0.5 text-xs fill-color-icon-primary',
                      'hover:fill-color-icon-hover focus:fill-color-icon-focus',
                      navItem.slotSetting ? '-translate-y-0.5' : ''
                    ],
                    on: { click: navItem.slotSetting ? settingClick : handleNavItemClose }
                  },
                  [navItem.slotSetting ? navItem.slotSetting(navItem) : h(IconClose())]
                )
              : null,
            state.separator
              ? h('span', {
                  attrs: { 'data-tag': 'tiny-tab-nav-item-separator' },
                  class: 'relative left-3.5 inline-flex bg-color-border-separator w-px h-3'
                })
              : null
          ]
        )
      ]
    )
  }
})
</script>
