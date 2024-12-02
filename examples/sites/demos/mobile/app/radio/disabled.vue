<template>
  <div class="demo">
    <p>禁用</p>
    <tiny-radio v-model="value" label="1" disabled>我同意</tiny-radio>
    <tiny-radio v-model="value" label="2" disabled>我拒绝</tiny-radio>
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
