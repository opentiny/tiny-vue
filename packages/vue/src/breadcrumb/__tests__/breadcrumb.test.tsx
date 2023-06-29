import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import Breadcrumb from '@opentiny/vue-breadcrumb'

describe('PC Mode', () => {
  const mount = mountPcMode

  // attrs
  test('render test & options', async () => {
    const options = [
      {
        label: '导航1',
        to: { path: '/' }
      },
      {
        label: '导航2',
        to: { path: '/breadcrumb' }
      },
      {
        label: '导航3',
        replace: true
      }
    ]
    const wrapper = mount(() => <Breadcrumb options={options}></Breadcrumb>)
    expect(wrapper.find('.tiny-breadcrumb').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-breadcrumb__item').exists()).toBeTruthy()
    expect(wrapper.findAll('.tiny-breadcrumb__item')).toHaveLength(3)
    expect(wrapper.find('.tiny-breadcrumb__item .tiny-breadcrumb__inner').text()).toBe('导航1')
  })

  test.todo('separator-icon, 设置图标类的分隔符')

  test.todo('separator, 设置分隔符')

  test.todo('text-field, 指定面包屑的显示字段,结合options使用,默认为label')
})
