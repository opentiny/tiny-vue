import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import IpAddress from '@opentiny/vue-ip-address'
import { nextTick } from 'vue'

let value = ''

describe('PC Mode', () => {
  const mount = mountPcMode

  // attrs
  test('readonly', async () => {
    const wrapper = mount(() => <IpAddress v-model={value} readonly={true}></IpAddress>)
    expect(wrapper.find('input').attributes()).toHaveProperty('readonly')
  })

  test.todo('delimiter ，设置IP段之间的分隔符，默认为 "." ')

  test.todo('size ,设置组件大小;该属性的可选值为 medium / small / mini')

  test.todo('disabled ,设置文本的禁用属性，默认为 false ')

  test.todo('type ，设置IpAddress框的类型，默认是IPv4，当为IPv6时，只有一个IP端输入框，无分隔符')

  test.todo('value ，设置文本显示的默认值')

  test('invalid value in ipv6', async () => {
    value = '127.0.0.1'
    const wrapper = mount(() => <IpAddress v-model={value} type={'ipv6'} />)
    const values = wrapper.findAll('input').map((inputEl) => inputEl.element.value)
    expect(values).toHaveLength(8)
    expect(values).toEqual(Array.from({ length: 8 }, () => ''))
  })

  test('invalid value in ipv4', async () => {
    value = 'fe80::204:61ff:fe9d:f156'
    const wrapper = mount(() => <IpAddress v-model={value} />)
    const values = wrapper.findAll('input').map((inputEl) => inputEl.element.value)
    expect(values).toHaveLength(4)
    expect(values).toEqual(Array.from({ length: 4 }, () => ''))
  })

  // slots
  test('default slot', async () => {
    const wrapper = mount(() => (
      <IpAddress
        v-model={value}
        v-slots={{
          default: () => <i>--</i>
        }}
      />
    ))
    expect(wrapper.find('i').text()).toBe('--')
  })

  // events
  test('events', async () => {
    const focus = vi.fn()
    const wrapper = mount(() => <IpAddress v-model={value} onFocus={focus} />)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(focus).toHaveBeenCalled()
  })
})
