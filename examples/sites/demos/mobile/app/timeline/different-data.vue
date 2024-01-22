<template>
  <tiny-time-line :data="data" name-field="statusText" :active="active" @click="click"></tiny-time-line>
</template>

<script lang="jsx">
import { TimeLine } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      active: 1,
      data: [
        {
          status: 'current',
          statusText: '企业资料',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'success',
          statusText: '法人资料',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'complete',
          statusText: '校验身份',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'complete',
          statusText: '提交资料',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        }
      ]
    }
  },
  methods: {
    click(index, node) {
      this.active = index
    }
  }
}
</script>

<style scoped>
.tiny-mobile-timeline__date-time {
  padding: 15px 22px 15px 4px !important;
}
.tiny-mobile-timeline__content {
  padding: 15px 16px 14px 22px !important;
}
</style>
