<template>
  <tiny-select v-model="value" placeholder="请选择" no-data-text="None" title="标题">
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script>
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options: [],
      value: ''
    }
  }
}
</script>
