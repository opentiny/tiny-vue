<template>
  <div class="demo-input">
    <tiny-input placeholder="请输入内容" v-model="input">
      <template #prefix>
        <tiny-icon-search class="tiny-svg-size" />
      </template>
    </tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'
import { iconSearch } from '@opentiny/vue-icon'

const input = ref('')
const TinyIconSearch = iconSearch()
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
