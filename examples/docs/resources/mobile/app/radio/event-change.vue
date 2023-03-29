<template>
  <div class="radio-wrap">
    <tiny-radio v-model="value" label="1" @change="handleChange">单选框 1</tiny-radio>
    <tiny-radio v-model="value" label="2" @change="handleChange">单选框 2</tiny-radio>
  </div>
</template>

<script lang="jsx">
import { Radio } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio
  },
  data() {
    return {
      value: '1'
    }
  },
  methods: {
    handleChange(val) {
      console.log('当前单选框为： ' + val)
    }
  }
}
</script>

<style scoped>
.radio-wrap {
  padding: 20px;
}
</style>
