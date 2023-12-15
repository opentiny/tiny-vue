<template>
  <div class="time-select-demo-size">
    <tiny-time-select v-model="value" placeholder="尺寸: medium" size="medium"></tiny-time-select>
    <tiny-time-select v-model="value" placeholder="尺寸: small" size="small"></tiny-time-select>
    <tiny-time-select v-model="value" placeholder="尺寸: mini" size="mini"></tiny-time-select>
  </div>
</template>

<script>
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

<style lang="less" scoped>
.time-select-demo-size {
  width: 270px;
  & > * {
    margin-top: 12px;
  }
}
</style>
