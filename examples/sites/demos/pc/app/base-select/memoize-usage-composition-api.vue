<template>
  <div>
    <tiny-base-select v-model="value">
      <tiny-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        @click.native="clickItem(item.value)"
        :highlight-class="item._highlightClass"
      ></tiny-option>
    </tiny-base-select>
    <p class="cache-value">
      {{ cacheValue }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { BaseSelect as TinyBaseSelect, Option as TinyOption } from '@opentiny/vue'
import Memorize from '@opentiny/vue-renderless/common/deps/memorize'

const MemorizeInstance = new Memorize({ key: 'test456' })

const options = MemorizeInstance.assemble([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳' }
])

const value = ref('选项3')
const cacheValue = ref([])

const clickItem = (value) => {
  MemorizeInstance.updateByKey(value)
  cacheValue.value = window.localStorage.getItem('tiny_memorize_test456')
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
