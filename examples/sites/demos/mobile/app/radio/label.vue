<template>
  <div class="demo">
    <p>默认</p>
    <tiny-radio v-model="value" label="1">男</tiny-radio>
    <tiny-radio v-model="value" label="2">女</tiny-radio>
  </div>
</template>

<script>
import { TinyRadio } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyRadio
  },
  data() {
    return {
      value: '1'
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
