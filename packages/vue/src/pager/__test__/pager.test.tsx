import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Pager from '@opentiny/vue-pager'

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

  test.todo('number 设置分页组件为number渲染模式')
  test.todo('fixed 设置分页组件为fixed渲染模式')
  test.todo('simple 设置分页组件为simple渲染模式')
  test.todo('complete 设置分页组件为complete渲染模式')
  test.todo('page-count 设置分页组件的总页数')
  test.todo('size-change 每页条数改变时触发size-change事件')
  test.todo('prev-click 切换至前一页时触发prev-click事件')
  test.todo('next-click 切换至后一页时触发next-click事件')
  test.todo('before-page-change 切换分页前事件')
  test.todo('popper-append-to-body 分页下拉框元素是否追加到body元素节点下')
  test.todo('popper-class 自定义分页下拉框的类名')
  test.todo('pager-count 设置页码数量')
  test.todo('page-size 设置每页显示数量')
  test.todo('hide-on-single-page 只有一页时隐藏分页')
  test.todo('prev-text、next-text 自定义上下页按钮文本')
  test.todo('Grid 表格分页，服务需要自行实现')
  test.todo('size 定义分页尺寸大小，可选值有 mini')
  test.todo('disabled 禁用分页所有功能')
})
