import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Form from '@opentiny/vue-form'
import FormItem from '@opentiny/vue-form-item'
import Input from '@opentiny/vue-input'
import { nextTick } from 'vue'

const createData = {
  quantity: '1'
}

describe('PC Mode', () => {
  const mount = mountPcMode
  
  test('label-width', async () => {
    const wrapper = mount(() => <Form label-width="100px">
      <FormItem label='数字'>
        <Input v-model={createData.quantity}></Input>
      </FormItem>
    </Form>)
    expect(wrapper.find('.tiny-form-item__content').attributes().style).toBe('margin-left: 100px;')
  })


  test('slot', async () => {
    const action = 'http://localhost:3000/api/upload'
    const wrapper = mount(() => <Form label-width="100px">
      <FormItem label='数字' v-slots={{
        label: () => <>必填</>
      }}>
        <Input v-model={createData.quantity}></Input>
      </FormItem>
    </Form>)
    expect(wrapper.find('.tiny-form-item__label').text()).toBe('必填')
  })

  test('events', async () => {
    const rules = {
      quantity: { required: true }
    }

    const wrapper = mount(() => <Form ref="form" label-width="100px" model={createData} rules={rules}>
      <FormItem label='quantity' prop="quantity">
        <Input v-model={createData.quantity}></Input>
      </FormItem>
    </Form>)
    const form = wrapper.findComponent(Form).componentVM
    await nextTick()

    const valid = await form
      .validate()
      .then(() => true)
      .catch(() => false)
    expect(valid).toBe(true)
  })

  test.todo('base 基本用法')
  test.todo('inline 行内表单')
  test.todo('trigger 通过trigger配置触发校验规则的方式')
  test.todo('validator 自定义校验规则')
  test.todo('label-align & label-position 通过配置label-align属性,设置是否文本对齐,通过配置label-position属性, 设置文本标签的位置')
  test.todo('validate-position 自定义错误提示出现的位置')
  test.todo('size 设置表单尺寸')
  test.todo('clearValidate 移除表单项的校验结果')
  test.todo('novalid-tip 隐藏表单项校验提示')
  test.todo('validate-type 校验提示的形式')
  test.todo('disabled 设置表单禁用')
  test.todo('Row & Col 通过配合Row和Col组件来实现复杂布局')
  test.todo('分组表单 将多个表单组合在一起')
})
