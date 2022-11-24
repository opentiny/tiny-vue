<template>
  <div class="timeline">
    <div class="page__hd">
      <h1 class="page__title">Timeline</h1>
      <p class="page__desc">时间轴</p>
    </div>
    <tiny-time-line :data="data"></tiny-time-line>
  </div>
</template>

<script>
import { TimeLine } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      data: [
        {
          status: 'current',
          time: '2019-11-12 14:20:15',
          name: '筛选中',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'success',
          time: '2019-11-12 14:20:15',
          name: '筛选中',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'fail',
          time: '2019-11-12 14:20:15',
          name: '筛选中',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'complete',
          time: '2019-11-12 14:20:15',
          name: '筛选中',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'complete',
          time: '2019-11-12 14:20:15',
          name: '筛选中',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        },
        {
          status: 'complete',
          time: '2019-11-11 00:01:30',
          name: '筛选中',
          personInfo: '张三',
          cycle: '周期：2天',
          overdue: '已超期 1 天'
        }
      ]
    }
  }
}
</script>

<style scoped>
.timeline {
  height: calc(100% - 118px);
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.tiny-mobile-timeline__date-time {
  padding: 15px 22px 15px 4px !important;
}
.tiny-mobile-timeline__content {
  padding: 15px 16px 14px 22px !important;
}
</style>
