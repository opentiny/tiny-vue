<template>
  <div class="demo-input">
    <tiny-input :suffix-icon="IconCalendar" v-model="value"></tiny-input>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'
import { iconCalendar } from '@opentiny/vue-icon'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      IconCalendar: iconCalendar(),
      value: ''
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
