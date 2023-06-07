import { describe, it } from 'vitest'

describe('测试 Cascader 在不穿任何参数情况下的默认行为', () => {
  it.todo('级联输入框的渲染，正确渲染输入框和图标')

  it.todo('hover 效果，输入框边框颜色变深')

  it.todo('点击输入框，应该弹出级联下拉面板，输入框边框颜色变深，向下图标切换为向上图标')

  it.todo('级联下拉面板渲染，下拉数据是否正常渲染，不为最后一级的每行子项正常渲染图标')

  it.todo('点击不同父级展开相应子级数据，点击子级数据下拉面板小时，输入框出现选中的子级数据')
})

describe('测试单个 api 功能', () => {
  it.todo('v-model 是否正常， 设置了v-model是否显示在输入框中')

  it.todo('配置 options，下拉框展示相应的options的长度')

  it.todo('配置 props ，设置options对应的字段名称是否正常渲染在下拉面板')

  it.todo('配置 clearable ，当输入框有值，悬浮输入框时出现关闭按钮，点击关闭按钮，情况输入框数据')

  it.todo('配置 separator ，检验输入框是否存在配置的分隔符')

  it.todo('配置 size ，检验输入框的dom是否存在配置的size')

  it.todo('配置 props.multiple = true ，v-model为多元素数组时，输入框是否展示多个标签')

  it.todo('配置 collapse-tags ，选中多个选项时，输入框最多存在2个标签，第二个标签展示为+ 选中数量')

  it.todo('配置 props.checkStrictly = true ，当options为多级数据时，是否每级数据可以单独选中')

  it.todo(
    '同时配置 props.multiple = true，props.checkStrictly = true ，当options为多级数据时，是否每级数据可以单独选中且输入框显示相应选中的标签'
  )

  it.todo(
    '配置 lazyload ，配置多级数据，点击输入框出现第一个下拉框，点击第一个下拉框里的选项，出现加载图标并在之后出现下一个下拉框'
  )

  it.todo('配置 filterable，输入框输入搜索的内容，出现下拉框，当有相关内容时展示相关内容，无相关内容展示无匹配数据')

  it.todo(
    '配置 filterable与debounceit时，输入框输入搜索的内容，根据配置的debounceit延时出现下拉框，当有相关内容时展示相关内容，无相关内容展示无匹配数据'
  )

  it.todo('配置 placeholder ，输入框的dom是否存在配置的placeholder')

  it.todo(
    '配置 filter-method ，点击输入框，出现下拉框，输入框输入内容，下拉框展示的数据是否为对应的filter-method处理后的数据'
  )

  it.todo(
    '配置 show-all-levels = false ，点击输入框，出现下拉框，点击父级，出现下一级，直到最后一级，选择最后一级任一选项，输入框内容仅展示最后一级选择内容'
  )
})

describe('测试 events', () => {
  it.todo('change， 选中节点变化时触发')

  it.todo('expand-change，展开节点发生变化时触发')

  it.todo('blur，失去焦点时触发')

  it.todo('blur，获得焦点时触发')

  it.todo('visible-change，下拉框出现/隐藏时触发')

  it.todo('remove-tag，多选模式下，移除Tag时触发')
})
