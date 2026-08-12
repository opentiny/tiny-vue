import { mountMobilefirstMode, mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Form from '@opentiny/vue-form'
import FormItem from '@opentiny/vue-form-item'
import Input from '@opentiny/vue-input'

describe('PC Mode', () => {
  test('should remove built-in layout while preserving validation when no-style is true', async () => {
    const model = { name: '' }
    const rules = { name: [{ required: true, message: 'Name is required' }] }
    const wrapper = mountPcMode({
      components: { TinyForm: Form, TinyFormItem: FormItem, TinyInput: Input },
      data: () => ({ model, rules }),
      template: `
        <tiny-form :model="model" :rules="rules">
          <tiny-form-item label="Name" prop="name" no-style>
            <tiny-input v-model="model.name"></tiny-input>
          </tiny-form-item>
        </tiny-form>
      `
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.tiny-form-item').exists()).toBe(false)
    expect(wrapper.find('.tiny-form-item__label').exists()).toBe(false)
    expect(wrapper.find('.tiny-form-item__content').exists()).toBe(false)
    expect(wrapper.findComponent(Input).exists()).toBe(true)

    const formWrapper = wrapper.findComponent(Form)
    const form = formWrapper.componentVM || formWrapper.vm
    const valid = await form
      .validate()
      .then(() => true)
      .catch(() => false)

    expect(valid).toBe(false)
  })
})

describe('Mobile-first Mode', () => {
  test('should remove built-in layout while preserving validation when no-style is true', async () => {
    const model = { name: '' }
    const rules = { name: [{ required: true, message: 'Name is required' }] }
    const wrapper = mountMobilefirstMode({
      components: { TinyForm: Form, TinyFormItem: FormItem, TinyInput: Input },
      data: () => ({ model, rules }),
      template: `
        <tiny-form :model="model" :rules="rules">
          <tiny-form-item prop="name" no-style>
            <span data-testid="content">Content</span>
            <tiny-input v-model="model.name"></tiny-input>
          </tiny-form-item>
        </tiny-form>
      `
    })

    expect(wrapper.find('[data-tag="tiny-form-item"]').exists()).toBe(false)
    expect(wrapper.find('[data-tag="tiny-form-item-inline"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="content"]').text()).toBe('Content')
    expect(wrapper.findComponent(Input).exists()).toBe(true)

    const formWrapper = wrapper.findComponent(Form)
    const form = formWrapper.componentVM || formWrapper.vm
    const valid = await form
      .validate()
      .then(() => true)
      .catch(() => false)

    expect(valid).toBe(false)
  })
})
