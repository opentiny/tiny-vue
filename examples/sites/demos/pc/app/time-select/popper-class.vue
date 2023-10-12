<template>
  <div class="time-select-demo">
    <tiny-time-select
      v-model="value"
      placeholder="选择时间"
      popper-class="myClass"
      :popper-append-to-body="false"
    ></tiny-time-select>
  </div>
</template>

<script lang="jsx">
import { TimeSelect } from '@opentiny/vue'

export default {
  components: {
    TinyTimeSelect: TimeSelect
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style>
.time-select-demo {
  min-height: 200px;
}

.myClass {
  background: #dddddd;
}
</style>
