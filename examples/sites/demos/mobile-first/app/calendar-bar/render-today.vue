<template>
  <tiny-calendar-bar v-model="value" :config="config"></tiny-calendar-bar>
</template>

<script>
import { CalendarBar } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarBar: CalendarBar
  },
  data() {
    return {
      value: new Date().toLocaleDateString(),
      config: {
        renderItem: this.renderItem
      }
    }
  },
  methods: {
    renderItem({ h, item, text }) {
      // 对今天日期选项进行定制渲染
      if (item && item.isToday) {
        return h('span', '今')
      }
      // 默认返回falsy值，其他日期选项仍然使用内部渲染
      return null
    }
  }
}
</script>
