<template>
  <div>
    <tiny-button @click="fn" type="primary"> 显示多级标题 </tiny-button>
    <p>值：{{ value }}</p>
    <tiny-cascader-mobile
      v-model="value"
      :data="data"
      value-field="value"
      text-field="label"
      title="标题"
      :placeholder="['选择省份', '选择城市', '选择区域', '选择街道']"
      :node-config="nodeConfig"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    ></tiny-cascader-mobile>
  </div>
</template>

<script>
import { CascaderMobile, Button } from '@opentiny/vue'

export default {
  components: {
    TinyCascaderMobile: CascaderMobile,
    TinyButton: Button
  },
  data() {
    return {
      value: ['zhinan', 'kaifa'],
      boxVisibility: false,
      data: list,
      nodeConfig: {
        checkStrictly: true
      }
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    }
  }
}

const list = [
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
            label: '项目登记',
            children: [
              {
                value: 'dengji1',
                label: '登记1登记1登记1登记1登记1登记1登记1',
                children: [
                  {
                    value: 'dengji1-1',
                    label: '登记1-1 登记1-1 登记1-1'
                  },
                  {
                    value: 'dengji1-2',
                    label: '登记1-2'
                  }
                ]
              },
              {
                value: 'dengji2',
                label: '项目登记2'
              },
              {
                value: 'dengji3',
                label: '项目登记3'
              }
            ]
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
      },
      {
        value: 'form-component',
        label: '表单组件',
        children: [
          {
            value: 'radio',
            label: 'Radio 单选框'
          },
          {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          },
          {
            value: 'input',
            label: 'Input 输入框'
          },
          {
            value: 'number',
            label: 'Numeric 计数器'
          },
          {
            value: 'select',
            label: 'Select 选择器'
          },
          {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          },
          {
            value: 'switch',
            label: 'Switch 开关'
          },
          {
            value: 'slider',
            label: 'Slider 滑块'
          },
          {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          },
          {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          },
          {
            value: 'form',
            label: 'Form 表单'
          }
        ]
      },
      {
        value: 'data',
        label: '数据组件',
        children: [
          {
            value: 'tree',
            label: 'Tree 树形控件'
          },
          {
            value: 'pager',
            label: 'Pager 分页'
          }
        ]
      },
      {
        value: 'notice',
        label: '提示组件',
        children: [
          {
            value: 'alert',
            label: 'Alert 警告'
          },
          {
            value: 'loading',
            label: 'Loading 加载'
          }
        ]
      },
      {
        value: 'navigation',
        label: '导航组件',
        children: [
          {
            value: 'menu',
            label: 'NavMenu 导航菜单'
          },
          {
            value: 'tabs',
            label: 'Tabs 标签页'
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          },
          {
            value: 'steps',
            label: 'Steps 步骤条'
          }
        ]
      },
      {
        value: 'others',
        label: '其他组件',
        children: [
          {
            value: 'rate',
            label: 'Rate 评分'
          },
          {
            value: 'tag',
            label: 'Tag 标签'
          },
          {
            value: 'usercontact',
            label: 'UserContact 联系人'
          },
          {
            value: 'slidebar',
            label: 'SlideBar 滚动块'
          }
        ]
      }
    ]
  }
]
</script>
