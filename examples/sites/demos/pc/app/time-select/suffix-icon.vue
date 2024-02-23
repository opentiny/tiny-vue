<template>
  <div class="time-select-demo-suffix">
    <tiny-time-select v-model="value" :suffix-icon="IconYes" placeholder="选择时间范围"></tiny-time-select>
  </div>
</template>

<script>
import { TimeSelect } from '@opentiny/vue'
import { IconYes } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimeSelect: TimeSelect
  },
  data() {
    return {
      IconYes: IconYes(),
      value: '08:30'
    }
  }
}
</script>

<style scoped>
.time-select-demo-suffix {
  width: 270px;
}
</style>
