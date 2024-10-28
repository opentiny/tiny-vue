<template>
  <tiny-select v-model="value" placeholder="请选择" no-data-text="None" title="标题">
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script>
import { TinySelect, TinyOption } from '@opentiny/vue'

export default {
  components: {
    TinySelect,
    TinyOption
  },
  data() {
    return {
      options: [],
      value: ''
    }
  }
}
</script>
