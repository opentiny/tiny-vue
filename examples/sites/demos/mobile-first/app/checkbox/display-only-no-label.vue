<template>
  <tiny-checkbox v-model="checked" display-only true-label="可以" false-label="不可以"></tiny-checkbox>
</template>

<script>
import { Checkbox } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox: Checkbox
  },
  data() {
    return {
      checked: true
    }
  }
}
</script>
