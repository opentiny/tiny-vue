<template>
  <div class="radio-wrap">
    <tiny-radio
      v-model="value"
      label="1"
      border
      disabled
      text="单选框 1"
    ></tiny-radio>
    <tiny-radio v-model="value" label="2" border name="name"
      >单选框 2</tiny-radio
    >
  </div>
</template>

<script>
import { Radio } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio
  },
  data() {
    return {
      value: '1'
    }
  }
}
</script>

<style scoped>
.radio-wrap {
  padding: 20px;
}
</style>
