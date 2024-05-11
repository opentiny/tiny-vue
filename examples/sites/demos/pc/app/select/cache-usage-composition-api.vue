<template>
  <div>
    <tiny-select v-model="value" clearable :options="options" :cache-op="cacheOp" @change="cacheChange"></tiny-select>
    <p class="cache-value">
      {{ cacheValue }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect } from '@opentiny/vue'

const cacheOp = ref({
  key: 'test'
})
const cacheValue = ref('')
const options = ref([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳' }
])
const value = ref('选项3')
const cacheChange = () => {
  cacheValue.value = window.localStorage.getItem(`tiny_memorize_${cacheOp.value.key}`)
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
