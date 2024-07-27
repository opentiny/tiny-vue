import Button from '../../../src/components/Button.vue'
import { shallowMount } from '@vue/test-utils'

describe('~/src/components/Button.vue', () => {
  test('can mount', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
