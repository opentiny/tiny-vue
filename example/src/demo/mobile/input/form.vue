<template>
  <div class="input-wrap">
    <tiny-input
      v-model="input"
      type="form"
      is-select
      :select-menu="selectMenu"
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
      selectMenu: [
        {
          label: '黄金糕'
        },
        {
          label: '双皮奶'
        },
        {
          label: '蚵仔煎'
        },
        {
          label: '龙须面'
        },
        {
          label: '北京烤鸭'
        }
      ],
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
