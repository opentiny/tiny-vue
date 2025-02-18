<template>
  <div>
    <br />
    <div>场景 1：collapse-tags 折叠</div>
    <br />
    <tiny-base-select v-model="value1" :show-proportion="true" multiple collapse-tags>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <br />
    <br />
    <div>场景 2：hover-expand 折叠</div>
    <br />
    <tiny-base-select v-model="value2" multiple hover-expand>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <br />
    <br />
    <br />
    <div>场景 3：click-expand 折叠</div>
    <br />
    <tiny-base-select v-model="value3" :max-visible-rows="2" multiple click-expand>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyBaseSelect, TinyOption } from '@opentiny/vue'

const options = ref([
  { value: '选项 1', label: '北京' },
  { value: '选项 2', label: '上海' },
  { value: '选项 3', label: '天津' },
  { value: '选项 4', label: '重庆超长超长超长超长超长超长超长超长超长' },
  { value: '选项 5', label: '深圳' },
  { value: '选项 6', label: '广州' }
])

const value1 = ref(['选项 1', '选项 2'])
const value2 = ref(['选项 1', '选项 2', '选项 3', '选项 4'])
const value3 = ref(['选项 1', '选项 2', '选项 3', '选项 4', '选项 5'])
</script>

<style lang="less" scoped>
.tiny-base-select {
  width: 280px;
}
</style>
