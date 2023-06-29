import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi, } from 'vitest'
import TimeLine from '@opentiny/vue-time-line'
import { nextTick } from 'vue'

const data = [
  { name: '已下单', time: '2019-11-11 00:01' },
  { name: '运输中', time: '2019-11-12 14:20' },
  { name: '已签收', time: '2019-11-14 20:45' }
]

describe('PC Mode', () => {
  const mount = mountPcMode

  /**
   * attrs
   */
  test('data', () => {
    const wrapper = mount(() => <TimeLine data={data}></TimeLine>)
    const nodes = wrapper.findAll('.normal')
    expect(nodes.length).toBe(data.length)
    expect(nodes[0].find('.date-time').text()).toBe(data[0].time)
    expect(nodes[0].find('.name').text()).toBe(data[0].name)
  })

  test.todo('vertical 竖式步骤条')

  test.todo('horizontal 横向步骤条')

  test.todo('show-number 设置未完成的状态是否显示序号')

  test.todo('name-field 设置节点信息中名称对应的字段名')

  test.todo('time-field 设置节点时间信息对应的字段名')

  test.todo('start 设置步骤条序号起始值')

  test.todo('space 设置步骤条的宽度')

  test.todo('active 设置步骤条的选中步骤')

  test.todo('reverse 设置竖向步骤条的方向')

  /**
   * slots
   */
  test('top', () => {
    const wrapper = mount(() => <TimeLine data={data} v-slots={{
      top: (scopeData) => <a class="custom-top">{scopeData.slotScope.name}</a>
    }}></TimeLine>)
    expect(wrapper.findAll('.custom-top').length).toBe(data.length)
    expect(wrapper.find('.custom-top').text()).toBe(data[0].name)
  })

  test.todo('bottom 定义步骤条底部')

  test.todo('left 定义步骤条左侧内容')

  test.todo('right 定义步骤条右侧内容')

  /**
   * events
   */
  test('click', async () => {
    const handleClick = vi.fn()
    const wrapper = mount(() => <TimeLine data={data} onClick={handleClick}></TimeLine>)
    await wrapper.find('.icon').trigger('click')
    await nextTick()
    expect(handleClick).toHaveBeenCalled()
  })
})

