import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode

  const _mount = (template, data, otherObj) =>
    mount(
      {
        components: {
          'tiny-select': Select,
          'tiny-option': Option
        },
        template,
        data,
        ...otherObj,
      },
      {
        attachTo: 'body',
      }
    )

  test('multiple-limit', async () => {
    let wrapper = _mount(
      `
      <tiny-select v-model="value" :multiple-limit="1" multiple>
        <tiny-option
          v-for="item in options"
          :label="item.label"
          :key="item.value"
          :value="item.value">
        </tiny-option>
      </tiny-select>
    `,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          }
        ],
        value: ['选项2']
      })
    )
    await nextTick()
    await wrapper.find('input').trigger('click')
    expect(document.querySelector('.is-disabled') !== null).toBe(true)
  })

  test('slot', async () => {
    let value = ''
    const wrapper = mount(() => <Select v-model={value} v-slots={{
      empty: () => <div class="tips">没有选项</div>
    }}></Select>)
    await wrapper.find('input').trigger('click')
    expect(wrapper.find('.tips').exists()).toBe(true)
  })

  test('events', async () => {
    let value = ''
    const handleFocus = vi.fn()
    const wrapper = mount(() => <Select onFocus={handleFocus} v-model={value}></Select>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(handleFocus).toHaveBeenCalled()
  })

  test.todo('tag-selectable 下拉框内选中项支持复制功能')
  test.todo('disabled 下拉框禁用')
  test.todo('multiple 设置是否允许输入框输入或选择多个项')
  test.todo('placement tip 相对于创建 tip 的 dom 节点的位置')
  test.todo('clearable 设置是否显示清除文本的按钮')
  test.todo('text-field 设置下拉框的文本对应的数据源的字段名称')
  test.todo('modelValue / v-model 设置下拉框的默认值')
  test.todo('value-field 设置下拉框的值所对应数据源的字段名称')
  test.todo('value-key 作为 value 唯一标识的键名，绑定值为对象类型时必填')
  test.todo('size 输入框尺寸;该属性的可选值为 medium/small/mini')
  test.todo('collapse-tags 多选时是否将选中值按文字的形式展示')
  test.todo('name select input 的 name 属性')
  test.todo('autocomplete select input 的 autocomplete 属性')
  test.todo('placeholder 占位符')
  test.todo('filterable 是否可搜索')
  test.todo('searchable 是否下拉面板可搜索')
  test.todo('allow-create 是否允许用户创建新条目，需配合 filterable 使用')
  test.todo('filter-method 自定义搜索方法')
  test.todo('remote 是否为远程搜索')
  test.todo('remote-method 远程搜索方法')
  test.todo('loading 是否正在从远程获取数据')
  test.todo('loading-text 远程加载时显示的文字')
  test.todo('no-match-text 搜索条件无匹配时显示的文字')
  test.todo('no-data-text 选项为空时显示的文字')
  test.todo('show-empty-image 默认不显示空数据图片，设置为 true 的时候显示')
  test.todo('input-box-type 设置输入框的显示类型，包含 input / underline 两种，默认为input')
  test.todo('popper-class 下拉框的类名')
  test.todo('reserve-keyword 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词')
  test.todo('default-first-option 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用')
  test.todo('popper-append-to-body 是否将弹出框插入至 body 元素')
  test.todo('automatic-dropdown 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单')
  test.todo('options 配置 Select 数据项，使用后不需要再配置 tiny-option。')
  test.todo('show-alloption 是否展示 `全选` 选项')
  test.todo('is-drop-inherit-width 设置下拉列表的宽度是否跟随输入框的宽度进行展示')
  test.todo('cache-op 开启 select 本地缓存功能')
  test.todo('render-type 设置下拉列表嵌套 Grid 或 Tree 时的组件类型')
  test.todo('grid-op 下拉列表嵌套 Grid 组件时，用来配置 Grid 的数据信息')
  test.todo('tree-op 下拉列表嵌套 Tree 组件时，用来配置 Tree 的数据信息')
  test.todo('allow-copy 搜索单选场景，是否允许复制输入框的内容')
  test.todo('copyable 是开启复制功能，配置后会在输入框右侧鼠标上浮后有个复制按钮。（只能用于多选模式）')
  test.todo('text-split 在配置 copyable 的情况下可相当于选中项的分隔符')

  test.todo('solt-default 默认插槽')
  test.todo('slot-reference Select 组件触发源插槽')
  test.todo('slot-prefix Select 组件头部内容插槽')
  test.todo('slot-footer 底部插槽')

  test.todo('focus 使 input 获取焦点')
  test.todo('blur 使 input 失去焦点，并隐藏下拉框')

  test.todo('change 设置下拉框值更新后触发的事件')
  test.todo('clear 设置内容清除后触发的事件')
  test.todo('visible-change 下拉框出现/隐藏时触发;')
  test.todo('remove-tag 多选模式下移除tag时触发;')
  test.todo('blur 当 input 失去焦点时触发')
})
