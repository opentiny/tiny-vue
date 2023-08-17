<template>
  <div class="demo-input">
    <tiny-input placeholder="请输入内容" v-model="input">
      <template #suffix>
        <tiny-icon-calendar class="tiny-svg-size" />
      </template>
    </tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'
import { iconCalendar } from '@opentiny/vue-icon'

const input = ref('')
const TinyIconCalendar = iconCalendar()
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
