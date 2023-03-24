<template>
  <div class="demo-input">
    <tiny-input :prefix-icon="IconCalendar" v-model="value"></tiny-input>
  </div>
</template>

<script lang="jsx">
import { Input } from '@opentiny/vue'
import { IconCalendar } from '@opentiny/vue-icon'

export default {
  components: {
    TinyInput: Input
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
