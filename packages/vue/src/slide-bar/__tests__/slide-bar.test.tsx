import SlideBar from '@opentiny/vue-slide-bar'
import { describe, expect, test, vi } from 'vitest'
import { mountPcMode } from '@opentiny-internal/vue-test-utils'

describe('PC Mode', () => {
  const mount = mountPcMode

  const slideBarMockData = [
    { title: 'a', lang: 'en_US' },
    { title: 'b', lang: 'zh-CN' },
    { title: 'c', lang: 'en_US' },
    { title: 'd', lang: 'en_US' },
    { title: 'e', lang: 'en_US' },
    { title: 'f', lang: 'en_US' },
    { title: 'g', lang: 'en_US' },
    { title: 'h', lang: 'en_US' },
    { title: 'i', lang: 'en_US' }
  ]

  const _mount = (
    props: any = {}
  ) => {
    return mount(() => (
        <SlideBar modelValue={slideBarMockData} {...props}></SlideBar>
    ))
  }

  /**
   * attrs
   */
  test('value', async () => {
    const wrapper = _mount()
    const slideBar = wrapper.findComponent({ name : 'TinySlideBar' })
    expect(slideBar.vm.modelValue.length).toBe(9)
  })

  test.todo('init-blocks 初始时需要显示的块数')

  test.todo('wheel-blocks 鼠标滚轮上下滚动的时候，滚动的块数长度。默认为 1')

  test.todo('tag 设置组件的 Dom 标签。默认值为 ul')

  test.todo('sub-tag 设置组件的子级 Dom 标签。默认为 li')

  /**
   * slots
   */
  test('default slot', async () => {
    const wrapper = mount(() => (
        <SlideBar modelValue={slideBarMockData}>
            {{
                default: ({slotData}) =>
                    <div>
                        <span>标题：{slotData.title}</span>
                        <div>语言：{slotData.lang}</div>
                    </div>
            }}
        </SlideBar>
    ))
    const items = wrapper.findAll('.tiny-slide-bar__list > li')
    expect(items.length).toBe(9)
  })

  /**
   * events
   */
  test('before-click', async () => {
    const beforeClickHandler = vi.fn()
    const wrapper = _mount({
        onBeforeClick: beforeClickHandler
    })
    const item = wrapper.find('.tiny-slide-bar__list > li')
    await item.trigger('click')
    expect(beforeClickHandler).toBeCalled()
  })

  test.todo('click 滑动块点击事件;data: 点击的滑块数据，index: 点击的滑块索引值')
})
