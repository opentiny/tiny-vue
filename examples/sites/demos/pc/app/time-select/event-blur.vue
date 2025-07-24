<template>
  <div class="time-select-demo-event">
    <tiny-time-select
      v-model="value1"
      @blur="bulr"
      @change="change"
      @focus="focus"
      placeholder="选择时间范围"
    ></tiny-time-select>
  </div>
</template>

<script>
import { TinyTimeSelect, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyTimeSelect
  },
  data() {
    return {
      value1: '08:30'
    }
  },
  methods: {
    bulr() {
      TinyModal.message({ message: 'blur 事件', status: 'info' })
    },
    change(value) {
      TinyModal.message({ message: value, status: 'info' })
    },
    focus() {
      TinyModal.message({ message: 'focus 事件', status: 'info' })
    }
  }
}
</script>

<style scoped>
.time-select-demo-event {
  width: 270px;
}
</style>
