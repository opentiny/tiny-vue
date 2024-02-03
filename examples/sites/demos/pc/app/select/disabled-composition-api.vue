<template>
  <div>
    <p>场景1： 下拉禁用</p>
    <tiny-select v-model="value1" disabled autocomplete>
      <tiny-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <p>场景2：多选 + 下拉某项禁用</p>
    <tiny-select v-model="value2" multiple>
      <tiny-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </tiny-option>
    </tiny-select>
    <p>场景3：单选 + 下拉某项禁用</p>
    <tiny-select v-model="value3">
      <tiny-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </tiny-option>
    </tiny-select>
    <p>场景4：多选 + 禁用项默认选中</p>
    <tiny-select v-model="value4" multiple>
      <tiny-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'

const options1 = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])

const options2 = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶', disabled: true },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])

const value1 = ref('')
const value2 = ref([])
const value3 = ref('')
const value4 = ref(['选项2', '选项3'])
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
