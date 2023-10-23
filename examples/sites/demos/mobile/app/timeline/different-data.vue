<template>
  <tiny-time-line :data="data" name-field="statusText" time-field="date"></tiny-time-line>
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
          date: '2019-11-12 14:20:15',
          statusText: '筛选中',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'success',
          date: '2019-11-12 14:20:15',
          statusText: '筛选中',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'fail',
          date: '2019-11-12 14:20:15',
          statusText: '筛选中',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'complete',
          date: '2019-11-12 14:20:15',
          statusText: '筛选中',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'complete',
          date: '2019-11-12 14:20:15',
          statusText: '筛选中',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'complete',
          date: '2019-11-11 00:01:30',
          statusText: '筛选中',
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
