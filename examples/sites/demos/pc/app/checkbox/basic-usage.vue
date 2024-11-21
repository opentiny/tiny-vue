<template>
  <tiny-checkbox v-model="checked" name="tiny-checkbox">复选框</tiny-checkbox>
</template>

<script>
import { TinyCheckbox } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox
  },
  data() {
    return {
      checked: true
    }
  }
}
</script>
