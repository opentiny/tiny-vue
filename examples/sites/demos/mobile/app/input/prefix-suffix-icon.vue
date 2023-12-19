<template>
  <div class="demo-input-icons">
    <tiny-input v-model="value" :prefix-icon="IconSearch" placeholder="前置图标示例"></tiny-input>
    <tiny-input v-model="value" :suffix-icon="IconSearch"  placeholder="后置图标示例"></tiny-input>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'
import { iconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      value: '',
      IconSearch: iconSearch()
    }
  }
}
</script>

<style scoped>
.demo-input-icons {
  height: 100%;
  padding: 20px 16px;
  background: #f5f5f5;
}

.demo-input-icons .tiny-mobile-input {
  margin-bottom: 16px;
}
</style>