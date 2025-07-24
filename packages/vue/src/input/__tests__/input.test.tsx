import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Input from '@opentiny/vue-input'
import { nextTick } from 'vue'

let value = ''
const originalTypes = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week'
]
const sizes = ['medium', 'small', 'mini']

describe('PC Mode', () => {
  const mount = mountPcMode

  test('maxlength', async () => {
    const wrapper = mount(() => <Input v-model={value} maxlength={5}></Input>)
    expect(wrapper.find('input').attributes().maxlength).toBe('5')
  })

  test('events', async () => {
    const focus = vi.fn()
    const wrapper = mount(() => <Input v-model={value} onFocus={focus}></Input>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(focus).toHaveBeenCalled()
  })

  // 可通过 clearable 属性设置输入框显示清空图标按钮
  test('clearable 输入框值为空时不展示清空图标', async () => {
    const wrapper = mount(() => <Input v-model={value} clearable></Input>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(wrapper.find('.tiny-input__clear').exists()).toBeFalsy()
  })

  test('clearable 输入框值不为空时展示清空图标', async () => {
    value = 'test'
    const wrapper = mount(() => <Input v-model={value} clearable></Input>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(wrapper.find('.tiny-input__clear').exists()).toBeTruthy()
  })

  test('clearable 点击清空图标清空输入框值', async () => {
    value = 'test'
    const wrapper = mount(() => <Input v-model={value} clearable></Input>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    await wrapper.find('.tiny-input__clear').trigger('click')
    expect(value).toBe('')
  })

  // 当 type 为 password 时，可通过 show-password 属性设置输入框显示密码显示/隐藏切换图标按钮
  test('show-password', async () => {
    const wrapper = mount(() => <Input v-model={value} type="password" show-password></Input>)
    expect(wrapper.find('input').attributes().type).toBe('password')

    await wrapper.find('.tiny-input__icon').trigger('click')
    await nextTick()

    expect(wrapper.find('input').attributes().type).toBe('text')
  })

  // 通过对应的 type 属性，可以设置为对应的类型。默认为 text，可选值为 text，textarea 和其他 原生 input 的 type 值
  test('type default', () => {
    const wrapper = mount(() => <Input v-model={value}></Input>)
    expect(wrapper.find('input').attributes().type).toBe('text')
  })

  originalTypes.forEach((type) => {
    test(`type = ${type}`, () => {
      const wrapper = mount(() => <Input v-model={value} type={type}></Input>)
      expect(wrapper.find('input').attributes().type).toBe(type)
    })
  })

  test('type = textarea', () => {
    const wrapper = mount(() => <Input v-model={value} type="textarea"></Input>)
    expect(wrapper.find('textarea').exists()).toBeTruthy()
  })

  // 可通过 size 属性设置尺寸大小，可选值：medium / small / mini。注意：只在 type!="textarea" 时有效
  sizes.forEach((size) => {
    test(`size = ${size}`, () => {
      const wrapper = mount(() => <Input v-model={value} size={size}></Input>)
      expect(wrapper.find('.tiny-input').classes()).toContain('tiny-input-' + size)
    })
  })

  // 可通过 form 属性设置原生属性 form
  // TODO: does not work as expected
  test.skip('form', () => {
    const wrapper = mount(() => (
      <form id="form">
        <Input v-model={value} form="form"></Input>
      </form>
    ))
    expect(wrapper.find('input').attributes().form).toBe('form')
  })

  // 可设置 name disabled readonly等原生属性
  test('name', () => {
    const wrapper = mount(() => <Input v-model={value} name="name" disabled readonly></Input>)
    expect(wrapper.find('input').attributes().name).toBe('name')
  })

  test('disabled', () => {
    const wrapper = mount(() => <Input v-model={value} disabled></Input>)
    expect(wrapper.find('input').attributes().disabled).toBe('')
  })

  test('readonly', () => {
    const wrapper = mount(() => <Input v-model={value} readonly></Input>)
    expect(wrapper.find('input').attributes().readonly).toBe('')
  })

  // 可通过 label 属性设置输入框关联的 label 文字
  test('label', async () => {
    const wrapper = mount(() => <Input v-model={value} label="label"></Input>)
    expect(wrapper.find('input').attributes()['aria-label']).toBe('label')
  })

  // 可通过 prefix-icon 属性设置输入框头部图标
  test('prefix-icon', () => {
    const wrapper = mount(() => <Input v-model={value} prefix-icon="TinyIconCalendar"></Input>)
    expect(wrapper.find('.tiny-input__prefix').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-input__icon').exists()).toBeTruthy()
  })

  // 可通过 suffix-icon 属性设置输入框尾部图标
  test('suffix-icon', () => {
    const wrapper = mount(() => <Input v-model={value} suffix-icon="TinyIconCalendar"></Input>)
    expect(wrapper.find('.tiny-input__suffix').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-input__icon').exists()).toBeTruthy()
  })

  // 可通过 resize 属性设置文本域的缩放。可选值：none / both / horizontal / vertical。注意：只在 type="textarea" 时有效
  test('resize', () => {
    const wrapper = mount(() => <Input v-model={value} type="textarea" resize="none"></Input>)
    expect(wrapper.find('textarea').attributes().style).toContain('resize: none;')
  })

  // 可通过 rows 属性设置文本域显示行数。注意：只在 text="textarea" 时有效
  test('rows', () => {
    const wrapper = mount(() => <Input v-model={value} type="textarea" rows={5}></Input>)
    expect(wrapper.find('textarea').attributes().rows).toBe('5')
  })

  // 可通过 cols 属性设置文本域显示宽度。注意：只在 text="textarea" 时有效
  test('cols', () => {
    const wrapper = mount(() => <Input v-model={value} type="textarea" cols={5}></Input>)
    expect(wrapper.find('textarea').attributes().cols).toBe('5')
  })

  // 可通过 autosize 属性设置文本域自适应内容高度。可传入对象，如{ minRows: 2, maxRows: 6 }。注意：只对 type="textarea" 有效
  test.todo('autosize')

  // 可通过 tabindex 属性设置输入框的 tabindex
  test('tabindex', () => {
    const wrapper = mount(() => <Input v-model={value} tabindex={5}></Input>)
    expect(wrapper.find('input').attributes().tabindex).toBe('5')
  })

  // 配置 append slot，设置输入框后置内容，注意：只对 type="text" 有效
  test('slot-append', () => {
    const wrapper = mount(() => <Input v-model={value} v-slots={{ append: () => <>Http://</> }}></Input>)
    expect(wrapper.find('.tiny-input-group__append').text()).toBe('Http://')
  })

  // 配置 prepend slot，设置输入框前置内容，注意：只对 type="text" 有效
  test('slot-prepend', () => {
    const wrapper = mount(() => <Input v-model={value} v-slots={{ prepend: () => <>Http://</> }}></Input>)
    expect(wrapper.find('.tiny-input-group__prepend').text()).toBe('Http://')
  })

  // blu配置 prefix slot，设置输入框头部内容，注意：只对 type="text" 有效r事件
  test('slot-prefix', () => {
    const wrapper = mount(() => <Input v-model={value} v-slots={{ prefix: () => <>Http://</> }}></Input>)
    expect(wrapper.find('.tiny-input__prefix').text()).toBe('Http://')
  })

  // 配置 suffix slot，设置输入框尾部内容，注意：只对 type="text" 有效
  test('slot-suffix', () => {
    const wrapper = mount(() => <Input v-model={value} v-slots={{ suffix: () => <>Http://</> }}></Input>)
    expect(wrapper.find('.tiny-input__suffix').text()).toBe('Http://')
  })

  // 可通过 max 属性设置输入框最大值。max 是原生属性
  test('max', async () => {
    const wrapper = mount(() => <Input v-model={value} max={5}></Input>)
    expect(wrapper.find('input').attributes().max).toBe('5')
  })

  // 可通过 min 属性设置输入框最大值。min 是原生属性
  test('min', async () => {
    const wrapper = mount(() => <Input v-model={value} min={5}></Input>)
    expect(wrapper.find('input').attributes().min).toBe('5')
  })

  // 可通过 show-word-limit 属性设置是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效
  test('show-word-limit', () => {
    const wrapper = mount(() => <Input v-model={value} show-word-limit maxlength={10}></Input>)
    expect(wrapper.find('.tiny-input__count').text()).toBe('0/10')
  })

  // 可通过 counter 属性设置显示输入框字符计数器
  test('counter', async () => {
    const wrapper = mount(() => <Input v-model={value} counter></Input>)
    expect(wrapper.find('.tiny-input__count').text()).toBe('0')
  })

  test('counter 输入框输入字符时计数器增加', async () => {
    value = 'test'
    const wrapper = mount(() => <Input v-model={value} counter></Input>)
    expect(wrapper.find('.tiny-input__count').text()).toBe('4')
  })

  // 可通过 step 属性设置输入字段的合法数字间隔。step 是原生属性
  test('step', async () => {
    const wrapper = mount(() => <Input v-model={value} step={2}></Input>)
    expect(wrapper.find('input').attributes().step).toBe('2')
  })

  // 可通过 validate-event 属性设置输入时触发表单校验。通过 trigger 配置触发校验规则的方式，为 change 时，当输入框值改变即触发校验，为 blur 时则失焦后触发校验
  test.todo('validate-event')

  // 可通过 autofocus 属性设置自动获取焦点。autofocus 是原生属性
  test.todo('autofocus')

  // 可通过 autocomplete 属性设置自动补全，默认值为 off ，可选 on
  test.todo('autocomplete')
})
