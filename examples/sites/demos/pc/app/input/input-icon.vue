<template>
  <div class="demo-input">
    <tiny-input :prefix-icon="TinyIconCalendar" v-model="value"></tiny-input>
    <tiny-input :suffix-icon="TinyIconCalendar" v-model="value"></tiny-input>
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
      TinyIconCalendar: IconCalendar(),
      value: ''
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  margin: 0 5px;
}
</style>
