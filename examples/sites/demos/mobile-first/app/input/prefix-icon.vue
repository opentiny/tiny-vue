<template>
  <div class="demo-input">
    <tiny-input :prefix-icon="IconCalendar" v-model="value"></tiny-input>
  </div>
</template>

<script>
import { TinyInput } from '@opentiny/vue'
import { IconCalendar } from '@opentiny/vue-icon'

export default {
  components: {
    TinyInput
  },
  data() {
    return {
      IconCalendar: IconCalendar(),
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
