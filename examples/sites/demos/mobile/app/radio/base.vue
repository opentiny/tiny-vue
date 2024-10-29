<template>
  <div class="demo">
    <p>默认</p>
    <tiny-radio v-model="value"></tiny-radio>
  </div>
</template>

<script>
import { TinyRadio } from '@opentiny/vue'

export default {
  components: {
    TinyRadio
  },
  data() {
    return {
      value: false
    }
  }
}
</script>

<style>
.demo {
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
}
</style>
