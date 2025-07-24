<template>
  <div>
    <tiny-base-select
      v-model="value"
      clearable
      :options="options"
      :cache-op="cacheOp"
      @change="cacheChange"
    ></tiny-base-select>
    <p class="cache-value">
      {{ cacheValue }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyBaseSelect } from '@opentiny/vue'

const cacheOp = ref({
  key: 'test'
})
const cacheValue = ref('')
const options = ref([
  { value: '选项 1', label: '北京' },
  { value: '选项 2', label: '上海' },
  { value: '选项 3', label: '天津' },
  { value: '选项 4', label: '重庆' },
  { value: '选项 5', label: '深圳' }
])
const value = ref('选项 3')
const cacheChange = () => {
  cacheValue.value = window.localStorage.getItem(`tiny_memorize_${cacheOp.value.key}`)
}
</script>

<style lang="less" scoped>
.tiny-base-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
