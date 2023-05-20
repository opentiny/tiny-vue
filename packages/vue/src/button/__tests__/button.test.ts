import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Button from '@opentiny/vue-button'
import { IconLoading, IconSearch } from '@opentiny/vue-icon'

const AXIOM = 'Hello OpenTiny'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('primary type', () => {
    const wrapper = mount(Button, { props: { type: 'primary' } })

    expect(wrapper.classes()).toContain('tiny-button--primary')
  })

  test('success type', () => {
    const wrapper = mount(Button, { props: { type: 'success' } })

    expect(wrapper.classes()).toContain('tiny-button--success')
  })

  test('info type', () => {
    const wrapper = mount(Button, { props: { type: 'info' } })

    expect(wrapper.classes()).toContain('tiny-button--info')
  })

  test('warning type', () => {
    const wrapper = mount(Button, { props: { type: 'warning' } })

    expect(wrapper.classes()).toContain('tiny-button--warning')
  })

  test('danger type', () => {
    const wrapper = mount(Button, { props: { type: 'danger' } })

    expect(wrapper.classes()).toContain('tiny-button--danger')
  })

  test('text type', () => {
    const wrapper = mount(Button, { props: { type: 'text' } })

    expect(wrapper.classes()).toContain('tiny-button--text')
  })

  test('icon', () => {
    const Search = IconSearch()
    const wrapper = mount(Button, { props: { icon: Search } })

    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })

  test('nativeType', () => {
    const wrapper = mount(Button, { props: { nativeType: 'submit' } })

    expect(wrapper.attributes('type')).toBe('submit')
  })

  test('loading', () => {
    const Loading = IconLoading()
    const wrapper = mount(Button, { props: { loading: true } })

    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.findComponent(Loading).exists()).toBeTruthy()
  })

  test('size', () => {
    const wrapper = mount(Button, { props: { size: 'large' } })

    expect(wrapper.classes()).toContain('tiny-button--large')
  })

  test('plain', () => {
    const wrapper = mount(Button, { props: { plain: true } })

    expect(wrapper.classes()).toContain('is-plain')
  })

  test('round', () => {
    const wrapper = mount(Button, { props: { round: true } })
    expect(wrapper.classes()).toContain('is-round')
  })

  test('circle', () => {
    const wrapper = mount(Button, { props: { circle: true } })

    expect(wrapper.classes()).toContain('is-circle')
  })

  test('render text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM
      }
    })

    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('handle click', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('handle click inside', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span class="inner-slot"></span>'
      }
    })

    await wrapper.find('.inner-slot').trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('loading implies disabled', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM
      },
      props: {
        loading: true
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  test('disabled', async () => {
    const wrapper = mount(Button, { props: { disabled: true } })

    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  test.skip('loading icon', () => {

  })
})

