<template>
  <div class="preview">
    <tiny-nav-menu :fetch-menu-data="getMenuData" :fields="fields"></tiny-nav-menu>
  </div>
</template>

<script lang="jsx">
import { NavMenu } from '@opentiny/vue'

export default {
  components: {
    TinyNavMenu: NavMenu
  },
  data() {
    return {
      fields: {
        textField: 'label',
        urlField: 'urlField'
      }
    }
  },
  methods: {
    getMenuData() {
      let menuData = [
        {
          label: '首页',
          urlField: ''
        },
        {
          label: '指南',
          urlField: '',
          children: [
            {
              label: '引入组件',
              urlField: '',
              children: [
                {
                  label: '按需引入',
                  urlField: ''
                },
                {
                  label: '完整引入',
                  urlField: ''
                }
              ]
            },
            {
              label: '后端适配器',
              urlField: '',
              children: [
                {
                  label: 'Gateway 适配器',
                  urlField: ''
                },
                {
                  label: 'Jalor 适配器',
                  urlField: ''
                },
                {
                  label: 'Standalone 适配器',
                  urlField: ''
                }
              ]
            },
            {
              label: '服务代理',
              urlField: '',
              children: [
                {
                  label: '本地代理',
                  urlField: ''
                },
                {
                  label: '远程代理',
                  urlField: ''
                }
              ]
            },
            {
              label: '构建部署',
              urlField: '',
              children: [
                {
                  label: '本地构建',
                  urlField: ''
                },
                {
                  label: '查看构建报告',
                  urlField: ''
                },
                {
                  label: '静态资源构建',
                  urlField: ''
                },
                {
                  label: '多环境部署',
                  urlField: ''
                },
                {
                  label: '静态资源部署',
                  urlField: ''
                },
                {
                  label: 'CI 部署',
                  urlField: ''
                },
                {
                  label: '引入静态资源',
                  urlField: ''
                }
              ]
            }
          ]
        },
        {
          label: '组件',
          urlField: '',
          children: [
            {
              label: '表单组件',
              urlField: '',
              children: [
                {
                  label: 'Button 按钮',
                  urlField: 'button'
                },
                {
                  label: 'Datepicker 日期',
                  urlField: 'datepicker'
                },
                {
                  label: 'Dropdown 下拉框',
                  urlField: 'dropdown'
                },
                {
                  label: 'DropTimes 下拉时间',
                  urlField: 'droptimes'
                },
                {
                  label: 'Input 输入框',
                  urlField: 'input'
                },
                {
                  label: 'Textarea 文本域',
                  urlField: 'textarea'
                }
              ]
            },
            {
              label: '数据组件',
              urlField: '',
              children: [
                {
                  label: 'Chart 图表',
                  urlField: 'chart'
                },
                {
                  label: 'Grid 数据表格',
                  urlField: 'grid'
                },
                {
                  label: 'Pager 分页',
                  urlField: 'pager'
                },
                {
                  label: 'Tree 树形控件',
                  urlField: 'tree'
                }
              ]
            },
            {
              label: '导航组件',
              urlField: '',
              children: [
                {
                  label: 'ToggleMenu 收缩菜单',
                  urlField: 'toggleMenu'
                },
                {
                  label: 'TreeMenu 树型菜单',
                  urlField: 'treemenu'
                }
              ]
            },
            {
              label: '业务组件',
              urlField: '',
              children: [
                {
                  label: 'Amount 金额',
                  urlField: 'amount'
                },
                {
                  label: 'Area 片区',
                  urlField: 'area'
                },
                {
                  label: 'Company 公司',
                  urlField: 'company'
                },
                {
                  label: 'Dept 部门',
                  urlField: 'dept'
                },
                {
                  label: 'eDoc 企业文档',
                  urlField: 'Edoc'
                },
                {
                  label: 'User 用户',
                  urlField: 'user'
                }
              ]
            }
          ]
        },
        {
          label: '教程',
          urlField: '',
          children: [
            {
              label: '页面布局',
              urlField: '',
              children: [
                {
                  label: '添加标签页',
                  urlField: '#/zh-CN/tutorial/addtabs'
                },
                {
                  label: '标签页配置',
                  urlField: '#/zh-CN/tutorial/tabsattr'
                }
              ]
            },
            {
              label: '查询功能',
              urlField: '',
              children: [
                {
                  label: '添加查询页面',
                  urlField: '#/zh-CN/tutorial/addlist'
                },
                {
                  label: '列表属性配置',
                  urlField: '#/zh-CN/tutorial/listattr'
                },
                {
                  label: '通讯录查询',
                  urlField: '#/zh-CN/tutorial/searchfunc'
                }
              ]
            },
            {
              label: '新增功能',
              urlField: '',
              children: [
                {
                  label: '表单新增功能',
                  urlField: '#/zh-CN/tutorial/addservice'
                },
                {
                  label: '表单数据验证',
                  urlField: '#/zh-CN/tutorial/valid'
                }
              ]
            },
            {
              label: '编辑功能',
              urlField: '',
              children: [
                {
                  label: '开启编辑功能',
                  urlField: '#/zh-CN/tutorial/editattr'
                },
                {
                  label: '保存表格数据',
                  urlField: '#/zh-CN/tutorial/savefunc'
                }
              ]
            }
          ]
        },
        {
          label: '规范',
          urlField: '#/zh-CN/regular/rulelevel'
        },
        {
          label: '性能',
          urlField: '#/zh-CN/speed'
        },
        {
          label: '案例',
          urlField: '#/zh-CN/example'
        },
        {
          label: '更新日志',
          urlField: '#/zh-CN/guide/changelog'
        },
        {
          label: '测试',
          urlField: '#/zh-CN/guide/aaa'
        }
      ]

      return Promise.resolve(menuData)
    }
  }
}
</script>

<style scoped>
.preview {
  min-height: 450px;
}

.preview .tiny-nav-menu a:hover {
  text-decoration: none;
}
</style>
