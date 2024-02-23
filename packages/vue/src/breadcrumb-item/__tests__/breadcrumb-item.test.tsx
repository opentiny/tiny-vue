import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect, vi } from 'vitest'
import Breadcrumb from '@opentiny/vue-breadcrumb'
import BreadcrumbItem from '@opentiny/vue-breadcrumb-item'

describe('PC Mode', () => {
  const mount = mountPcMode

  // attrs
  test('render test & label', async () => {
    const wrapper = mount(() => (
      <Breadcrumb>
        <BreadcrumbItem label="导航1"></BreadcrumbItem>
        <BreadcrumbItem label="导航2"></BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.tiny-breadcrumb').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-breadcrumb__item').exists()).toBeTruthy()
    expect(wrapper.findAll('.tiny-breadcrumb__item')).toHaveLength(2)
    expect(wrapper.find('.tiny-breadcrumb__item .tiny-breadcrumb__inner').text()).toBe('导航1')
  })

  test.todo('to, 路由跳转对象,通vue-router的to')

  test.todo('replace, 在使用 to 进行路由跳转时,启用 replace 将不会向 history 添加新记录,该属性的默认值为 false')

  // slots
  test('default slot', async () => {
    const wrapper = mount(() => (
      <Breadcrumb>
        <BreadcrumbItem>
          {{
            default: () => <span>default 插槽</span>
          }}
        </BreadcrumbItem>
        <BreadcrumbItem label="导航2"></BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.tiny-breadcrumb__item').exists()).toBeTruthy()
    expect(wrapper.findAll('.tiny-breadcrumb__item')).toHaveLength(2)
    expect(wrapper.find('.tiny-breadcrumb__item .tiny-breadcrumb__inner').text()).toBe('default 插槽')
  })

  // events
  test('change event', async () => {
    const handleSelect = vi.fn()
    const wrapper = mount(() => (
      <Breadcrumb onClick={handleSelect}>
        <BreadcrumbItem label="导航1"></BreadcrumbItem>
        <BreadcrumbItem label="导航2"></BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.tiny-breadcrumb__item').exists()).toBeTruthy()
    await wrapper.find('.tiny-breadcrumb__item').trigger('click')
    expect(handleSelect).toBeCalled()
  })
})
