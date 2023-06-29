import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Popeditor from '@opentiny/vue-popeditor'

let value = ''

describe('PC Mode', () => {
  const mount = mountPcMode
  
  test('readonly', async () => {
    const wrapper = mount(() => <Popeditor readonly={true} ></Popeditor>)
    expect(wrapper.find('.tiny-popeditor-readonly').exists()).toBe(true)
  })

  test('disabled', async () => {
    const wrapper = mount(() => <Popeditor readonly={true} ></Popeditor>)
    expect(wrapper.find('.tiny-popeditor-readonly').exists()).toBe(true)
  })

  test.todo('modelValue / v-model ，绑定值')

  test.todo('placeholder ,占位符')

  test.todo('tabindex 设置是否可通过 Tab 键获焦及获焦顺序（readonly 属性设置为 false 时有效）')

  test.todo('remote-search 配置远程搜索')

  test.todo('before-reset 重置前的钩子函数')

  test.todo('resize ,是否显示弹框全屏按钮,默认值为false')

  test.todo('draggable ，设置弹出窗口是否可拖动，默认值为true')

  test.todo(
    'showOverflow ，popeditor 嵌套 grid 表格时，配置在gridOp属性的columns中）设置表格数据过长出现的展示问题,值可为：tooltip，title，ellipsis'
  )

  test.todo('size ，设置组件的size大小，三种类型可以选择：medium，small，mini')

  test.todo(
    'trigger ，弹框表格中为单选时radio的选中配置，可配置：default（默认）, cell（点击单元格触发）, row（点击行触发）'
  )

  test.todo('conditions ，当弹出面板配置的是表格时，设置弹出面板中的表单查询项')

  test.todo('grid-op ，设置弹出面板中表格组件的配置信息')

  test.todo('pager-op ，设置分页配置')

  test.todo('icon ，设置组件 Icon ')

  test.todo('multi ，设置弹出面板中的数据是否可多选，默认为false')

  test.todo('popseletor ，设置弹出面板中可显示的树或者表格组件，默认值为grid')

  test.todo('show-clear-btn ，设置输入框中右侧是否显示清除按钮，默认值为true')

  test.todo('show-clear-btn ，设置输入框中右侧是否显示清除按钮，默认值true')

  test.todo('show-pager ，展示分页，展示分页，默认为false')

  test.todo('show-history ，当弹出面板配置的是表格时，设置历史记录标签页是否显示表格，默认为false')

  test.todo('text-field ，设置输入框中显示文本的字段，提交数据时，不提交该显示文本，默认为label')

  test.todo('text-split ，在多选的情况下，设置输入框中要显示多个数据时的分隔符，默认为"/"')

  test.todo('title ，设置弹出面板的标题，并且支持国际化')

  test.todo('value-field ，设置输入框要提交数据的字段,默认值为"id"')

  test.todo('value-split ，在多选的情况下，设置输入框要提交多个数据时的分隔符,默认值为";"')

  test.todo('width ，设置弹出面板的宽度（单位像素）。当组件的 multi = true 时，宽度最小为900px；否则宽度最小为600px')

  test.todo('dialog-class ，自定义配置弹窗类名')

  // slots
  test.todo('search 插槽，设置查询条件插槽')

  //events
  test.todo('测试 change 事件，Popeditor 组件 Input 框的 change 事件')

  test.todo('测试 close 事件，弹框关闭时触发的事件')

  test.todo('测试 page-change 事件，表格模式带分页切换事件')
})
