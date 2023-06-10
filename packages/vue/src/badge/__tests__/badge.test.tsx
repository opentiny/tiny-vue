import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Badge from '@opentiny/vue-badge'

describe('PC Mode', () => {
  const mount = mountPcMode
  
  test('type & value', async () => {
    const num = 2
    const text = 'danger 类型'
    const wrapper = mount(() => <Badge type='danger' value={num}>{text}</Badge>)
    expect(wrapper.find('.tiny-badge__content-text').text()).toEqual(String(num))
    expect(wrapper.find('.tiny-badge').classes()).toContain('tiny-badge--danger')
  })

  test('max', async () => {
    const wrapper = mount(() => <Badge max={2} value={5}>小圆点显示</Badge>)
    expect(wrapper.find('.tiny-badge__content-text').text()).toEqual('2+')
  })

  test('is-dot', async () => {
    const wrapper = mount(() => <Badge is-dot={true}>小圆点显示</Badge>)
    expect(wrapper.find('.tiny-badge').classes()).toContain('tiny-badge--default')
  })

  test('slot', async () => {
    const wrapper = mount(() => <Badge
      value={5}
      v-slots={{
        content: () => <div class="badge__content">自定义</div>
      }}
    >自定义内容插槽</Badge>)
    expect(wrapper.find('.badge__content').text()).toEqual('自定义')
  })
})
