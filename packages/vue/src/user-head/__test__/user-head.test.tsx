import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { nextTick } from 'vue'
import { describe, expect, test } from 'vitest'
import UserHead from '@opentiny/vue-user-head'
import { iconSmile } from '@opentiny/vue-icon'

describe('PC Mode', () => {
  const mount = mountPcMode

  /**
   * attrs
   */
  test('background-color', async () => {
    const wrapper = mount(() => <UserHead background-color="rgb(194, 194, 194)"></UserHead>)
    const userHeadEl = wrapper.find('.tiny-user-head__portrait').element as HTMLElement
    expect(userHeadEl.style.getPropertyValue('background-color')).toBe('rgb(194, 194, 194)')
  })

  test('color', async () => {
    const wrapper = mount(() => <UserHead color="rgb(194, 194, 194)"></UserHead>)
    expect(wrapper.find('.tiny-user-head__portrait').attributes().style).contains('color: rgb(194, 194, 194)')
  })

  test('message-total', async () => {
    const wrapper = mount(() => <UserHead message-total={100}></UserHead>)
    expect(wrapper.find('.tiny-user-head__message').text()).toEqual('100')
  })

  test('message-type', async () => {
    const wrapper = mount(() => <UserHead message-total={100} message-type="basic"></UserHead>)
    expect(wrapper.find('.tiny-user-head__message').classes()).toContain('basic')
  })

  test('message-upper-limit', async () => {
    // 消息总数大于上限
    const overLimitWrapper = mount(() => <UserHead message-total={100} message-upper-limit={99}></UserHead>)
    expect(overLimitWrapper.find('.tiny-user-head__message').text()).toBe('99+')
    // 消息总数小于上限
    const underLimitWrapper = mount(() => <UserHead message-total={50} message-upper-limit={99}></UserHead>)
    expect(underLimitWrapper.find('.tiny-user-head__message').text()).toBe('50')
  })

  test('min', async () => {
    const wrapper = mount(() => <UserHead min></UserHead>)
    expect(wrapper.find('.tiny-user-head__portrait').classes()).toContain('min')
  })

  test('round', async () => {
    const wrapper = mount(() => <UserHead round></UserHead>)
    expect(wrapper.find('.tiny-user-head__portrait').classes()).toContain('round')
  })

  // type 设置头像类型，icon|image|label 可选, 该属性的可选值为 icon / image / label
  test.each([
    ['icon', 'icon type should have the proper class'],
    ['image', 'image type should have the proper class'],
    ['label', 'label type should have the proper class']
  ])('type %s', async (type, _description) => {
    const wrapper = mount(() => <UserHead type={type}></UserHead>)
    expect(wrapper.find('.tiny-user-head__portrait').classes()).toContain(type)
  })

  // value 设置type=icon 时为图标类名，type=label时为字体串，type=image时为资源路径
  test('value', async () => {
    const tinyIconSmile = iconSmile()
    const iconWrapper = mount(() => <UserHead type="icon" modelValue={tinyIconSmile}></UserHead>)
    expect(iconWrapper.find('.tiny-svg').exists()).toBeTruthy()

    const labelWrapper = mount(() => <UserHead type="label" modelValue="文字"></UserHead>)
    expect(labelWrapper.find('span').exists()).toBeTruthy()
    expect(labelWrapper.find('span').text()).toBe('文字')

    const imageWrapper = mount(() => <UserHead type="image" modelValue="/static/images/mountain.png"></UserHead>)
    expect(imageWrapper.find('.tiny-user-head__portrait').attributes().style).contains(
      'background-image: url(/static/images/mountain.png)'
    )
  })
  /**
   * slots
   */
  test('default slot', async () => {
    const wrapper = mount(() => (
      <UserHead>
        {{
          default: () => <div id="mine_content">自定义插槽内容</div>
        }}
      </UserHead>
    ))
    await nextTick()
    expect(wrapper.find('#mine_content').text()).contain('自定义插槽内容')
  })
})
