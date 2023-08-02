import Carousel from '@opentiny/vue-carousel'
import CarouselItem from '@opentiny/vue-carousel-item'
import { describe, expect, test, vi } from 'vitest'
import { mountPcMode } from '@opentiny-internal/vue-test-utils'

describe('PC Mode', () => {
  const mount = mountPcMode

  const createCarouselItems = (count = 5, hasLabel = false) => {
    const list = Array.from({ length: count }, (_, index) => index + 1)
    return list.map((index) =>
        hasLabel ? <CarouselItem key={index}>{index}</CarouselItem> : <CarouselItem key={index}></CarouselItem>
    )
  }

  const _mount = (
    props: any = {},
    count?: number,
    hasLabel?: boolean,
    slot?: any
  ) => {
    return mount(() => (
        <div>
            <Carousel {...props} height='150px'>
                {createCarouselItems(count, hasLabel)}
                {slot || ''}
            </Carousel>
        </div>
    ), {
        attachTo: 'body'
    })
  }

  /**
   * attrs
   */
  test('render & arrow', async () => {
    const wrapper = _mount({
        arrow: 'always'
    })
    const carousel = wrapper.findComponent({ name: 'TinyCarousel' })
    expect(carousel.vm.arrow).toBe('always')
    expect(wrapper.find('.tiny-carousel__arrow').isVisible()).toBeTruthy()
    const items = wrapper.findAll('.tiny-carousel__item')
    expect(items.length).toBe(5)
  })

  test.todo('autoplay 是否自动切换。默认为 false')

  test.todo('height 走马灯的高度')

  test.todo('indicator-position 指示器的位置。该属性的可选值为 outside / none')

  test.todo('initial-index 初始状态激活的幻灯片的索引，从 0 开始。默认为 0')
  
  test.todo('interval 自动切换的时间间隔，单位为毫秒。默认为 3000')
  
  test.todo('show-title 是否显示标题。默认为 false')
  
  test.todo('trigger 指示器的触发方式，默认为 hover。该属性的可选值为 click。默认为 hover')
  
  test.todo('type 走马灯的类型；该属性的可选值为 horizontal / vertical / card。默认为 horizontal')
  
  test.todo('loop 是否循环显示。默认为 true')

  /**
   * slots
   */
  test('default slot', async () => {
    const wrapper = mount(() => <Carousel height='150px'><div class='custom-content'>自定义内容</div></Carousel>)
    const items = wrapper.find('.custom-content')
    expect(items.text()).contain('自定义内容')
  })

  /**
   * methods
   */
  test.todo('next 切换至下一张幻灯片')

  test.todo('prev 切换至上一张幻灯片')

  test.todo('setActiveItem 手动切换幻灯片')

  /**
   * events
   */
  test('change event', async () => {
    const changeHandler = vi.fn()
    const wrapper = _mount({
        arrow: 'always',
        onChange: changeHandler
    })
    const nextButton = wrapper.find('.tiny-carousel__arrow-right')
    await nextButton.trigger('click')
    expect(changeHandler).toBeCalled()

    const preButton = wrapper.find('.tiny-carousel__arrow-left')
    await preButton.trigger('click')
    expect(changeHandler).toBeCalled()
  })
})
