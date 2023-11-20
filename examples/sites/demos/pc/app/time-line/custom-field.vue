<template>
  <tiny-time-line
    :data="data"
    :active="active"
    @click="click"
    name-field="content"
    time-field="timestamp"
    vertical
  ></tiny-time-line>
</template>

<script>
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
          content: '提交审批',
          timestamp: '2018-04-15'
        },
        {
          content: '通过审核',
          timestamp: '2018-04-13'
        },
        {
          content: '创建成功',
          timestamp: '2018-04-11'
        }
      ]
    }
  },
  methods: {
    click(index) {
      this.active = index
    }
  }
}
</script>
