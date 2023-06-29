import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Steps from '@opentiny/vue-steps'
import { nextTick } from 'vue'

const data = [
  { name: 'Basic Info', count: 3, status: 'done' },
  { name: 'BOQ Info', count: 0, status: 'done' },
  { name: 'Involved Parties', count: 10, status: 'doing' },
  { name: 'Billing', count: 0, status: 'done' }
]

describe('PC Mode', () => {
  const mount = mountPcMode

  /**
   * attrs
   */
  test('active', () => {
    const activeIndex = 2
    const wrapper = mount(() => <Steps data={data} active={activeIndex}></Steps>)
    expect(wrapper.findAll('li')[2].classes()).toContain('current')
  })

  test.todo('count-field 设置高级向导里徽标计数对应的字段名')

  test.todo('data 设置步骤条的数据')

  test.todo('name-field 设置节点信息中名称对应的字段名')

  test.todo('space 设置步骤条的宽度')

  test.todo('status-field 设置数据状态对应的字段名')

  test.todo('text-position 设置节点文本内容的位置')

  test.todo('show-divider 设置是否显示步骤条底部分割线')

  /**
   * slots
   */
  test('item', () => {
    const wrapper = mount(() => <Steps data={data} v-slots={{
      item: (scopeData) => <a class="label">{scopeData.slotScope.name}</a>
    }}></Steps>)
    expect(wrapper.find('a.label').exists()).toBe(true)
  })

  test.todo('active-node-desc 当前节点描述信息插槽')

  /**
   * events
   */
  test('click', async () => {
    const handleClick = vi.fn()
    const wrapper = mount(() => <Steps data={data} onClick={handleClick}></Steps>)
    await wrapper.find('li').trigger('click')
    await nextTick()
    expect(handleClick).toHaveBeenCalled()
  })
})

