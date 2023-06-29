import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect, vi } from 'vitest'
import TextPopup from '@opentiny/vue-text-popup'

describe('PC Mode', () => {
  const mount = mountPcMode
  const value = ''
  // attrs
  test('render test & readonly', async () => {
    const wrapper = mount(() => <TextPopup readonly={true}> </TextPopup>)
    expect(wrapper.find('.tiny-text-popup').exists()).toBe(true)
    expect(wrapper.vm.$el.children[0].style.display).not.toEqual('none')
    expect(wrapper.vm.$el.children[1].style.display).toEqual('none')
  })

  test('placeholder', async () => {
    const wrapper = mount(() => <TextPopup placeholder="提示文字"> </TextPopup>)
    expect(wrapper.find('.tiny-text-popup').exists()).toBe(true)
    expect(wrapper.vm.$el.children[0].style.display).not.toEqual('none')
    expect(wrapper.vm.$el.children[1].style.display).toEqual('none')
    expect(wrapper.vm.$el.children[0].placeholder).toEqual('提示文字')
  })
  
  test.todo('width ,设置输入框宽度，默认值为150')

  test.todo('value ,绑定的值,设置后会在输入框中出现')

  test.todo('separtor ,设置分隔符，在文本框中输入后回车就是分隔符的位置')

 
})
