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
import { iconSetting } from '@opentiny/vue-icon'

export default {
  components: {
    TinyNavMenu: NavMenu,
    IconSetting: iconSetting()
  },
  data() {
    return {
      menuData: [
        {
          title: '首页',
          url: ''
        },
        {
          title: '指南',
          url: '',
          children: [
            {
              title: '引入组件',
              url: '',
              children: [
                {
                  title: '按需引入',
                  url: ''
                },
                {
                  title: '完整引入',
                  url: ''
                }
              ]
            },
            {
              title: '后端适配器',
              url: '',
              children: [
                {
                  title: 'Gateway 适配器',
                  url: ''
                },
                {
                  title: 'Jalor 适配器',
                  url: ''
                },
                {
                  title: 'Standalone 适配器',
                  url: ''
                }
              ]
            },
            {
              title: '服务代理',
              url: '',
              children: [
                {
                  title: '本地代理',
                  url: ''
                },
                {
                  title: '远程代理',
                  url: ''
                }
              ]
            },
            {
              title: '构建部署',
              url: '',
              children: [
                {
                  title: '本地构建',
                  url: ''
                },
                {
                  title: '查看构建报告',
                  url: ''
                },
                {
                  title: '静态资源构建',
                  url: ''
                },
                {
                  title: '多环境部署',
                  url: ''
                },
                {
                  title: '静态资源部署',
                  url: ''
                },
                {
                  title: 'CI 部署',
                  url: ''
                },
                {
                  title: '引入静态资源',
                  url: ''
                }
              ]
            }
          ]
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
                  url: '#/zh-CN/component/button'
                },
                {
                  title: 'Datepicker 日期',
                  url: '#/zh-CN/component/datepicker'
                },
                {
                  title: 'Dropdown 下拉框',
                  url: '#/zh-CN/component/dropdown'
                },
                {
                  title: 'DropTimes 下拉时间',
                  url: '#/zh-CN/component/droptimes'
                },
                {
                  title: 'Input 输入框',
                  url: '#/zh-CN/component/input'
                },
                {
                  title: 'Textarea 文本域',
                  url: '#/zh-CN/component/textarea'
                }
              ]
            },
            {
              title: '数据组件',
              url: '',
              children: [
                {
                  title: 'Grid 数据表格',
                  url: '#/zh-CN/component/grid'
                },
                {
                  title: 'Pager 分页',
                  url: '#/zh-CN/component/pager'
                },
                {
                  title: 'Tree 树形控件',
                  url: '#/zh-CN/component/tree'
                }
              ]
            },
            {
              title: '导航组件',
              url: '',
              children: [
                {
                  title: 'ToggleMenu 收缩菜单',
                  url: '#/zh-CN/component/toggleMenu'
                },
                {
                  title: 'TreeMenu 树型菜单',
                  url: '#/zh-CN/component/treemenu'
                }
              ]
            },
            {
              title: '业务组件',
              url: '',
              children: [
                {
                  title: 'Area 片区',
                  url: '#/zh-CN/component/area'
                },
                {
                  title: 'Company 公司',
                  url: '#/zh-CN/component/company'
                },
                {
                  title: 'Dept 部门',
                  url: '#/zh-CN/component/dept'
                },
                {
                  title: 'eDoc 企业文档',
                  url: '#/zh-CN/component/Edoc'
                },
                {
                  title: 'User 用户',
                  url: '#/zh-CN/component/user'
                }
              ]
            }
          ]
        },
        {
          title: '教程',
          url: '',
          children: [
            {
              title: '页面布局',
              url: '',
              children: [
                {
                  title: '添加标签页',
                  url: '#/zh-CN/tutorial/addtabs'
                },
                {
                  title: '标签页配置',
                  url: '#/zh-CN/tutorial/tabsattr'
                }
              ]
            },
            {
              title: '查询功能',
              url: '',
              children: [
                {
                  title: '添加查询页面',
                  url: '#/zh-CN/tutorial/addlist'
                },
                {
                  title: '列表属性配置',
                  url: '#/zh-CN/tutorial/listattr'
                },
                {
                  title: '通讯录查询',
                  url: '#/zh-CN/tutorial/searchfunc'
                }
              ]
            },
            {
              title: '新增功能',
              url: '',
              children: [
                {
                  title: '表单新增功能',
                  url: '#/zh-CN/tutorial/addservice'
                },
                {
                  title: '表单数据验证',
                  url: '#/zh-CN/tutorial/valid'
                }
              ]
            },
            {
              title: '编辑功能',
              url: '',
              children: [
                {
                  title: '开启编辑功能',
                  url: '#/zh-CN/tutorial/editattr'
                },
                {
                  title: '保存表格数据',
                  url: '#/zh-CN/tutorial/savefunc'
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
