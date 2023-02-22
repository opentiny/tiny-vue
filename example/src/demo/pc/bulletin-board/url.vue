<template>
  <tiny-bulletin-board :tab-title="tabTitle" :data="data"></tiny-bulletin-board>
</template>

<script>
import { BulletinBoard } from '@opentiny/vue'

export default {
  components: {
    TinyBulletinBoard: BulletinBoard
  },
  data() {
    return {
      tabTitle: ['页面跳转'],
      data: [
        [
          {
            text: '基于 url',
            date: '2019-07-31',
            url: 'localhost:3000/#/webcore/zh-CN/guide/changelog',
            target: '_blank'
          }
        ]
      ]
    }
  }
}
</script>
