<template>
  <div class="time-select-demo-focus">
    <tiny-button @click="hanleFocus">手动获取焦点</tiny-button>
    <tiny-time-select v-model="value" placeholder="选择时间" ref="timeSelect"></tiny-time-select>
  </div>
</template>

<script>
import { TimeSelect, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTimeSelect: TimeSelect,
    TinyButton: Button
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    hanleFocus() {
      this.$refs.timeSelect.$el.querySelector('input').focus()
    }
  }
}
</script>

<style lang="less" scoped>
.time-select-demo-focus {
  width: 270px;
  & > * {
    margin-top: 12px;
  }
}
</style>
