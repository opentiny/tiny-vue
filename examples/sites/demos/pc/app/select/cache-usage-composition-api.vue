<template>
  <div>
    <tiny-select
      v-model="value"
      placeholder="请选择"
      clearable
      :options="options"
      :cache-op="cacheOp"
      @change="cacheChange"
    ></tiny-select>
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
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])
const value = ref('选项3')
const cacheChange = () => {
  cacheValue.value = window.localStorage.getItem(`tiny_memorize_${cacheOp.value.key}`)
}
</script>
