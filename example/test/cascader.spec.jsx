import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { Cascader } from '@opentiny/vue'
import { ref, nextTick } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)


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

describe('cascader', () => {
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
    const TEXT = '请输入内容'
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
})
