<template>
  <tiny-wizard :data="dataSet" vertical :time-line-flow="true"></tiny-wizard>
</template>

<script>
import { Wizard } from '@opentiny/vue'

export default {
  components: {
    TinyWizard: Wizard
  },
  data() {
    return {
      dataSet: [
        {
          name: '提交',
          status: 'ready',
          imgUrl: 'static/images/fruit.jpg',
          users: 'xiaoming',
          userName: '小明',
          userDescription: '123457890',
          date: '2013-12-11 20:50',
          values: [
            { text: '部门', value: '某部门' },
            { text: '邮件', value: 'example@example.com' },
            { text: '手机', value: '123457890' }
          ]
        },
        {
          name: '转他人处理',
          status: 'ready',
          imgUrl: 'static/images/fruit.jpg',
          users: 'xiaohong',
          userName: '小红',
          userDescription: ' 123457891',
          date: '2013-12-11 21:50',
          values: [
            { text: '部门', value: '某部门' },
            { text: '邮件', value: 'example@example.com' },
            { text: '手机', value: '123457891' }
          ]
        },
        {
          name: '主管审批',
          status: 'ready',
          imgUrl: 'static/images/fruit.jpg',
          users: '小张',
          userName: 'xiaozhang',
          userDescription: '1234567890',
          date: '2013-12-14 20:50',
          values: [
            { text: '部门', value: '某部门' },
            { text: '邮件', value: 'example@example.com' },
            { text: '手机', value: '1234567890' }
          ]
        }
      ]
    }
  }
}
</script>
