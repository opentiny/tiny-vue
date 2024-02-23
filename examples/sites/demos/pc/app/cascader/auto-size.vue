<template>
  <tiny-cascader v-model="value" :options="options" auto-size></tiny-cascader>
</template>

<script>
import { Cascader } from '@opentiny/vue'

export default {
  components: {
    TinyCascader: Cascader
  },
  data() {
    return {
      value: 'anzhuangcli',
      options: [
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
            },
            {
              value: 'form',
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
            }
          ]
        }
      ]
    }
  }
}
</script>
