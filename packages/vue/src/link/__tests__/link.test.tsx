import Link from '@opentiny/vue-link'
import { describe, expect, test } from 'vitest'
import { iconEdit } from '@opentiny/vue-icon'
import { mountPcMode } from '@opentiny-internal/vue-test-utils'

const iconTest = 'IconDel()'
const IconEdit = iconEdit()

describe('PC Mode', () => {
  const mount = mountPcMode
  const createLink = (type) => {
    return mount(() => <Link underline={false} type={type}></Link>)
  }
  /**
   * attrs
   */
  test('href', async () => {
    const wrapper = mount(() => <Link underline={false} href="localhost:3000/#/zh-CN/index"></Link>)
    expect(wrapper.find('.tiny-link').attributes().href).toBe('localhost:3000/#/zh-CN/index')
  })

  // type 该属性的可选值为 primary / success / warning / danger / info。默认为 default
  test.each([
    ['primary', 'Primary link should have the proper class'],
    ['success', 'Success link should have the proper class'],
    ['warning', 'Warning link should have the proper class'],
    ['danger', 'Danger link should have the proper class'],
    ['info', 'Info link should have the proper class']
  ])('type %s', (type, description) => {
    const wrapper = createLink(type)
    expect(wrapper.find(`.tiny-link--${type}`).exists()).toBe(true)
  })

  test('underline 是否下划线。默认为 true', async () => {
    // undeline=true && disabled=false
    let wrapper = mount(() => <Link></Link>)
    expect(wrapper.find('.is-underline').exists()).toBe(true)

    // undeline=false && disabled=true
    wrapper = mount(() => <Link disabled></Link>)
    expect(wrapper.find('.is-underline').exists()).toBe(false)

    // undeline=true && disabled=true
    wrapper = mount(() => <Link disabled></Link>)
    expect(wrapper.find('.is-underline').exists()).toBe(false)

    // undeline=false && disabled=false
    wrapper = mount(() => <Link underline={false}></Link>)
    expect(wrapper.find('.is-underline').exists()).toBe(false)
  })

  test('非disabled下，可以触发click事件', async () => {
    const wrapper = mount(() => <Link>TEST</Link>)

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  test('disabled 是否禁用状态。默认为 false', async () => {
    const wrapper = mount(() => <Link disabled></Link>)

    expect(wrapper.classes()).toContain('is-disabled')
    expect(wrapper.attributes('href')).toBeUndefined()
  })

  test('icon 图标类名', async () => {
    const wrapper = mount(() => <Link icon={IconEdit}></Link>)
    expect(wrapper.findComponent(IconEdit).exists()).toBe(true)
    expect(wrapper.find('.tiny-svg-size.tiny-link-svg').exists()).toBe(true)
  })

  /**
   * slots
   */
  test('icon 图标插槽', async () => {
    const wrapper = mount(() => (
      <Link
        v-slots={{
          icon: () => iconTest
        }}></Link>
    ))
    expect(wrapper.text()).toContain(iconTest)
  })

  test('default slot', async () => {
    const wrapper = mount(() => (
      <Link
        v-slots={{
          default: () => iconTest
        }}></Link>
    ))
    expect(wrapper.text()).toContain(iconTest)
  })
})
