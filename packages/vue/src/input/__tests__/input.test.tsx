import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Input from '@opentiny/vue-input'
import { nextTick } from 'vue'

let value = ''

describe('PC Mode', () => {
  const mount = mountPcMode
  
  test('maxlength', async () => {
    const wrapper = mount(() => <Input v-model={value} maxlength={5}></Input>)
    expect(wrapper.find('input').attributes().maxlength).toBe('5')
  })

  test('slot', async () => {
    const wrapper = mount(() => <Input v-model={value} v-slots={{
      prepend: () => <>Http://</>
    }}></Input>)
    expect(wrapper.find('.tiny-input-group__prepend').text()).toBe('Http://')
  })

  test('events', async () => {
    const focus = vi.fn()
    const wrapper = mount(() => <Input v-model={value} onFocus={focus}></Input>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(focus).toHaveBeenCalled()
  })

  // 可通过 clearable 属性设置输入框显示清空图标按钮
  test.todo('clearable')

  // 当 type 为 password 时，可通过 show-password 属性设置输入框显示密码显示/隐藏切换图标按钮
  test.todo('show-password')

  // 通过对应的 type 属性，可以设置为对应的类型。默认为 text，可选值为 text，textarea 和其他 原生 input 的 type 值
  test.todo('type')

  // 可通过 size 属性设置尺寸大小，可选值：medium / small / mini。注意：只在 type!="textarea" 时有效
  test.todo('size')

  // 可通过 form 属性设置原生属性 form
  test.todo('form')

  // 可设置 name disabled readonly等原生属性
  test.todo('name & disabled & readonly')

  // 可通过 label 属性设置输入框关联的 label 文字
  test.todo('label')

  // 可通过 prefix-icon 属性设置输入框头部图标
  test.todo('prefix-icon')

  // 可通过 suffix-icon 属性设置输入框尾部图标
  test.todo('suffix-icon')

  // 可通过 resize 属性设置文本域的缩放。可选值：none / both / horizontal / vertical。注意：只在 type="textarea" 时有效
  test.todo('resize')

  // 可通过 rows 属性设置文本域显示行数。注意：只在 text="textarea" 时有效
  test.todo('rows')

  // 可通过 cols 属性设置文本域显示宽度。注意：只在 text="textarea" 时有效
  test.todo('cols')

  // 可通过 autosize 属性设置文本域自适应内容高度。可传入对象，如{ minRows: 2, maxRows: 6 }。注意：只对 type="textarea" 有效
  test.todo('autosize')

  // 可通过 tabindex 属性设置输入框的 tabindex
  test.todo('tabindex')

  // 配置 append slot，设置输入框后置内容，注意：只对 type="text" 有效
  test.todo('slot-append')

  // blu配置 prefix slot，设置输入框头部内容，注意：只对 type="text" 有效r事件
  test.todo('slot-prefix')

  // 配置 suffix slot，设置输入框尾部内容，注意：只对 type="text" 有效
  test.todo('slot-suffix')

  // 可通过 max 属性设置输入框最大值。max 是原生属性
  test.todo('max')

   // 可通过 min 属性设置输入框最大值。min 是原生属性
   test.todo('min')

  // 可通过 show-word-limit 属性设置是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效
  test.todo('show-word-limit')

  // 可通过 counter 属性设置显示输入框字符计数器
  test.todo('counter')

  // 可通过 step 属性设置输入字段的合法数字间隔。step 是原生属性
  test.todo('step')

  // 可通过 validate-event 属性设置输入时触发表单校验。通过 trigger 配置触发校验规则的方式，为 change 时，当输入框值改变即触发校验，为 blur 时则失焦后触发校验
  test.todo('validate-event')

  // 可通过 autofocus 属性设置自动获取焦点。autofocus 是原生属性
  test.todo('autofocus')

  // 可通过 autocomplete 属性设置自动补全，默认值为 off ，可选 on 
  test.todo('autocomplete')
})
