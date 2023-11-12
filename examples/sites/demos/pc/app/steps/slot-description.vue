<template>
  <tiny-time-line :active="active" text-position="right" show-divider="true" space="280px">
    <tiny-timeline-item v-for="(item, i) in data" :node="item" @click="normalClick(i)">
      <template #description>
        <div class="my-description">
          {{ item.description }}
        </div>
      </template>
    </tiny-timeline-item>
  </tiny-time-line>
</template>

<script>
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
      ]
    }
  },
  methods: {
    normalClick(index) {
      this.active = index
    }
  }
}
</script>

<style scoped>
.my-description {
  width: 100px;
  margin-top: 2px;
  background-color: #eee;
  font-size: 12px;
}
</style>
