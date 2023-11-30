<template>
  <tiny-select v-model="value">
    <template #empty>
      <div class="custom-empty">空数据插槽</div>
    </template>
  </tiny-select>
</template>

<script>
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

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.custom-empty {
  padding: 10px;
}
</style>
