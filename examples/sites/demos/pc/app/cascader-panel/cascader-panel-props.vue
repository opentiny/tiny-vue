<template>
  <div class="cascader-panel-demo">
    <div>选中值：<span>{{ value }}</span></div>
    <tiny-cascader-panel
      v-model="value"
      class="cascader-panel-demo"
      :options="optionsCascader"
      :props="{
        children: 'children',
        emitPath: false,
        label: 'text',
        value: 'id',
        leaf: 'leaf'
      }"
    ></tiny-cascader-panel>
  </div>
</template>

<script>
import { CascaderPanel } from '@opentiny/vue'

export default {
  components: {
    TinyCascaderPanel: CascaderPanel
  },
  data() {
    return {
      value: '',
      optionsCascader: [
        {
          id: 'zhinan',
          text: '指南',
          children: [
            {
              id: 'anzhuang',
              text: '安装',
              children: [
                {
                  id: 'xiangmudengji',
                  text: '项目登记',
                  disabled: true
                },
                {
                  id: 'huanjingzhunbei',
                  text: '环境准备'
                },
                {
                  id: 'anzhuangcli',
                  text: '安装 CLI'
                },
                {
                  id: 'chuangjianxiangmu',
                  text: '创建项目'
                }
              ]
            },
            {
              id: 'kaifa',
              text: '开发',
              children: [
                {
                  id: 'yinruzujian',
                  text: '引入组件'
                },
                {
                  id: 'monishuju',
                  text: '模拟数据'
                }
              ]
            }
          ]
        },
        {
          id: 'zujian',
          text: '组件',
          children: [
            {
              id: 'basic',
              text: '框架风格',
              children: [
                {
                  id: 'layout',
                  text: 'Layout 布局'
                },
                {
                  id: 'color',
                  text: 'Color 色彩'
                },
                {
                  id: 'font',
                  text: 'Font 字体'
                },
                {
                  id: 'icon',
                  text: 'Icon 图标'
                }
              ]
            },
            {
              id: 'form',
              text: '表单组件',
              children: [
                {
                  id: 'radio',
                  text: 'Radio 单选框'
                },
                {
                  id: 'checkbox',
                  text: 'Checkbox 多选框'
                },
                {
                  id: 'input',
                  text: 'Input 输入框'
                },
                {
                  id: 'number',
                  text: 'Numeric 计数器'
                },
                {
                  id: 'select',
                  text: 'Select 选择器'
                },
                {
                  id: 'cascader',
                  text: 'Cascader 级联选择器'
                },
                {
                  id: 'switch',
                  text: 'Switch 开关'
                },
                {
                  id: 'slider',
                  text: 'Slider 滑块'
                },
                {
                  id: 'time-picker',
                  text: 'TimePicker 时间选择器'
                },
                {
                  id: 'date-picker',
                  text: 'DatePicker 日期选择器'
                },
                {
                  id: 'form',
                  text: 'Form 表单'
                }
              ]
            },
            {
              id: 'data',
              text: '数据组件',
              children: [
                {
                  id: 'tree',
                  text: 'Tree 树形控件'
                },
                {
                  id: 'pager',
                  text: 'Pager 分页'
                }
              ]
            },
            {
              id: 'notice',
              text: '提示组件',
              children: [
                {
                  id: 'alert',
                  text: 'Alert 警告'
                },
                {
                  id: 'loading',
                  text: 'Loading 加载'
                }
              ]
            },
            {
              id: 'navigation',
              text: '导航组件',
              children: [
                {
                  id: 'menu',
                  text: 'NavMenu 导航菜单'
                },
                {
                  id: 'tabs',
                  text: 'Tabs 标签页'
                },
                {
                  id: 'breadcrumb',
                  text: 'Breadcrumb 面包屑'
                },
                {
                  id: 'steps',
                  text: 'Steps 步骤条'
                }
              ]
            },
            {
              id: 'others',
              text: '其他组件',
              children: [
                {
                  id: 'rate',
                  text: 'Rate 评分'
                },
                {
                  id: 'tag',
                  text: 'Tag 标签'
                },
                {
                  id: 'usercontact',
                  text: 'UserContact 联系人'
                },
                {
                  id: 'slidebar',
                  text: 'SlideBar 滚动块'
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

<style scoped>
.cascader-panel-demo > :not(:last-child) {
  margin-bottom: 20px;
}
</style>
