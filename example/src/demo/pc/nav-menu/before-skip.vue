<template>
  <div class="preview">
    <tiny-nav-menu :data="menuData" :before-skip="handleSkip"></tiny-nav-menu>
  </div>
</template>

<script>
import { NavMenu, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyNavMenu: NavMenu
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
                  url: 'button'
                },
                {
                  title: 'Datepicker 日期',
                  url: 'datepicker'
                },
                {
                  title: 'Dropdown 下拉框',
                  url: 'dropdown'
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
  },
  methods: {
    handleSkip({ title }) {
      Modal.message({ message: '当前跳转的菜单为：' + title, status: 'info' })
      return false
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
