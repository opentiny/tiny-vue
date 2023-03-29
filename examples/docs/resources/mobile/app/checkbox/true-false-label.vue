<template>
  <div class="checkbox-wrap">
    <tiny-checkbox v-model="checked" false-label="no" true-label="yes">复选框</tiny-checkbox>
    <br />
    当前选中状态的值为：{{ checked }}
  </div>
</template>

<script lang="jsx">
import { Checkbox } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox: Checkbox
  },
  data() {
    return {
      checked: 'yes'
    }
  }
}
</script>

<style>
.checkbox-wrap {
  padding: 20px;
}
</style>
