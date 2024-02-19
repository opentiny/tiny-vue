<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/tabs-mf/vue-bar'
import { props, setup, defineComponent, h } from '@opentiny/vue-common'
import { IconPopup, IconPlus } from '@opentiny/vue-icon'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'
import TabNav from './tab-nav.vue'
import type { NavItem } from './type'

export default defineComponent({
  props: [...props],
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    const { state, handleClickDropdownItem, key, emitAdd } = this
    const tabNavClass =
      state.moreList.length > 0 ? 'w-max inline-block' : 'w-full inline-flex justify-around sm:w-max sm:inline-block'

    return h('div', { attrs: { 'data-tag': 'tiny-tab-bar' }, class: 'w-full h-11 sm:h-10 overflow-hidden relative' }, [
      h(
        'div',
        {
          ref: 'scroll',
          class: [
            'scrollbar-size-0 w-full overflow-x-auto whitespace-nowrap',
            'before:block before:absolute before:w-0 before:h-11 sm:before:h-10',
            'after:block after:absolute after:top-0 after:right-0 after:w-0 after:h-11 sm:after:h-10',
            'before:shadow-[1px_-10px_4px_4px_rgba(0,0,0,0.08)] after:shadow-[-1px_-10_4px_4px_rgba(0,0,0,0.08)]',
            !state.moreLeft && !state.moreRight ? 'before:hidden after:hidden' : '',
            !state.moreLeft ? 'sm:before:hidden' : '',
            !state.moreRight ? 'sm:after:hidden' : ''
          ]
        },
        [
          h(TabNav, {
            ref: 'tabNav',
            props: { customClass: tabNavClass },
            style: `margin-right:${state.navPaddingRight}px`
          })
        ]
      ),
      h('div', {
        class: [
          state.separator
            ? 'sm:invisible'
            : 'invisible sm:visible absolute w-full h-px bottom-px bg-color-border-separator z-10'
        ]
      }),
      h(
        'div',
        {
          ref: 'tabMore',
          attrs: { 'data-tag': 'tiny-tab-more' },
          class: [
            'inline-flex w-max h-11 sm:h-10 absolute top-0 right-0 z-0 bg-color-bg-1',
            state.moreRight ? 'shadow-[-1px_-10px_4px_4px_rgba(0,0,0,0.08)]' : ''
          ]
        },
        [
          state.moreList.length
            ? h('div', { class: 'hidden sm:inline-block w-11 h-11 sm:h-10 text-sm cursor-pointer' }, [
                h('span', { class: 'inline-flex w-full h-full flex-col justify-center items-center' }, [
                  h(Dropdown, { on: { 'item-click': handleClickDropdownItem }, props: { showIcon: false } }, [
                    h('span', {}, [h(IconPopup(), { class: 'fill-color-icon-focus text-base' })]),
                    h(
                      DropdownMenu,
                      {
                        slot: 'dropdown',
                        props: { popperClass: 'max-h-[theme(spacing.80)] overflow-x-hidden overflow-y-auto' }
                      },
                      state.moreOptions.map((opt: NavItem) =>
                        h(DropdownItem, { key: key(opt), props: { itemData: opt.name } }, [
                          opt.slotTitle ? opt.slotTitle() : opt.title
                        ])
                      )
                    )
                  ])
                ])
              ])
            : null,
          state.withAdd
            ? h(
                'div',
                {
                  attrs: { 'data-tag': 'tiny-tab-add' },
                  class: 'hidden sm:inline-block w-11 h-11 sm:h-10 text-sm cursor-pointer',
                  on: { click: emitAdd }
                },
                [
                  h('span', { class: 'inline-flex w-full h-full flex-col justify-center items-center' }, [
                    h(IconPlus(), { class: 'fill-color-icon-focus' })
                  ])
                ]
              )
            : null,
          state.slotCustom
            ? h(
                'div',
                {
                  attrs: { 'data-tag': 'tiny-tab-custom' },
                  class: 'hidden sm:inline-block w-max h-11 sm:h-10 text-sm'
                },
                [h('span', { class: 'inline-flex w-max h-full flex-col justify-center' }, [state.slotCustom()])]
              )
            : null
        ]
      )
    ])
  }
})
</script>
