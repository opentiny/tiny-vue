<template>
  <div class="time-select-demo-icon">
    <tiny-time-select
      v-model="value"
      popper-class="myselect"
      placeholder="选择时间"
      :clear-icon="IconYes"
      clearable
      name="name"
    ></tiny-time-select>
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
      value: ''
    }
  }
}
</script>

<style scoped>
.time-select-demo-icon {
  width: 270px;
}
</style>
