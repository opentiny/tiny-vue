import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect, vi } from 'vitest'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('base 基本用法', async () => {
    const wrapper = mount(() =>
      <Dropdown
        v-slots={{
          dropdown: () => (<DropdownMenu>
            <DropdownItem>老友粉</DropdownItem>
            <DropdownItem>黄金糕</DropdownItem>
            <DropdownItem>狮子头</DropdownItem>
            <DropdownItem>螺蛳粉</DropdownItem>
            <DropdownItem>双皮奶</DropdownItem>
            <DropdownItem>蚵仔煎</DropdownItem>
          </DropdownMenu>)
        }}>
      </Dropdown>
    )

    const triggerEle = wrapper.find('.tiny-dropdown__trigger')
    expect(triggerEle.exists()).toBe(true)
    await triggerEle.trigger('hover')
    const dropdownMenuEle = wrapper.find('.tiny-dropdown-menu')
    expect(dropdownMenuEle.exists()).toBe(true)
  })

  test('slot-default', async () => {
    const wrapper = mount(() =>
      <Dropdown
        v-slots={{
          default: () => <span class='test-default'>默认插槽</span>,
          dropdown: () => (<DropdownMenu>
            <DropdownItem>老友粉</DropdownItem>
            <DropdownItem>黄金糕</DropdownItem>
            <DropdownItem>狮子头</DropdownItem>
            <DropdownItem>螺蛳粉</DropdownItem>
            <DropdownItem>双皮奶</DropdownItem>
            <DropdownItem>蚵仔煎</DropdownItem>
          </DropdownMenu >)
        }}
      >
      </Dropdown >
    )

    const triggerEle = wrapper.find('.test-default')
    expect(triggerEle.exists()).toBe(true)
    await triggerEle.trigger('hover')
    const dropdownMenuEle = wrapper.find('.tiny-dropdown-menu')
    expect(dropdownMenuEle.exists()).toBe(true)
  })

  test('events-visible-change', async () => {
    const visibleChange = vi.fn()

    const wrapper = mount(() =>
      <Dropdown
        onVisibleChange={visibleChange}
        v-slots={{
          dropdown: () => (<DropdownMenu>
            <DropdownItem>老友粉</DropdownItem>
            <DropdownItem>黄金糕</DropdownItem>
            <DropdownItem>狮子头</DropdownItem>
            <DropdownItem>螺蛳粉</DropdownItem>
            <DropdownItem>双皮奶</DropdownItem>
            <DropdownItem>蚵仔煎</DropdownItem>
          </DropdownMenu>)
        }}>
      </Dropdown>
    )

    const triggerEle = wrapper.find('.tiny-dropdown__trigger')
    expect(triggerEle.exists()).toBe(true)
    await triggerEle.trigger('hover')

    setTimeout(() => {
      expect(visibleChange).toHaveBeenCalledTimes(1)
      expect(visibleChange).toHaveBeenCalled()
    }, 500)
  })

  test.todo('type 菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)')
  test.todo('size 菜单尺寸，在split-button为 true 的情况下也对触发按钮生效。可选值（medium / small / mini）')
  test.todo('split-button 下拉触发元素呈现为按钮组')
  test.todo('trigger 触发下拉的行为')
  test.todo('hide-on-click 是否在点击菜单项后隐藏菜单')
  test.todo('show-timeout 展开下拉菜单的延时')
  test.todo('hide-timeout 收起下拉菜单的延时')
  test.todo('disabled 是否禁用')
  test.todo('menu-options 配置式配置 DropdownMenu 属性')
  test.todo('title 不使用默认插槽时，title属性可以配置菜单标题')

  test.todo('button-click split-button 为 true 时，点击左侧按钮的事件回调。')
  test.todo('item-click 点击菜单项触发的事件回调。')
})
