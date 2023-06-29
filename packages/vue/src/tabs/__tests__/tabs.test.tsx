import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import Tabs from '@opentiny/vue-tabs'
import TabItem from '@opentiny/vue-tab-item'
import { describe, expect, test, vi } from 'vitest'
import { reactive, nextTick } from 'vue'

const activeName = 'navigation1'
const data = reactive([
  {
    name: 'navigation1',
    title: 'Navigation1',
    content: 'Navigation1'
  },
  {
    name: 'navigation2',
    title: 'Navigation2',
    content: 'Navigation2'
  },
  {
    name: 'navigation3',
    title: 'Navigation3',
    content: 'Navigation3'
  },
  {
    name: 'navigation4',
    title: 'Navigation4',
    content: 'Navigation4'
  },
  {
    name: 'navigation5',
    title: 'Navigation5',
    content: 'Navigation5'
  }
])

const createTabList = () => data.map((item) => <TabItem key={item.name} title={item.title} name={item.name}></TabItem>)

describe('PC Mode', () => {
  const mount = mountPcMode
  // props
  test('tab-style 标签页样式', async () => {
    const wrapper = mount(() =>
      <Tabs active-name={activeName} tab-style="border-card">
        {createTabList()}
      </Tabs>)
    const tinyTabs = wrapper.findComponent({ name: 'TinyTabs' })
    expect(tinyTabs.vm.tabStyle).toEqual('border-card')
    expect(wrapper.find('.tiny-tabs--border-card').exists()).toBeTruthy()
  })

  // slots
  test('title 自定义title内容', async () => {
    const wrapper = mount(() =>
      <Tabs active-name={activeName} tab-style="border-card">
        <TabItem name='single' v-slots={{ title: () => <span class="item-title">我是表头</span> }}></TabItem>
      </Tabs>)
    await nextTick()
    expect(wrapper.find('.item-title').exists()).toBeTruthy()
  })

  // events
  test('click 点击tabitem时触发事件', async () => {
    const handleClick = vi.fn()
    const wrapper = mount(() =>
      <Tabs active-name={activeName} tab-style="card" onClick={handleClick}>
        {createTabList()}
      </Tabs>)
    await nextTick()
    await wrapper.find('.tiny-tabs__item').trigger('click')
    expect(handleClick).toBeCalled()
  })

  // props
  test.todo('popper-class 为 popper 添加类名(可参考 popover 组件)')

  test.todo('with-add 标签是否可增加')

  test.todo('with-close 标签是否可关闭;标签是否可关闭')

  test.todo('editable 标签是否同时可增加和关闭')

  test.todo('show-more-tabs 当标签页超过一定宽度时将显示 更多 ，鼠标悬停到 更多 时，将显示超出宽度的标签页。')

  test.todo('modelValue / v-model 绑定值，选中选项卡的 name')

  test.todo('position 选项卡所在位置;该属性的可选值为 top/right/bottom/left')

  test.todo('stretch 标签的宽度是否自撑开')

  test.todo('before-leave 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换')

  test.todo('active-name 激活当前页面')

  test.todo('size 设置 tabs 标签页尺寸,当与 tabStyle 为 card 或者 border-card 时生效, 该属性可选值为 small')

  test.todo('drop-config 启用标签页拖拽功能，对标签页进行重新排序')

  test.todo('tooltip-config 设置文字超出提示, Object类型的值参考tooltip组件配置，如果想使用默认的title属性，可设置为String 类型，值为title')

  // slots
  test.todo('moreIcon 自定义更多图标')

  // events
  test.todo('tab-drag-start拖动开始时的事件, arguments: arg1:event')

  test.todo('tab-drag-over 拖动中的事件, arguments: arg1:event')

  test.todo('tab-drag-end 拖动结束后的事件, arguments: arg1:event')

  test.todo('add 增加tabitem时触发事件;点击 tabs 的新增按钮后触发;无arguments')

  test.todo('close 删除tabitem时触发事件;点击 tab 移除按钮后触发;arguments: arg1:删除的tab名称')

  test.todo('edit 点击 tabs 的新增按钮或 tab 被关闭后触发;arguments: arg1:null或删除的tab名称, arg2:"add" 或者 "remove"')
})
