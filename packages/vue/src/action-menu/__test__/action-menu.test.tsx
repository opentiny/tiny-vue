import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect, vi } from 'vitest'
import ActionMenu from '@opentiny/vue-action-menu'

describe('PC Mode', () => {
  const mount = mountPcMode
  const options = [
    {
      label: '远程登陆'
    },
    {
      label: '开机'
    },
    {
      label: '关机'
    },
    {
      label: '重启'
    },
    {
      label: '网络设置',
      children: [
        { label: '更改安全组' },
        { label: '切换VPC', divided: true }
      ]
    }
  ]

  test('base 基本用法', async () => {
    const wrapper = mount(() =>
      <ActionMenu
        options={options}>
      </ActionMenu>
    )

    const triggerEle = wrapper.find('.tiny-dropdown__trigger')
    expect(triggerEle.exists()).toBe(true)
    await triggerEle.trigger('hover')
    const dropdownMenuEle = wrapper.find('.tiny-dropdown-menu')
    expect(dropdownMenuEle.exists()).toBe(true)
    const dropdownItem = wrapper.find('.tiny-dropdown-item.has-children')
    await dropdownItem.trigger('hover')
    setTimeout(() => {
      expect(dropdownItem.find('.tiny-dropdown-item--child').exists()).toBe(true)
    }, 500)
  })

  test('slot', async () => {
    const wrapper = mount(() =>
      <ActionMenu
        options={options}
        v-slots={{
          default: (data) => <span class='custom-label'> {data.name}</span>
        }}
      >
      </ActionMenu>
    )

    const triggerEle = wrapper.find('.tiny-dropdown__trigger')
    const textItem = wrapper.find('.custom-label')

    expect(triggerEle.exists()).toBe(true)

    await triggerEle.trigger('hover')
    const dropdownMenuEle = wrapper.find('.tiny-dropdown-menu')
    expect(dropdownMenuEle.exists()).toBe(true)
    const dropdownItem = wrapper.find('.tiny-dropdown-item.has-children')
    await dropdownItem.trigger('hover')
    setTimeout(() => {
      expect(dropdownItem.find('.tiny-dropdown-item--child').exists()).toBe(true)
      expect(textItem.exists()).toBe(true)
    }, 500)
  })

  test('item-click', async () => {
    const itemClick = vi.fn()
    const wrapper = mount(() =>
      <ActionMenu
        options={options}
        onItemClick={itemClick}
      >
      </ActionMenu>
    )

    const triggerEle = wrapper.find('.tiny-dropdown__trigger')
    expect(triggerEle.exists()).toBe(true)
    await triggerEle.trigger('hover')
    const dropdownMenuEle = wrapper.find('.tiny-dropdown-menu')
    expect(dropdownMenuEle.exists()).toBe(true)
    const dropdownItem = wrapper.find('.tiny-dropdown-item.has-children')
    await dropdownItem.trigger('click')
    setTimeout(() => {
      expect(itemClick).toHaveBeenCalledTimes(1)
      expect(itemClick).toHaveBeenCalled()
    }, 500)
  })

  test.todo('options 可以配置菜单按钮数据')
  test.todo('label 菜单项的显示值')
  test.todo('children 菜单项的子集')
  test.todo('divided 显示分割线')
  test.todo('disabled 是否禁用')
  test.todo('text-field 设置菜单按钮显示文本的键值,默认值为 label')
  test.todo('more-text 配置下拉按钮显示文本,默认值为“更多”')
  test.todo('spacing 配置菜单按钮之间的间距,默认值为 5px')
  test.todo('popper-class 设置下拉面板的类名，自定义样式')
  test.todo('max-show-num 配置显示菜单按钮的最大个数，默认值为2')
  test.todo('item 下拉面板中选项插槽')
  test.todo('more-click 当点击下拉按钮时触发。')
})
