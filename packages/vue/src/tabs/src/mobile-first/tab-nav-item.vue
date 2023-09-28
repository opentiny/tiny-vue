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
  setup(props: any, context: any) {
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
          'w-max h-11 sm:h-10 inline-flex flex-col justify-center pl-3 pr-3 group',
          'first:ml-3 last:mr-3 hover:cursor-pointer sm:first:pl-0 sm:last:pr-0 sm:first:ml-0 sm:last:mr-0',
          state.tabSize === 'big' ? 'min-w-[theme(spacing.8)]' : 'min-w-[theme(spacing.7)]'
        ],
        on: { click: handleNavItemClick }
      },
      [
        h(
          'div',
          {
            class: [
              'inline-block text-base sm:text-sm group-hover:text-color-brand',
              selected ? 'text-color-brand' : 'text-color-text-primary sm:text-color-text-secondary'
            ],
            style: state.tabSize === 'big' ? 'font-size: 1rem' : ''
          },
          [
            h('span', { class: 'w-max relative' }, [
              navItem.slotTitle ? navItem.slotTitle(navItem) : h('span', {}, title),
              selected
                ? h('div', { class: 'absolute sm:-bottom-2.5 -bottom-3 w-full h-0.5 bg-color-brand z-20' }, [])
                : null
            ]),
            navItem.slotSetting || state.withClose
              ? h(
                  'span',
                  {
                    class: [
                      'pl-2 inline-flex translate-y-0.5 text-xs fill-color-icon-primary',
                      'hover:fill-color-icon-hover focus:fill-color-icon-focus',
                      navItem.slotSetting ? '-translate-y-0.5' : ''
                    ],
                    on: {
                      click: navItem.slotSetting ? settingClick : handleNavItemClose
                    }
                  },
                  [navItem.slotSetting ? navItem.slotSetting(navItem) : h(IconClose())]
                )
              : null
          ]
        )
      ]
    )
  }
})
</script>
