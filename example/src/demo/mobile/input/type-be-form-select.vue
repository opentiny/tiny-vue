<template>
  <div class="input-wrap">
    <tiny-input
      v-model="input"
      is-select
      :select-menu="menus"
      placeholder="请输入内容"
      type="form"
    ></tiny-input>
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
          label:
            '我是小花,我是小花,我是小花,我是小花,我是小花,我是小花,我是小花'
        },
        {
          id: 2,
          label: '我是小树'
        },
        {
          id: 3,
          label: '我是小草'
        },
        {
          id: 4,
          label: '我是小叶',
          warn: true
        }
      ]
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
