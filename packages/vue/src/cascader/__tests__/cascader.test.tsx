import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Cascader from '@opentiny/vue-cascader'
import { nextTick } from 'vue'

const options = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'anzhuang',
        label: '安装',
        children: [
          {
            value: 'xiangmudengji',
            label: '项目登记'
          },
          {
            value: 'huanjingzhunbei',
            label: '环境准备'
          },
          {
            value: 'anzhuangcli',
            label: '安装 CLI'
          },
          {
            value: 'chuangjianxiangmu',
            label: '创建项目'
          }
        ]
      },
      {
        value: 'kaifa',
        label: '开发',
        children: [
          {
            value: 'yinruzujian',
            label: '引入组件'
          },
          {
            value: 'monishuju',
            label: '模拟数据'
          }
        ]
      }
    ]
  },
  {
    value: 'zujian',
    label: '组件',
    children: [
      {
        value: 'basic',
        label: '框架风格',
        children: [
          {
            value: 'layout',
            label: 'Layout 布局'
          },
          {
            value: 'color',
            label: 'Color 色彩'
          },
          {
            value: 'font',
            label: 'Font 字体'
          },
          {
            value: 'icon',
            label: 'Icon 图标'
          }
        ]
      }]
  }]

let value = ['zhinan', 'anzhuang']

describe('PC Mode', () => {
  const mount = mountPcMode
  
  test('size', async () => {
    const separators = '+'
    const medium = 'medium'
    const wrapper = mount(() => <Cascader
      v-model={value}
      options={options}
      separator={separators}
      size={medium}
    ></Cascader>)
    expect(wrapper.find('.tiny-cascader--medium').exists()).toBe(true)

  })
  test('triggerOnFocus', async () => {
    const triggerOnFocus = vi.fn()
    const wrapper = mount(() => <Cascader
      v-model={value}
      options={options}
      onFocus={triggerOnFocus}
    ></Cascader>)

    await nextTick()
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(triggerOnFocus).toHaveBeenCalledTimes(1)
  })

  test('slot', async () => {
    const value = 'pppppppppp'
    const text = '请输入内容'
    const wrapper = mount(() => <Cascader
      v-model={value}
      options={options}
      filterable={true}
      v-slots={{
        empty: () => <div>没有选项</div>
      }}
    ></Cascader>)

    expect(wrapper.find('.tiny-cascader__empty-text').exists()).toBe(true)
  })

  // 通过 options 属性指定选项数组即可渲染出一个级联选择器
  test.todo('options')

  // 通过 props.expandTrigger 可以指定展开子级菜单的触发方式为 hover，默认为 click
  test.todo('props.expandTrigger')

  // 通过在数据源中设置 disabled 字段来声明该选项是禁用的，本例中，options 指定的数组中的第一个元素含有 disabled: true 键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的 disabled 字段是否为 true，如果你的数据中表示禁用含义的字段名不为 disabled，可以通过 props.disabled 属性来指定（详见 Cascader Props 的 API 表格）。当然，value、label 和 children 这三个字段名也可以通过同样的方式指定
  test.todo('disabled')

  // 通过 props 属性设置属性值映射
  test.todo('props')

  // 通过 clearable 属性设置输入框可清空
  test.todo('clearable')

  // 通过 separator 属性设置分隔符
  test.todo('separator')

  // 通过 props.multiple = true 来开启多选模式
  test.todo('props.multiple = true')

  // 在开启多选模式后，默认情况下会展示所有已选中的选项的 Tag，可以使用 collapse-tags 来折叠 Tag 。 通过 disabled 设置组件是否禁用，默认值为 false
  test.todo('collapse-tags')

  // 通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点
  test.todo('props.checkStrictly = true')

  // 在多选模式下同时取消父子节点关联，选择任意一级选项
  test.todo('check-strictly-multiple')
  
  // 当选中某一级时，动态加载该级下的选项。通过 props 属性中的 lazy 开启动态加载，并通过 lazyload 来设置加载数据源的方法。lazyload 方法有两个参数，第一个参数 node 为当前点击的节点，第二个 resolve 为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为 leaf，可通过 props.leaf 修改)，否则会简单的以有无子节点来判断是否为叶子节点
  test.todo('auto-load')

  // 当选中某一级时，动态加载该级下的选项。通过 props 属性中的 lazy 开启动态加载，并通过 lazyload 来设置加载数据源的方法。通过 props 属性中的 checkStrictly 开启父子级不相关联
  test.todo('auto-load-checkStrictly')

  // 通过 children 指定选项的子选项，默认为 children 。 通过 value 指定指定选项的 value 值，默认为 value 。 通过 label 指定选项标签,默认为 label
  test.todo('props-children')

  // 将 filterable 赋值为 true 即可打开搜索功能，默认会匹配节点的 label 或所有父节点的 label (由 show-all-levels 决定)中包含输入值的选项。 empty 无匹配选项时显示的内容
  test.todo('filterable')

  // 搜索延时
  test.todo('debounce')

  // 多选模式下开启搜索功能
  test.todo('filterable-multiple')

  // filter-method 自定义搜索逻辑，第一个参数是节点 node，第二个参数是搜索关键词 keyword，通过返回布尔值表示是否命中,如果需要选择父级，通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点
  test.todo('filter-method')

  // placeholder
  test.todo('placeholder')

  // 仅显示最后一级
  test.todo('show-all-levels')

  // change事件
  test.todo('change')

  // expand-change事件
  test.todo('expand-change')

  // blur事件
  test.todo('blur')

  // visible-change事件
  test.todo('visible-change')

  // 节点返回的数据类型
  test.todo('props="{ emitPath: false }')
})
