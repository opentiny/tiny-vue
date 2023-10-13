<template>
  <div class="demo-input">
    <tiny-input placeholder="请输入内容" v-model="input">
      <template #prefix>
        <icon-search class="tiny-svg-size" />
      </template>
    </tiny-input>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'
import { IconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    IconSearch: IconSearch(),
    TinyInput: Input
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
