<template>
  <div>
    <div>场景1：单选</div>
    <br />
    <tiny-select v-model="value" :searchable="true" :show-empty-image="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景2：多选</div>
    <br />
    <tiny-select v-model="multivalue" :searchable="true" multiple :show-empty-image="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景3：多选 + 保留搜索关键字</div>
    <br />
    <tiny-select v-model="multivalue" :searchable="true" reserve-keyword multiple :show-empty-image="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' },
  { value: '选项6', label: '北京豆汁' },
  { value: '选项7', label: '北京炸酱面' }
])
const value = ref('')
const multivalue = ref([])
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
