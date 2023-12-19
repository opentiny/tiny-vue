<template>
  <div class="demo-input">
    <p>rows=3 cols=80</p>
    <tiny-input type="textarea" v-model="value" :rows="rows" :cols="cols" ></tiny-input>
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
      value: '杭州西湖是我国著名的旅游胜地，其位于浙江省杭州市西部。西湖是中国最美丽的湖泊之一。',
      rows: 3,
      cols: 30,
    }
  }
}
</script>

<style scoped>
.demo-input {
  height: 100%;
  padding: 20px 16px;
  background: #f5f5f5;
}
</style>
