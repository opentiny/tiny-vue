<template>
  <div>
    <tiny-button @click="fn" type="primary">
      时间选择器组件
    </tiny-button>
    <p>值：{{ value }}</p>
    <p>格式化值：{{ formatValue }}</p>

    <tiny-time-picker-mobile v-model="value" title="日期选择" :visible="boxVisibility" @update:visible="boxVisibility = $event">
    </tiny-time-picker-mobile>
  </div>
</template>

<script>
import { TimePickerMobile, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTimePickerMobile: TimePickerMobile,
    TinyButton: Button
  },
  data() {
    return {
      value: [2, 33, 20],
      boxVisibility: false
    }
  },
  computed: {
    formatValue() {
      if (!this.value) return ''
      return this.value.map(item => this.addZero(item)).join(':')
    }
  },
  methods: {
    addZero(time) {
      return ('0' + time).slice(-2)
    },
    fn() {
      this.boxVisibility = true
    }
  }
}
</script>
