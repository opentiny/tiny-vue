<template>
  <div class="demo-collapse">
    <br />
    <div>场景1： collapse-tags折叠</div>
    <br />
    <tiny-select v-model="value1" :show-proportion="true" multiple collapse-tags>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景2： hover-expand 折叠</div>
    <br />
    <tiny-select v-model="value2" multiple hover-expand>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <br />
    <div>场景3： click-expand 折叠</div>
    <br />
    <tiny-select v-model="value3" :max-visible-rows="2" :options="options" multiple click-expand> </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆超长超长超长超长超长超长超长超长超长' },
  { value: '选项5', label: '深圳' },
  { value: '选项6', label: '广州' },
  { value: '选项7', label: '武汉' }
])

const value1 = ref(['选项1', '选项2'])
const value2 = ref(['选项1', '选项2', '选项3', '选项4'])
const value3 = ref(['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7'])
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.demo-collapse {
  margin-bottom: 50px;
}
</style>
