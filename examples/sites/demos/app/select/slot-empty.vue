<template>
  <tiny-select v-model="value" placeholder="请选择">
    <template #empty>
      <div>没有选项</div>
    </template>
  </tiny-select>
</template>

<script lang="jsx">
import { Select } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
