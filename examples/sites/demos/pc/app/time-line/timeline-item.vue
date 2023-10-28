<template>
  <tiny-time-line
    :active="active"
    text-position="right"
    space="200px"
  >
    <tiny-timeline-item v-for="(item, i) in data" :node="item" @click="normalClick(i)" >
    </tiny-timeline-item>
  </tiny-time-line>
</template>

<script lang="ts">
import { TimeLine, TimelineItem } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine,
    TinyTimelineItem: TimelineItem
  },
  data() {
    return {
      active: 1,
      data: [
        { name: 'Basic Info.', description: '基本信息必填' },
        { name: 'BOQ Info', description: '第二步描述信息' },
        { name: 'Billing', description: '最终步骤信息' }
      ],
      showDivider: true
    }
  },
  methods: {
    normalClick(index) {
      this.active = index
    },
  }
}
</script>
