import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Alert from '@opentiny/vue-alert'
import { iconBoat } from '@opentiny/vue-icon'

describe('PC Mode', () => {
  const mount = mountPcMode

  // attrs
  test('render test & type & size', async () => {
    const text = 'Winter is coming'
    const wrapper = mount(() => <Alert type="success" size="large" title={text} description="type 为 success" />)
    expect(wrapper.find('.tiny-alert__close').exists()).toBe(true)
    expect(wrapper.find('.tiny-alert__title').text()).toEqual(text)
    expect(wrapper.find('.tiny-alert').classes()).toContain('tiny-alert--large')
    expect(wrapper.find('.tiny-alert').classes()).toContain('tiny-alert--success')
  })

  test('icon', async () => {
    const text = 'Winter is coming'
    const wrapper = mount(() => <Alert type="success" icon={iconBoat()} title={text} description="type 为 success" />)
    expect(wrapper.find('.tiny-alert__icon').exists()).toBe(true)
  })

  test.todo('closable ,默认为true,设置后,警告不可关闭')

  test.todo('title , 设置警告的标题,在size为large时有效,默认根据 type 自动设置')

  test.todo('center ,默认为false ,设置后文字居中')

  test.todo('close-text , 关闭按钮自定义文本,设置后关闭图标被文本替换')

  test.todo('show-icon , 默认值为true,是否显示图标')

  // slots
  test('title slot', async () => {
    const text = 'Winter is coming'
    const wrapper = mount(() => (
      <Alert
        type="success"
        size="large"
        v-slots={{
          title: () => text
        }}
        description="type 为 success"
      />
    ))
    expect(wrapper.find('.tiny-alert__title').text()).toEqual(text)
  })

  test.todo('default slot,设置警告的提示内容')

  test.todo('description slot,设置自定义提示内容,size为large时生效')
})
