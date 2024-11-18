<template>
  <div class="checkbox-wrap">
    <tiny-checkbox v-model="checked" @change="handleChange">复选框</tiny-checkbox>
  </div>
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
  },
  methods: {
    handleChange(val) {
      console.log('当前值为：' + val)
    }
  }
}
</script>

<style scoped>
.checkbox-wrap {
  padding: 20px;
}
</style>
