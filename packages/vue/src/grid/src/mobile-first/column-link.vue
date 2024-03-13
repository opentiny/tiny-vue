<script lang="ts">
import { defineComponent, h, $props } from '@opentiny/vue-common'
import { IconEllipsis } from '@opentiny/vue-icon'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'

export default defineComponent({
  props: { ...$props, datas: Object, row: Object },
  render() {
    const { datas, row } = this as any
    const { slotLink, operationColumn, hasOperation, genParams } = datas
    const params = genParams(operationColumn, row)
    let vnode: any

    if (hasOperation) {
      const { operationConfig = {} } = operationColumn
      const { buttons = [], disabledClass = '' } = operationConfig
      const visibleButtons: any[] = []
      const isDisabled = (buttonConfig: any) => {
        const { disabled = false } = buttonConfig
        return (typeof disabled === 'boolean' && disabled) || (typeof disabled === 'function' && disabled(row))
      }
      const isHidden = (buttonConfig: any) => {
        const { hidden = false } = buttonConfig
        return (typeof hidden === 'boolean' && hidden) || (typeof hidden === 'function' && hidden(row))
      }
      const handleItemClick = (name: string) => {
        const buttonConfig = visibleButtons.find(({ name: buttonName }) => buttonName === name)
        buttonConfig.click(window.event || {}, { buttonConfig, ...params })
      }

      buttons.forEach((buttonConfig: any) => !isHidden(buttonConfig) && visibleButtons.push(buttonConfig))
      vnode =
        visibleButtons.length === 1
          ? h(
              'div',
              {
                'class': `w-5 h-5 sm:w-4 sm:w-4 ${
                  isDisabled(visibleButtons[0]) ? 'fill-color-icon-disabled' : 'fill-color-icon-secondary'
                } `
              },
              [
                h(visibleButtons[0].icon, {
                  on: {
                    click: (event: any) => {
                      if (!isDisabled(visibleButtons[0])) {
                        handleItemClick(visibleButtons[0].name)
                      }
                      event.stopPropagation()
                    }
                  },
                  'attrs': {
                    'custom-class': 'w-5 h-5 sm:w-4 sm:w-4'
                  }
                })
              ]
            )
          : h(
              Dropdown,
              {
                on: { 'item-click': handleItemClick },
                props: { trigger: 'hover', showSelfIcon: true, tiny_mode: 'mobile-first', tiny_mode_root: true }
              },
              [
                h(IconEllipsis(), { class: 'mf-table-more outline-none text-base cursor-pointer' }),
                h(
                  DropdownMenu,
                  { slot: 'dropdown' },
                  visibleButtons.map((buttonConfig) =>
                    h(
                      DropdownItem,
                      {
                        class: { [disabledClass || '']: isDisabled(buttonConfig) },
                        props: { itemData: buttonConfig.name, disabled: isDisabled(buttonConfig) }
                      },
                      buttonConfig.name
                    )
                  )
                )
              ]
            )
    } else {
      vnode = slotLink({ row, h })
    }

    return h(
      'div',
      { attrs: { 'data-tag': 'tiny-table-column-link' }, class: 'flex flex-col items-end mt-px sm:mt-0' },
      [vnode]
    )
  }
})
</script>
