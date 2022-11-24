<template>
  <div class="input-wrap">
    <tiny-input v-model="input" type="textarea">
      <template #content> 自定义头部内容 </template>
    </tiny-input>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
<style>
.input-wrap {
  padding-top: 20px;
  height: 100%;
  background: #f4f4f4;
}
</style>
