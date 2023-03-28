<template>
  <div>
    <tiny-time-select v-model="value" :suffix-icon="IconYes" placeholder="选择时间范围"></tiny-time-select>
  </div>
</template>

<script lang="jsx">
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
