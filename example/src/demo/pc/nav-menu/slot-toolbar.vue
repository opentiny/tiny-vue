<template>
  <div class="preview-nav">
    <tiny-nav-menu :data="menuData">
      <template #toolbar>
        <icon-setting class="icon-setting"></icon-setting>
      </template>
    </tiny-nav-menu>
  </div>
</template>

<script>
import { NavMenu } from '@opentiny/vue'
import { IconSetting } from '@opentiny/vue-icon'

export default {
  components: {
    TinyNavMenu: NavMenu,
    IconSetting: IconSetting()
  },
  data() {
    return {
      menuData: [
        {
          title: '首页',
          url: ''
        },
        {
          title: '组件',
          url: '',
          children: [
            {
              title: '表单组件',
              url: '',
              children: [
                {
                  title: 'Button 按钮',
                  url: 'button'
                },
                {
                  title: 'Datepicker 日期',
                  url: 'datepicker'
                },
                {
                  title: 'Dropdown 下拉框',
                  url: 'dropdown'
                },
                {
                  title: 'DropTimes 下拉时间',
                  url: 'droptimes'
                },
                {
                  title: 'Input 输入框',
                  url: 'input'
                },
                {
                  title: 'Textarea 文本域',
                  url: 'textarea'
                }
              ]
            },
            {
              title: '数据组件',
              url: '',
              children: [
                {
                  title: 'Chart 图表',
                  url: 'chart'
                },
                {
                  title: 'Grid 数据表格',
                  url: 'grid'
                },
                {
                  title: 'Pager 分页',
                  url: 'pager'
                },
                {
                  title: 'Tree 树形控件',
                  url: 'tree'
                }
              ]
            },
            {
              title: '导航组件',
              url: '',
              children: [
                {
                  title: 'ToggleMenu 收缩菜单',
                  url: 'toggleMenu'
                },
                {
                  title: 'TreeMenu 树型菜单',
                  url: 'treemenu'
                }
              ]
            },
            {
              title: '业务组件',
              url: '',
              children: [
                {
                  title: 'Amount 金额',
                  url: 'amount'
                },
                {
                  title: 'Area 片区',
                  url: 'area'
                },
                {
                  title: 'Company 公司',
                  url: 'company'
                },
                {
                  title: 'Dept 部门',
                  url: 'dept'
                },
                {
                  title: 'eDoc 企业文档',
                  url: 'Edoc'
                },
                {
                  title: 'User 用户',
                  url: 'user'
                }
              ]
            }
          ]
        },
        {
          title: '规范',
          url: '#/zh-CN/regular/rulelevel'
        },
        {
          title: '性能',
          url: '#/zh-CN/speed'
        },
        {
          title: '案例',
          url: '#/zh-CN/example'
        },
        {
          title: '更新日志',
          url: '#/zh-CN/guide/changelog'
        },
        {
          title: '测试',
          url: '#/zh-CN/guide/aaa'
        },
        {
          title: '资源',
          url: ''
        },
        {
          title: 'SDK',
          url: ''
        },
        {
          title: 'TINY 学院',
          url: ''
        }
      ]
    }
  }
}
</script>

<style>
.preview-nav {
  min-height: 450px;
}

.preview-nav .slot-toolbar {
  height: 48px;
  line-height: 48px;
  vertical-align: middle;
}

.preview-nav .icon-setting {
  fill: white;
  font-size: 24px;
}
</style>
