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
import { TinyTimeSelect } from '@opentiny/vue'
import { IconYes } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimeSelect
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
