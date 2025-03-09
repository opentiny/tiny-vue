import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Pager from '@opentiny/vue-pager'
import { ref, nextTick } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('base 基本用法', () => {
    const wrapper = mount(() => <Pager layout="prev, pager, next"></Pager>)
    expect(wrapper.find('.tiny-pager__btn-prev').exists()).toBe(true)
    expect(wrapper.find('.tiny-pager__group').exists()).toBe(true)
    expect(wrapper.find('.tiny-pager__btn-next').exists()).toBe(true)
  })

  test('current-change 当前页码发生改变时，触发current-change事件', async () => {
    const currentChange = vi.fn()
    const wrapper = mount(() => <Pager layout="prev, pager, next" onCurrentChange={currentChange} total={1000}></Pager>)
    const nextBtn = wrapper.find('.tiny-pager__btn-next')
    await nextBtn.trigger('click')
    expect(currentChange).toHaveBeenCalled()
  })

  test('layout 自定义分页布局', () => {
    const SlotContent = () => <span>默认插槽</span>
    const wrapper = mount(() => (
      <Pager layout="sizes,slot, prev, pager, next, jumper, ->, total" total={1000}>
        <SlotContent></SlotContent>
      </Pager>
    ))
    expect(wrapper.findComponent(SlotContent).exists()).toBe(true)
  })

  describe('align 设置分页组件对齐方式', () => {
    ;['left', 'center', 'right'].forEach((align) => {
      test(`对齐方式为${align}`, () => {
        const wrapper = mount(() => <Pager align={align} />)
        expect(wrapper.find('.tiny-pager').attributes('style')).toContain(`text-align: ${align}`)
      })
    })

    test('align 为响应式属性', async () => {
      const align = ref('left')
      const wrapper = mount(() => <Pager align={align.value} />)
      expect(wrapper.find('.tiny-pager').attributes('style')).toContain(`text-align: left`)
      align.value = 'center'
      await nextTick()

      expect(wrapper.find('.tiny-pager').attributes('style')).toContain(`text-align: center`)

      align.value = 'right'
      await nextTick()

      expect(wrapper.find('.tiny-pager').attributes('style')).toContain(`text-align: right`)
    })
  })

  test.todo('number 设置分页组件为number渲染模式')
  test.todo('fixed 设置分页组件为fixed渲染模式')
  test.todo('simple 设置分页组件为simple渲染模式')
  test.todo('complete 设置分页组件为complete渲染模式')
  test.todo('page-count 设置分页组件的总页数')
  test.skip('size-change 每页条数改变时触发size-change事件', async () => {
    const sizeChange = vi.fn()
    const wrapper = mount(() => <Pager onSizeChange={sizeChange} total={100} mode="number" />)
    wrapper.find('.tiny-pager__page-size-btn').trigger('click')
    await nextTick()
    const selected = document.querySelector('.is-selected')
    selected?.nextElementSibling?.click()
    await nextTick()
    expect(sizeChange).toHaveBeenCalledWith(20)
  })

  test.skip('prev-click 切换至前一页时触发prev-click事件', () => {
    const prevClick = vi.fn()
    const currentPage = ref(2)
    const wrapper = mount(() => <Pager onPrevClick={prevClick} currentPage={currentPage} />)
    wrapper.find('.tiny-pager__btn-prev').trigger('click')
    expect(prevClick).toHaveBeenCalledWith(1)
  })

  test('next-click 切换至后一页时触发next-click事件', () => {
    const nextClick = vi.fn()
    const wrapper = mount(() => <Pager onNextClick={nextClick} />)
    wrapper.find('.tiny-pager__btn-next').trigger('click')
    expect(nextClick).toHaveBeenCalledWith(2)
  })

  describe('before-page-change 切换分页前事件', () => {
    test('开启事件', () => {
      const beforePageChange = vi.fn()
      const wrapper = mount(() => <Pager onBeforePageChange={beforePageChange} isBeforePageChange pageSize={5} />)
      wrapper.find('.tiny-pager__btn-next').trigger('click')
      expect(beforePageChange).toHaveBeenCalled()
    })

    test('默认禁用', () => {
      const beforePageChange = vi.fn()
      const wrapper = mount(() => <Pager onBeforePageChange={beforePageChange} pageSize={5} />)
      wrapper.find('.tiny-pager__btn-next').trigger('click')
      expect(beforePageChange).not.toHaveBeenCalled()
    })
  })

  test('popper-append-to-body 分页下拉框元素是否追加到body元素节点下', () => {
    const wrapper = mount(() => <Pager popperAppendToBody={false} layout="sizes" />)
    wrapper.find('.tiny-pager__page-size-btn').trigger('click')
    expect(wrapper.find('.tiny-pager__selector-body').exists()).toBe(true)
  })

  test('popper-class 自定义分页下拉框的类名', () => {
    mount(() => <Pager popperClass="custom-pager" />)
    expect(document.querySelector('.custom-pager')).toBeDefined()
  })

  test('pager-count 设置页码数量', () => {
    const wrapper = mount(() => <Pager pagerCount={10} total={1000} />)
    expect(wrapper.findAll('.tiny-pager__pages > li:not(.quicknext)')).toHaveLength(10)
  })

  test('page-size 设置每页显示数量', () => {
    const wrapper = mount(() => <Pager mode="number" pageSize={100} />)
    expect(wrapper.find('.tiny-pager__page-size').text()).toBe('100')
  })

  test('hide-on-single-page 只有一页时隐藏分页', () => {
    const wrapper = mount(() => <Pager hideOnSinglePage />)
    expect(wrapper.find('.tiny-pager').exists()).toBe(false)
  })

  test('prev-text、next-text 自定义上下页按钮文本', () => {
    const wrapper = mount(() => <Pager prevText="上一页" nextText="下一页" />)
    expect(wrapper.find('.tiny-pager__btn-prev').text()).toBe('上一页')
    expect(wrapper.find('.tiny-pager__btn-next').text()).toBe('下一页')
  })

  test.todo('Grid 表格分页，服务需要自行实现')

  test('size 定义分页尺寸大小，可选值有 mini', () => {
    const wrapper = mount(() => <Pager size="mini" />)
    expect(wrapper.find('.tiny-pager').classes()).toContain('tiny-pager--mini')
  })

  test('disabled 禁用分页所有功能', () => {
    const wrapper = mount(() => <Pager disabled />)
    expect(wrapper.find('.tiny-pager').classes()).toContain('is-disabled')
  })
})
