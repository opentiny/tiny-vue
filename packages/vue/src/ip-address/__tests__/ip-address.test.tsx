import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import IpAddress from '@opentiny/vue-ip-address'
import { nextTick } from 'vue'
import { iconBoat } from '@opentiny/vue-icon'

let value = ''

describe('PC Mode', () => {
  const mount = mountPcMode

  // attrs
  test('readonly', async () => {
    const wrapper = mount(() => <IpAddress v-model={value} readonly={true}></IpAddress>)
    expect(wrapper.find('input').attributes()).toHaveProperty('readonly')
  })

  describe('delimiter ，设置IP段之间的分隔符', () => {
    test('默认为 "." ', async () => {
      const wrapper = mount(() => <IpAddress v-model={value} />)
      expect(wrapper.findAll('svg')).toHaveLength(3)
    })

    test('设置为 "-" ', async () => {
      const wrapper = mount(() => (
        <IpAddress v-model={value}>
          <span>-</span>
        </IpAddress>
      ))
      expect(wrapper.findAll('span').map((i) => i.text())).toEqual(['-', '-', '-'])
    })

    test('设置为 icon', async () => {
      const IconBoat = iconBoat()
      const wrapper = mount(() => <IpAddress v-model={value} delimiter={IconBoat} />)
      expect(wrapper.findAll('svg')).toHaveLength(3)
    })
  })

  describe('size, 设置组件大小', () => {
    ;['medium', 'small', 'mini'].forEach((size) => {
      test(size, async () => {
        const wrapper = mount(() => <IpAddress v-model={value} size={size} />)
        expect(wrapper.find('.tiny-ip-address__input').classes()).toContain(size)
      })
    })
  })

  test('disabled ,设置文本的禁用属性，默认为 false ', async () => {
    const wrapper = mount(() => <IpAddress v-model={value} disabled={true} />)
    expect(wrapper.find('input').attributes()).toHaveProperty('disabled')
  })

  test('value ，设置文本显示的默认值', async () => {
    value = '127.0.0.1'
    const wrapper = mount(() => <IpAddress v-model={value} />)
    expect(wrapper.findAll('input').map((inputEl) => inputEl.element.value)).toEqual(['127', '0', '0', '1'])
  })

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
