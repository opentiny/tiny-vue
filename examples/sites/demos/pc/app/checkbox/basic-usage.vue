<template>
  <tiny-checkbox v-model="checked" name="tiny-checkbox">复选框</tiny-checkbox>
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
