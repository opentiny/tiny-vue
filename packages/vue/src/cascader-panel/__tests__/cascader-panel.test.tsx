import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import CascaderPanel from '@opentiny/vue-cascader-panel'

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
  
  test('options', async () => {
    const separators = '+'
    const medium = 'medium'
    const wrapper = mount(() => <CascaderPanel
      options={options}
    ></CascaderPanel>)
    expect(wrapper.findAll('.tiny-cascader-node').length).toBe(2)

  })

  test('triggerOnFocus', async () => {
    const handleChange = vi.fn()
    const wrapper = mount(() => <CascaderPanel
      v-model={value}
      options={options}
      props={{ checkStrictly: true }}
      onExpand-change={handleChange}
    ></CascaderPanel>)

    const list = wrapper.findAll('.tiny-cascader-node')
    const [znNode, zjNode] = list
    '.arrow-right.el-cascader-node__postfix'
    await znNode.trigger('click')
    expect(handleChange).toBeCalled()
  })

  test('slot', async () => {
    const value = 'pppppppppp'
    const text = '请输入内容'
    const wrapper = mount(() => <CascaderPanel
      options={options}
      v-slots={{
        default: (scopeData) => <><span class='only-slot' > {scopeData.data.label}自定义</span>
          !scopeData.node.isLeaf&& <span> ({scopeData.data.children.length})</ span></>
      }}
    ></CascaderPanel >)
    expect(wrapper.find('.only-slot').exists()).toBe(true)
  })
})
