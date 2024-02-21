<template>
  <div>
    <p>场景1：多选复制单个标签</p>
    <tiny-select ref="selectTagSelectable" v-model="value1" multiple tag-selectable>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <p>场景2：多选一键复制所有标签</p>
    <tiny-select ref="selectCopyable" v-model="value2" multiple copyable>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <p>场景3：多选设置复制文本分隔符</p>
    <tiny-select ref="selectCopyable" v-model="value2" multiple copyable text-split="/">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <p>复制到此处：</p>
    <tiny-input v-model="copyValue" class="copy-value" type="text"></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption, Input as TinyInput } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])
const value1 = ref(['选项1'])
const value2 = ref(['选项1', '选项2'])
const copyValue = ref('')
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
