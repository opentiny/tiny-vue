<template>
  <div class="demo-input">
    <tiny-input v-model="input" is-select :select-menu="menus" placeholder="请输入内容" type="form"></tiny-input>
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
      input: 'hello mobile',
      menus: [
        {
          id: 1,
          label: '很长的选项。很长的选项。很长的选项。很长的选项。很长的选项。很长的选项。很长的选项。'
        },
        {
          id: 2,
          label: '选项2'
        },
        {
          id: 3,
          label: '选项3'
        },
        {
          id: 4,
          label: 'warn 为true的选项',
          warn: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.demo-input {
  padding: 20px 16px;
  height: 100%;
  background: #f5f5f5;
}
</style>
