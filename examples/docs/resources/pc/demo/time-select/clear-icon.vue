<template>
  <tiny-time-select
    v-model="value"
    popper-class="myselect"
    placeholder="选择时间"
    :clear-icon="IconYes"
    clearable
    name="name"
  ></tiny-time-select>
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
      value: ''
    }
  }
}
</script>
