<template>
  <div>
    <tiny-button @click="hanleFocus">手动获取焦点</tiny-button>
    <tiny-time-select
      v-model="value"
      placeholder="选择时间"
      ref="timeSelect"
    ></tiny-time-select>
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
      this.$refs.timeSelect.focus()
    }
  }
}
</script>
