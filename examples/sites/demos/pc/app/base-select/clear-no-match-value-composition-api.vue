<template>
  <div>
    <p>
      场景1：单选，val 找不到匹配值，val为： ,<span class="val">{{ val }}</span>
    </p>
    <tiny-base-select v-model="val" :clear-no-match-value="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>

    <p>
      场景2：多选，multiVal 找不到匹配值，multiVal 为：<span class="multi-val">{{ multiVal }}</span>
    </p>
    <tiny-base-select v-model="multiVal" :clear-no-match-value="true" multiple>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { BaseSelect as TinyBaseSelect, Option as TinyOption } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳' }
])

const val = ref('11')
const multiVal = ref(['选项2', '11'])
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
