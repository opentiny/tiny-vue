import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import Breadcrumb from '@opentiny/vue-breadcrumb'
import { IconBoat } from '@opentiny/vue-icon'

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

  test('separator-icon', () => {


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
    const wrapper = mount(
      () => <Breadcrumb options={options} separatorIcon={IconBoat()}></Breadcrumb>,
    )
    expect(wrapper.find('.tiny-breadcrumb__separator-cls').exists()).toBeTruthy()
    expect(wrapper.findAll('.tiny-breadcrumb__separator-cls')).toHaveLength(3)
  })

  test('separator', () => {

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
    const wrapper = mount(
      () => <Breadcrumb options={options} separator='/'></Breadcrumb>,
    )

    expect(wrapper.find('.tiny-breadcrumb__separator').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-breadcrumb__separator').text()).toBe('/')
  })

  test('text-field, 指定面包屑的显示字段,结合options使用,默认为label', () => {

    const options = [
      {
        name: '导航1',
        to: { path: '/' }
      },
      {
        name: '导航2',
        to: { path: '/breadcrumb' }
      },
      {
        name: '导航3',
        replace: true
      }
    ]
    const wrapper = mount(
      () => <Breadcrumb options={options} separator='/' textField='name'></Breadcrumb>,
    )

    expect(wrapper.find('.tiny-breadcrumb').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-breadcrumb__item').exists()).toBeTruthy()
    expect(wrapper.findAll('.tiny-breadcrumb__item')).toHaveLength(3)
    expect(wrapper.find('.tiny-breadcrumb__item .tiny-breadcrumb__inner').text()).toBe('导航1')
  })
})
