<template>
  <tiny-bulletin-board title="广告" :tab-title="tabTitle" :data="data"></tiny-bulletin-board>
</template>

<script>
import { BulletinBoard } from '@opentiny/vue'

export default {
  components: {
    TinyBulletinBoard: BulletinBoard
  },
  data() {
    return {
      tabTitle: ['TINY 更新日志', '他们都在用', 'TINY 特性'],
      data: [
        [
          {
            text: 'TINY v2.1.4 版本',
            date: '2019-07-31',
            url: 'https://abcde.com',
            target: '_blank'
          },
          {
            text: 'TINY v2.1.3 版本',
            date: '2019-06-11',
            url: 'https://abcde.com',
            target: '_blank'
          },
          {
            text: 'TINY v2.1.2 版本',
            date: '2019-05-11',
            url: 'https://abcde.com',
            target: '_blank'
          }
        ],
        [
          {
            text: 'SRM 采购云',
            date: '2018-09-11',
            url: 'https://abcde.com',
            target: '_blank'
          },
          {
            text: 'iSales',
            url: 'https://abcde.com',
            date: '2018-09-11',
            route: 'Alert'
          },
          {
            text: '数易平台',
            url: 'https://abcde.com',
            date: '2018-09-11'
          },
          {
            text: 'MES+ 制造平台',
            date: '2018-09-11',
            url: 'https://abcde.com',
            target: '_blank'
          },
          {
            text: 'ISDP',
            date: '2018-09-11',
            url: 'https://abcde.com',
            route: 'Alert'
          },
          {
            text: '财经智慧助手',
            url: 'https://abcde.com',
            date: '2018-09-11'
          }
        ],
        [
          {
            text: '秒级系统体验，按需打包；一致 UX 体验规范',
            date: '2018-09-11',
            url: 'https://abcde.com',
            target: '_blank'
          },
          {
            text: '内置公共 API 并支持扩展；组件、主题均可扩展',
            date: '2018-09-11',
            url: 'https://abcde.com'
          },
          {
            text: '丰富教程案例、FAQ、开源组件快速引入',
            date: '2018-09-11',
            url: 'https://abcde.com'
          },
          {
            text: '内置 80+ web 组件拿来即用；内置 mock, UI 组件库与后端服务自由组合',
            url: 'https://abcde.com',
            date: '2018-09-11'
          }
        ]
      ]
    }
  }
}
</script>
