<template>
  <tiny-wizard :data="dataSet" vertical :time-line-flow="true"></tiny-wizard>
</template>

<script lang="jsx">
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
          users: 'xiaohong',
          userName: '小红',
          roleNumber: '123456890',
          date: '2013-12-11 20:50',
          values: [
            { text: '部门', value: '某部门' },
            { text: '邮件', value: 'example@example.com' },
            { text: '手机', value: '1234567890' }
          ]
        },
        {
          name: '转他人处理',
          status: 'ready',
          imgUrl: 'static/images/fruit.jpg',
          users: 'xiaohu',
          userName: '小胡',
          roleNumber: ' 123456890',
          date: '2013-12-11 21:50',
          values: [
            { text: '部门', value: '某部门' },
            { text: '邮件', value: 'example@example.com' },
            { text: '手机', value: '1234567890' }
          ]
        },
        {
          name: '主管审批',
          status: 'ready',
          imgUrl: 'static/images/fruit.jpg',
          users: 'xiaozhang',
          userName: '小张',
          roleNumber: '123456890',
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
